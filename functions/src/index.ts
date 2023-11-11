// @ts-nocheck
import { setGlobalOptions } from 'firebase-functions/v2/options';
import { onCall } from 'firebase-functions/v2/https';
import { onSchedule } from 'firebase-functions/v2/scheduler';
import * as logger from 'firebase-functions/logger';
import OpenAI from 'openai';
import { getFirestore } from 'firebase-admin/firestore';
import { initializeApp } from 'firebase-admin/app';

initializeApp();

const DEFAULT_REGION = 'europe-west1';
setGlobalOptions({ region: DEFAULT_REGION });

const ASSISTANT_ID = 'asst_qTuEb5TistWrBBQrieoRCrpB';

// export const OpenAIcompletions = onCall(async (req) => {
//   const openai = new OpenAI({ apiKey: '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' });
//   const completion = await openai.completions.create({
//     model: 'gpt-3.5-turbo-instruct',
//     prompt: 'Say this is a test.',
//     max_tokens: 7,
//     temperature: 0,
//   });
//   const { text } = req.data;
//   return 'Hello from Firebase!' + text;
// });

// Implementing AI chatting for getting the variables separated from the description text, description as input
export const OpenAIAssistantPainInput = onCall(async (req) => {
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

  const run = await openai.beta.threads.runs.create(thread.id, { assistant_id: ASSISTANT_ID });

  let status = 'queued';
  var runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);

  while (status !== 'completed') {
    runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    status = runStatus.status;
    logger.log('Status:', status);

    // Add a delay before checking again (e.g., every few seconds)
    await new Promise((resolve) => setTimeout(resolve, 500));
    // 5 seconds delay
  }
  const messages = await openai.beta.threads.messages.list(thread.id);
  logger.log(messages.data[0].content);

  return messages.data[0].content;
});

export const sendSMSReminders = onSchedule('every day 18:00', async (_event) => {
  const db = getFirestore();
  const userRef = db.collection('users');
  const users = await userRef.get().then((s) => s.docs);

  const auth = Buffer.from('u23b270b98ddd5c3edce2a14d954097f0:1E93D770BCCD138511D0400FC006C0C3').toString('base64');

  const messageData = {
    from: 'Restorative',
    message: "You haven't yet added your data for today! Your data helps us help you better.",
  };

  const today = new Date().toDateString();

  Promise.all(
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
    })
  );
});

// We create a new GPT assistant thread for the user and pass it some data
export const runAfterOnboardingComplete = onCall(async (req) => {
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
export const chattingFunctionality = onCall(async (req) => {});
