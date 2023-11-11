// @ts-nocheck
import { setGlobalOptions } from 'firebase-functions/v2/options';
import { onCall } from 'firebase-functions/v2/https';
import { onSchedule } from 'firebase-functions/v2/scheduler';
import * as logger from 'firebase-functions/logger';
import OpenAI from 'openai';
import { getFirestore } from 'firebase-admin/firestore';
import { initializeApp } from 'firebase-admin/app';
import { PromisePool } from 'es6-promise-pool';

initializeApp();

const DEFAULT_REGION = 'europe-west1';
setGlobalOptions({ region: DEFAULT_REGION });

const ASSISTANT_ID = 'asst_NezWZ2Y7NEgsLR2dGCOA2Ci1';
const JSON_ASSISTANT_ID = 'asst_qTuEb5TistWrBBQrieoRCrpB';

export const CreateGeneralAssistant = onCall(async (req) => {
  try {
    const openai = new OpenAI({ apiKey: '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' });
    const assistant = await openai.beta.assistants.create({
      name: 'Pain Assitant',
      description: `You should help me with incrementally improving my chronic pain. I would like to get better through novel activities and not have to rely on my pain medication as much.
    I will continuously give you daily updates on my pain level, its location, what I did that day, how active I was, if I tried any therapies, what my diet was like, etc.
    You should be my assistant helping me to get better, and as I give you more information every day, you should be able to help me more and more. `,
      tools: [
        {
          type: 'function',
          function: {
            name: 'get_listoff_improvements',
            description: 'Get a list of improvements the user could make to decrease their pain',
            parameters: {
              type: 'object',
              properties: {
                commands: {
                  type: 'array',
                  items: {
                    type: 'string',
                    description: 'An improvement the user could make',
                  },
                  description: 'List of improvements the user could make',
                },
              },
              required: ['commands'],
            },
          },
        },
        {
          type: 'function',
          function: {
            name: 'get_one_success',
            description:
              'Get based on the user input one thing that the user is doing which they should continue doing to help with pain relief',
            parameters: {
              type: 'object',
              properties: {},
            },
          },
        },
        {
          type: 'function',
          function: {
            name: 'get_similar_activities',
            description: 'Get a list of activities that is similar to what the user previously has enjoyed',
            parameters: {
              type: 'object',
              properties: {
                commands: {
                  type: 'array',
                  items: {
                    type: 'string',
                    description: 'An activity the user would enjoy',
                  },
                  description: 'List of activities the user would enjoy',
                },
              },
              required: ['commands'],
            },
          },
        },
        {
          type: 'function',
          function: {
            name: 'get_activities',
            description: 'Get a list of activities of what the user has done',
            parameters: {
              type: 'object',
              properties: {
                commands: {
                  type: 'array',
                  items: {
                    type: 'string',
                    description: 'An activity the user enjoys',
                  },
                  description: 'List of activities the user enjoys',
                },
              },
              required: ['commands'],
            },
          },
        }
      ],
      model: 'gpt-4-1106-preview',
    });

    logger.log({
      id: assistant.id,
    });

    return { id: assistant.id };
  } catch (e) {
    logger.error(e);
  }
});
export const CreatetheSpecificInputAssistant = onCall(async (req) => {
  new OpenAI({ apiKey: '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' });
  const assistant = await openai.beta.assistants.create({
    name: 'Pain Assitant',
    description: `You are a assistant that from the description provided by the user should define following variables (activity_of_the_user, body_part, vital_information, trigger) the variables should be returned as an json.  `,
    model: 'gpt-4-1106-preview',
  });
  return assistant.id;
});
export const OpenAIcompletions = onCall(async (req) => {
  const openai = new OpenAI({ apiKey: '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' });
  const completion = await openai.completions.create({
    model: 'gpt-3.5-turbo-instruct',
    prompt: 'Say this is a test.',
    max_tokens: 7,
    temperature: 0,
  });
  logger.log(completion); // It prints the completed message to the backend
  /*
  The Request response stuff
  */
  const { text } = req.data;

  return 'Hello from Firebase!' + text;
});

