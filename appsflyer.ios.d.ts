import { InitSDKOptions, LogEventOptions } from './index';
export declare const initSdk: (args: InitSDKOptions) => Promise<unknown>;
export declare const logEvent: (args: LogEventOptions) => Promise<unknown>;
export declare const stop: (isStopped: bool) => Promise<unknown>;
export declare const setCustomerUserId: (userId: string) => Promise<unknown>;
export declare const setAppInviteOneLink: (link: string) => Promise<unknown>;
export declare const generateInviteUrl: (args: AppsFlyerLinkGeneratorArgs) => Promise<unknown>;
