import { TrackingApi, TrackingEventProperties } from './tracking_api';
class TrackingProviderProxy implements TrackingApi {
  providers: TrackingApi[] = [];

  constructor(providers: TrackingApi[]) {
    this.providers = providers;
  }

  identify(userID: string): void {
    for (const provider of this.providers) {
      provider.identify(userID);
    }
  }

  trackSingleItem(eventName: string, properties?: TrackingEventProperties): void {
    for (const provider of this.providers) {
      provider.trackSingleItem(eventName, properties);
    }
  }

  trackPageView(url: string | undefined): void {
    for (const provider of this.providers) {
      provider.trackPageView(url);
    }
  }
}

export default TrackingProviderProxy;
