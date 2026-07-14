import { FirebaseApp, getApps, initializeApp } from 'firebase/app';
import { Analytics, getAnalytics, isSupported, logEvent } from 'firebase/analytics';

type FirebaseAnalyticsConfig = {
  apiKey?: string;
  authDomain?: string;
  databaseURL?: string;
  projectId?: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId?: string;
  measurementId?: string;
};

declare const __LIDO_FIREBASE_CONFIG__: FirebaseAnalyticsConfig | undefined;

const firebaseConfig: FirebaseAnalyticsConfig =
  typeof __LIDO_FIREBASE_CONFIG__ === 'undefined' ? {} : __LIDO_FIREBASE_CONFIG__;

let analyticsPromise: Promise<Analytics | undefined> | undefined;

const hasRequiredFirebaseConfig = () => {
  return Boolean(firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId && firebaseConfig.measurementId);
};

const getFirebaseApp = (): FirebaseApp => {
  return getApps()[0] ?? initializeApp(firebaseConfig);
};

const getFirebaseAnalytics = async (): Promise<Analytics | undefined> => {
  if (!analyticsPromise) {
    analyticsPromise = (async () => {
      if (!hasRequiredFirebaseConfig() || typeof window === 'undefined' || !(await isSupported())) {
        return undefined;
      }

      return getAnalytics(getFirebaseApp());
    })().catch(err => {
      console.error('Analytics init error:', err);
      return undefined;
    });
  }

  return analyticsPromise;
};

export const logAnalyticsEvent = (eventName: string, eventParams?: Record<string, any>) => {
  getFirebaseAnalytics()
    .then(analytics => {
      if (analytics) {
        logEvent(analytics, eventName, eventParams);
      }
    })
    .catch(err => {
      console.error('Analytics error:', err);
    });
};
