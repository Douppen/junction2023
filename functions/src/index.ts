import { setGlobalOptions } from 'firebase-functions/v2/options';
import { onCall } from 'firebase-functions/v2/https';
import * as logger from 'firebase-functions/logger';
import OpenAI from "openai";

const DEFAULT_REGION = 'europe-west1';
setGlobalOptions({ region: DEFAULT_REGION });

export const helloWorld = onCall((req) => {
  const { text } = req.data;
  logger.log(text);
  logger.info('Hello logs! aaaaaaaabbb', { structuredData: true });
  return 'Hello from Firebase!' + text;
});

export const OpenAIcompletions = onCall(async (req) => {
  const openai= new OpenAI({ apiKey: "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"});
  const completion= await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt: "Say this is a test.",
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
