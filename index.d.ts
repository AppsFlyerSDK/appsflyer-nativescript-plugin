export interface InitSDKOptions {
    devKey: string,
    appId?: string,
    isDebug?: boolean
}

export interface TrackEventOptions {
    eventName: string,
    eventValues: Object
}



export function initSdk(options: InitSDKOptions): Promise<any>;

export function trackEvent(options:TrackEventOptions): Promise<any>;