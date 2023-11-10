import { Inter } from "next/font/google";
import { useCallableFunctionResponse, useSigninCheck } from "reactfire";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const signinCheck = useSigninCheck();
  const functionResponse = useCallableFunctionResponse("helloWorld");

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {signinCheck.data?.signedIn ? (
        <>
          <h1 className="text-4xl text-center">
            Welcome, {signinCheck.data.user.displayName}!
          </h1>
        </>
      ) : (
        <h1 className="text-4xl text-center">
          Welcome! You are not signed in.
        </h1>
      )}
      {functionResponse.status === "loading" ? (
        <p>Loading...</p>
      ) : (
        <p>Function response: {functionResponse.data as string}</p>
      )}
    </main>
  );
}
