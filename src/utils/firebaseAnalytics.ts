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

const getMissingFirebaseConfigKeys = () => {
  return ['apiKey', 'projectId', 'appId', 'measurementId'].filter(key => !firebaseConfig[key as keyof FirebaseAnalyticsConfig]);
};

const isLocalDebugHost = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  return ['localhost', '127.0.0.1', '0.0.0.0'].includes(window.location.hostname);
};

const logLocalAnalyticsDebug = (message: string, detail?: Record<string, any>) => {
  if (isLocalDebugHost()) {
    console.info(`[Firebase Analytics] ${message}`, detail ?? '');
  }
};

const toAnalyticsEventParams = (eventParams?: Record<string, any>) => {
  if (!eventParams) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(eventParams).filter(([, value]) => {
      return ['string', 'number', 'boolean'].includes(typeof value);
    }),
  );
};

const getFirebaseApp = (): FirebaseApp => {
  return getApps()[0] ?? initializeApp(firebaseConfig);
};

const getFirebaseAnalytics = async (): Promise<Analytics | undefined> => {
  if (!analyticsPromise) {
    analyticsPromise = (async () => {
      if (!hasRequiredFirebaseConfig()) {
        logLocalAnalyticsDebug('missing config; event will not be sent', {
          missingKeys: getMissingFirebaseConfigKeys(),
        });
        return undefined;
      }

      if (typeof window === 'undefined') {
        return undefined;
      }

      if (!(await isSupported())) {
        logLocalAnalyticsDebug('analytics is not supported in this browser/session');
        return undefined;
      }

      const analytics = getAnalytics(getFirebaseApp());

      logLocalAnalyticsDebug('initialized', {
        projectId: firebaseConfig.projectId,
        measurementId: firebaseConfig.measurementId,
      });

      return analytics;
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
        const analyticsParams = {
          ...toAnalyticsEventParams(eventParams),
          ...(isLocalDebugHost() ? { debug_mode: true } : {}),
        };

        logEvent(analytics, eventName, analyticsParams);
        logLocalAnalyticsDebug('event sent to SDK', { eventName, eventParams: analyticsParams });
      }
    })
    .catch(err => {
      console.error('Analytics error:', err);
    });
};