/*
Implementing AI chatting for getting the variables separated from the description text
*/
/*
description as input
*/
export const AssistantPainInputToJSON = onCall(async (req) => {
  const openai = new OpenAI({ apiKey: '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' });
  const { description } = req.data;
  const thread = await openai.beta.threads.create({
    messages: [
      {
        role: 'user',
        content: `description: ${description}`,
      },
    ],
  });

  const run = await openai.beta.threads.runs.create(thread.id, { assistant_id: JSON_ASSISTANT_ID });

  let runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
  let completed = runStatus.status === 'completed';

  while (!completed) {
    runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    completed = runStatus.status === 'completed';
    logger.log(`Run status: ${runStatus.status}`);
    // Add a delay before checking again (e.g., every few seconds)
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  const messages = await openai.beta.threads.messages.list(thread.id);

  const content = messages.data[0].content[0].text.value;

  const parsed = content.replaceAll('`', '').replaceAll('\n', '').replaceAll('json', '');

  let json = {};
  try {
    json = JSON.parse(parsed);
  } catch (error) {
    json = { error: true, raw: parsed };
  }

  return json;
});

export const CreateUserThread = onCall(async (req) => {
  const { userdata } = req.data;
  const openai = new OpenAI({ apiKey: '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' });
  const thread = await openai.beta.threads.create({
    messages: [
      {
        role: 'user',
        content: `Data of the specific user: ${userdata}`,
      },
    ],
  });
  return thread.id;
});

export const OpenAIAddmessagetoBigAssistant = onCall(async (req) => {
  const { threadid, message } = req.data;
  const openai = new OpenAI({ apiKey: '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' });
  const assistant_id = 'asst_dOTLaf0iSAjwbvK5ULNT2nfE';
});

// Reduce the bill :))
const MAX_CONCURRENT = 3;

export const sendSMSReminders = onSchedule('every day 18:00', async (_event) => {
  const db = getFirestore();
  const userRef = db.collection('users');
  const users = await userRef.get().then((s) => s.docs);

  const auth = Buffer.from('u23b270b98ddd5c3edce2a14d954097f0:1E93D770BCCD138511D0400FC006C0C3').toString('base64');

  const messageData = {
    from: 'Restorative',
    message:
      "You haven't yet added your data for today! Your data helps us help you better. Add your data here: https://junction2023-datagrabbarna.web.app/login",
  };

  const today = new Date().toDateString();

  const pool = new PromisePool(
    users.map(async (user) => {
      if (user.data().updateTime.toDate().toDateString() != today) {
        console.log(`Sending update to ${user.id}`);
        // TODO: Figure out user phone number
        const phoneNumber = '+358505244320';
        const message = new URLSearchParams({ ...messageData, to: phoneNumber }).toString();

        await fetch('https://api.46elks.com/a1/sms', {
          method: 'post',
          body: message,
          headers: { Authorization: 'Basic ' + auth },
        })
          .then((res) => res.json())
          .then((json) => console.log(json))
          .catch((err) => console.log(err));
      }
    }),
    MAX_CONCURRENT
  );

  pool.start().then(() => console.log('All reminders sent'));
});

// We create a new GPT assistant thread for the user and pass it some data
export const runAfterOnboardingComplete = onCall(async (req) => {
  logger.log('onboarding complete');
  const user = req.auth;
  const openai = new OpenAI({ apiKey: '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' });
  const thread = await openai.beta.threads.create();
  await getFirestore().collection('users').doc(user.uid).update({
    assistantThreadId: thread.id,
  });
});

export const addMessageToAssistantThread = onCall(async (req) => {
  const user = req.auth;
  const { message } = req.data;

  if (!user) {
    return {
      error: 'not authed',
    };
  }

  const userDoc = await getFirestore().collection('users').doc(user.uid).get();
  const userDocData = userDoc.data();

  const threadId = userDocData.assistantThreadId;

  if (!threadId) {
    return {
      error: 'no thread id',
    };
  }

  const openai = new OpenAI({ apiKey: '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' });

  await openai.beta.threads.messages.create(threadId, {
    role: 'user',
    content: message,
  });
});

export const chattingFunctionality = onCall(async (req) => {
  try {
    const user = req.auth;
    const { message } = req.data;

    logger.log('message' + message);

    if (!user) {
      logger.error('not authed');
      return {
        error: 'not authed',
      };
    }

    const userDoc = await getFirestore().collection('users').doc(user.uid).get();
    const userDocData = userDoc.data();

    const threadId = userDocData.assistantThreadId;

    if (!threadId) {
      logger.error('no thread id');
      return {
        error: 'no thread id',
      };
    }

    const openai = new OpenAI({ apiKey: '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' });

    await openai.beta.threads.messages.create(threadId, {
      role: 'user',
      content: message,
    });

    const run = await openai.beta.threads.runs.create(threadId, {
      assistant_id: ASSISTANT_ID,
      instructions: 'You should answer the users question',
    });
    /*
  Implementing the code that waits for the response
  */
    let status = 'queued';
    var runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);

    while (status !== 'completed') {
      runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);
      status = runStatus.status;

      // Add a delay before checking again (e.g., every few seconds)
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
    const messages = await openai.beta.threads.messages.list(threadId);
    logger.log('here are the messages');
    // const parsed = JSON.parse(messages);
    logger.log({ openAIMessages: messages.body.data });
  } catch (e) {
    logger.error('error');
  }
});
