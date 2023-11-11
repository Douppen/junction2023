// @ts-nocheck
import { setGlobalOptions } from 'firebase-functions/v2/options';
import { onCall } from 'firebase-functions/v2/https';
import * as logger from 'firebase-functions/logger';
import OpenAI from 'openai';

const DEFAULT_REGION = 'europe-west1';
setGlobalOptions({ region: DEFAULT_REGION });

export const helloWorld = onCall((req) => {
  const { text } = req.data;
  logger.log(text);
  logger.info('Hello logs! aaaaaaaabbb', { structuredData: true });
  return 'Hello from Firebase!' + text;
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
export const OpenAIAssistantPainInput = onCall(async (req) => {
  const openai = new OpenAI({ apiKey: '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' });
  const assistant_id = 'asst_qTuEb5TistWrBBQrieoRCrpB'; 
  const { description } = req.data;
  const thread = await openai.beta.threads.create({
    messages: [
      { 
        role: 'user',
        content: `description: ${description}`,
      },
    ],
  });
  
  const run = await openai.beta.threads.runs.create(thread.id, { assistant_id: assistant_id });
  
  let status = 'queued';
  var runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id); 
  
logger.log('before loop');
  
  while (status !== 'completed') {
    runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    status = runStatus.status;
    logger.log('Status:', status);

      // Add a delay before checking again (e.g., every few seconds)
      await new Promise((resolve) => setTimeout(resolve, 500));
   // 5 seconds delay
  }
  logger.log('after loop');
  const messages = await openai.beta.threads.messages.list(thread.id);
  logger.log(messages.data[0].content);
 
  return messages.data[0].content; 
});
export const CreateUserThread = onCall(async (req) => {
  const {userdata} = req.data; 
  const openai= new OpenAI({apiKey: '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' });
  const thread = await openai.beta.threads.create({
    messages: [
      { 
        role: 'user',
        content: `Data of the specific user: ${userdata}`,
      },
    ],
  });
  return thread.id
});
export const OpenAIAddmessagetoBigAssistant= onCall( async (req) => {
  const {threadid, message} = req.data
  const openai = new OpenAI({ apiKey: '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' });
  const assistant_id = 'asst_dOTLaf0iSAjwbvK5ULNT2nfE'; 
  
})
