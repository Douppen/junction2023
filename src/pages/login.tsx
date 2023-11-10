import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useAuth, useSigninCheck, useUser } from 'reactfire';

const provider = new GoogleAuthProvider();

export default function Page() {
  const auth = useAuth();
  const {
    status,
    data: { signedIn },
  } = useSigninCheck();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div>
      {signedIn ? <p>Signed in</p> : <p>Not signed in</p>}
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}
