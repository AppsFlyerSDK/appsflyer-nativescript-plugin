export interface InitSDKOptions {
    devKey: string;
    appId?: string;
    isDebug?: boolean;
    timeToWaitForATTUserAuthorization?: NSTimeInterval;  
    manualStart?: boolean; //If true need to call startSdk , otherwise the SDK will start when initSdk is invoked.
    onConversionDataSuccess?: (obj: ConversionData) => void;
    onConversionDataFail?: (err: string) => void;
    onAppOpenAttribution?: (obj: Object) => void;
    onAppOpenAttributionFailure?: (err: string) => void;
    onDeepLinking?: (obj: Object) => void;
}

export interface LogEventOptions {
    eventName: string;
    eventValues: Object;
    onSuccess?: () => void;
    onError?: (err: string) => void;
}

export interface AppsFlyerLinkGeneratorArgs {
    params: Object;
    onSuccess?: (link: string) => void;
    onError?: (err: string) => void;
}

//Interface for AppsFlyerConsent parameters
export interface AppsFlyerConsentArgs{
  isUserSubjectToGDPR: boolean 
  hasConsentForDataUsage?: boolean 
  hasConsentForAdsPersonalization?: boolean 
}

export function initSdk(options: InitSDKOptions): Promise<{status} | any>;

export function startSdk(): void;

export function logEvent(options: LogEventOptions): Promise<{status} | any>;

export function setSharingFilter(partners: Array<String>): Promise<{status} | any>;

export function setSharingFilterForAllPartners(): Promise<{status} | any>;

export function setCustomerUserId (userId: string): Promise<{status} | any>;

export function setAppInviteOneLink (link: string): void;

export function enableTCFDataCollection(shouldCollect: boolean): void;

export function getAppsFlyerUID(): string;

export function setConsentData(consent: AppsFlyerConsentArgs) : void;

export function stop (isStopped: bool): void;

export function generateInviteUrl (args: AppsFlyerLinkGeneratorArgs): void;



export interface ConversionData {
  af_status;
  af_message;
  media_source;
  campaign;
  clickid;
  af_siteid;
  af_sub1;
  af_sub2;
  af_sub3;
  af_sub4;
  af_sub5;
  af_keywords;
  click_time;
  install_time;
  agency;
  is_first_launch;
  is_fb;
  ad_id;
  campaign_id;
  adset;
  adset_id;
}
