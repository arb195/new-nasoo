import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: 'https://d634bc3c4eec4283a2e927947b96e6ca@o1396881.ingest.sentry.io/6727222',
  // tunnel: "/tunnel",
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
  replaysSessionSampleRate: 0.1,
  // If the entire session is not sampled, use the below sample rate to sample
  // sessions when an error occurs.
  replaysOnErrorSampleRate: 1.0,

  integrations: [new Sentry.Replay()],
});
