import { InitSDKOptions, LogEventOptions, AppsFlyerLinkGeneratorArgs , AppsFlyerConsentArgs } from './index';
declare const initSdk: (args: InitSDKOptions) => Promise<unknown>;
declare const startSdk: () => void;
declare const logEvent: (args: LogEventOptions) => Promise<unknown>;
declare const setCustomerUserId: (userId: string) => Promise<unknown>;
declare const setAppInviteOneLink: (link: string) => Promise<unknown>;
declare const generateInviteUrl: (args: AppsFlyerLinkGeneratorArgs) => Promise<unknown>;
declare const enableTCFDataCollection: (shouldCollect: boolean) => Promise<unknown>;
declare const setConsentData: (consent: AppsFlyerConsentArgs) => Promise<unknown>;
declare const getAppsFlyerUID: () => string;
declare const stop: (isStopped: boolean) => Promise<unknown>;
declare const setSharingFilter: (partners: Array<string>) => Promise<unknown>;
declare const setSharingFilterForAllPartners: () => Promise<unknown>;
declare const _toHashMap: (obj: Object) => javautilHashMap<unknown, unknown>;
declare const _toValue: (val: any) => any;
export { initSdk, startSdk, logEvent, stop, setCustomerUserId, setAppInviteOneLink, generateInviteUrl, getAppsFlyerUID, enableTCFDataCollection, setConsentData,setSharingFilter,setSharingFilterForAllPartners,_toHashMap ,_toValue};

