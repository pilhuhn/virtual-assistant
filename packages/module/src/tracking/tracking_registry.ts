import { InitProps, TrackingSpi } from './tracking_spi';
import { TrackingApi } from './tracking_api';
import TrackingProviderProxy from './trackingProviderProxy';
import { ConsoleTrackingProvider } from './console_tracking_provider';
import { SegmentTrackingProvider } from './segment_tracking_provider';
import { PosthogTrackingProvider } from './posthog_tracking_provider';
import { UmamiTrackingProvider } from './umami_tracking_provider';

export const getTrackingProviders = (initProps: InitProps): TrackingApi => {
  const providers: TrackingSpi[] = [];
  providers.push(new SegmentTrackingProvider());
  providers.push(new PosthogTrackingProvider());
  providers.push(new UmamiTrackingProvider());
  // TODO dynamically find and register providers

  // Initialize them
  for (const provider of providers) {
    if (Object.keys(provider).length > 0) {
      provider.initialize(initProps);
    }
  }
  // Add the console provider
  providers.push(new ConsoleTrackingProvider()); // TODO noop- provider?

  return new TrackingProviderProxy(providers);
};

export default getTrackingProviders;
