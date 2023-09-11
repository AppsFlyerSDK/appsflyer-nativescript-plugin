import { InitSDKOptions, LogEventOptions } from './index';
declare const initSdk: (args: InitSDKOptions) => Promise<unknown>;
declare const logEvent: (args: LogEventOptions) => Promise<unknown>;
declare const stop: (isStopped: bool) => Promise<unknown>;
declare const setCustomerUserId: (userId: string) => Promise<unknown>;
declare const setAppInviteOneLink: (link: string) => Promise<unknown>;
declare const generateInviteUrl: (args: AppsFlyerLinkGeneratorArgs) => Promise<unknown>;
export { initSdk, logEvent, stop, setCustomerUserId, setAppInviteOneLink, generateInviteUrl, };
