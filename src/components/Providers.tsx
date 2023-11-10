import { firebaseConfig } from "@/lib/firebase";
import { getAnalytics, isSupported } from "firebase/analytics";
import { FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Firebase v9+
import { getFirestore } from "firebase/firestore"; // Firebase v9+
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";
import { ReactNode, useEffect, useState } from "react";

import {
  FirebaseAppProvider,
  FirestoreProvider,
  AuthProvider,
  useFirebaseApp,
  AnalyticsProvider,
  StorageProvider,
  FunctionsProvider,
} from "reactfire";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <FirebaseComponents>{children}</FirebaseComponents>
    </FirebaseAppProvider>
  );
}

function FirebaseComponents({ children }: { children: ReactNode }) {
  const app = useFirebaseApp();
  const db = getFirestore(app);
  const auth = getAuth(app);
  const storage = getStorage(app);
  const functions = getFunctions(app, "europe-west1");

  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={db}>
        <StorageProvider sdk={storage}>
          <FunctionsProvider sdk={functions}>{children}</FunctionsProvider>
        </StorageProvider>
      </FirestoreProvider>
    </AuthProvider>
  );
}

function FirebaseAnalyticsWrapper({
  children,
  app,
}: {
  children: ReactNode;
  app: FirebaseApp;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <AnalyticsProvider sdk={getAnalytics(app)}>
          {children}
        </AnalyticsProvider>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
