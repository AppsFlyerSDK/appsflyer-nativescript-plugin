export interface InitSDKOptions {
    devKey: string,
    appId?: string,
    isDebug?: boolean
}

export interface TrackEventOptions {
    eventName: string,
    eventValues: Object
}

export function initSdk(options: InitSDKOptions): Promise<boolean>;

export function trackEvent(options:TrackEventOptions): Promise<boolean>;