## Getting Started

After cloning the repo, install dependencies:

```bash
npm install
```

Install the Firebase CLI:

```bash
npm install -g firebase-tools
```

Login to Firebase:

```bash
firebase login
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

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
