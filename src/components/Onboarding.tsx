import { httpsCallable } from 'firebase/functions';
import { useFunctions } from 'reactfire';

export const OnBoardingForm = () => {
  const functions = useFunctions();
  const func = httpsCallable(functions, 'addMessageToAssistantThread');
  const afterOnboarding = httpsCallable(functions, 'runAfterOnboardingComplete');

  return (
    <div>
      <h1 className="text-2xl">Onboarding form</h1>
      <form>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div>
      </form>
      <button className="py-2 px-5 bg-amber-400 rounded-md" onClick={() => afterOnboarding()}>
        Run after onboarding complete
      </button>
      <button
        className="py-2 px-5 bg-orange-200 rounded-md"
        onClick={() => func({ message: 'Hello world this is a test' })}
      >
        Test endpoint
      </button>
    </div>
  );
};
