export interface InitSDKOptions {
    devKey: string;
    appId?: string;
    isDebug?: boolean;
}

export interface TrackEventOptions {
    eventName: string;
    eventValues: Object;
}



export function initSdk(options: InitSDKOptions): Promise<{status: "success"}, any>;

export function trackEvent(options: TrackEventOptions): Promise<{status: "success"}, any>;

export function setCustomerUserId (userId: string): Promise<{status: "success"}, any>;
