# Restorative 
*Junction 2023*
## Description


## Online Deployment 

The project is deployed to [here](https://junction2023-datagrabbarna.web.app/login)


## Getting Started

After cloning the repo, install dependencies:

```bash
npm install
```

Then if you haven't already, install the Firebase CLI globally on your machine:

```bash
npm install -g firebase-tools
```

Login to Firebase if you haven't already:

```bash
firebase login
```

Running the development server is a bit more complex since we need to spin up an instance of the database, auth service, and functions service locally.
You cannot just run `npm run dev`.
Instead you need to start Firebase emulators using the following command in the root of the repo:

```bash
firebase emulators:start
```

If prompted, run the following command before the one above:

```bash
firebase experiments:enable webframeworks
```

This will start the Firebase emulators for the database, auth, and functions services.
You should be able to view the frontend locally on **port 3009** and the Firebase emulators UI on **port 4000**.
The **Firebase Emulators UI** can be used to create mock users locally, watch function logs, and change data in the database, all locally.

**Important**: if you are developing Firebase functions, and want them to automatically reload when you make changes in dev, you need to cd into the functions directory in a separate terminal window and run `npm run build:watch`. This will compile the Typescript functions into Javascript and watch for changes.

For more info on using Firebase Emulators, see the docs: [https://firebase.google.com/docs/emulator-suite](https://firebase.google.com/docs/emulator-suite)

So, you should have one terminal process running `firebase emulators:start` in the root of the repo and another terminal process running `npm run build:watch` in /functions.

## Info

- The project uses [Firebase](https://firebase.google.com/) for hosting, database (Firestore), and auth.
- We use Reactfire as a wrapper around the Firebase SDK for frontend querying. Reactfire offers a number of React hooks that make it easier to interact with all Firebase services so you don't have to write useEffects everywhere. For more complex queries, you should use the Firebase SDK directly.
- For custom server logic, we use 2nd gen Firebase Functions. These are written in Typescript and can be found in the `functions` folder. You can find the docs here [https://firebase.google.com/docs/functions](https://firebase.google.com/docs/functions). Functions can be called directly by the frontend by using the `onCall` method, or they can be run on certain events such as a Database document write using `onDocumentWritten`. **Note**: The `functions` directory has its own package.json and node_modules folder. For dependencies that should only be used in the frontend, install them in the root package.json. For dependencies that should only be used in the backend, such as the OpenAI sdk, you should `cd` into the functions directory and install the dependency from there.
- We use DaisyUI for styling. It's a Tailwind CSS component library that makes it easier to write CSS. You can find the docs here [https://daisyui.com/](https://daisyui.com/).
- We use React Hook Form for handling form submission logic and custom validation. You can find the docs here [https://react-hook-form.com/](https://react-hook-form.com/).
- We use the OpenAI NodeJS SDK for interacting with their services in Typescript. You can find the docs here [https://platform.openai.com/docs/overview](https://platform.openai.com/docs/overview). We try to use their Assistants API [https://platform.openai.com/docs/assistants/overview](https://platform.openai.com/docs/assistants/overview) for most of our use cases. Check out the docs on the Assistants API and also check out OpenAI GPT Function Calling [https://platform.openai.com/docs/guides/function-calling](https://platform.openai.com/docs/guides/function-calling).

## Deployment

The production deployment can be found at [https://junction2023-datagrabbarna.web.app/](https://junction2023-datagrabbarna.web.app/).

Pushing to main will automatically trigger a new deployment.
