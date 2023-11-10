import { setGlobalOptions } from "firebase-functions/v2/options";
import { onCall } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

const DEFAULT_REGION = "europe-west1";
setGlobalOptions({ region: DEFAULT_REGION });

export const helloWorld = onCall((req) => {
  logger.info("Hello logs!", { structuredData: true });
  return "Hello from Firebase!";
});
