export interface InitSDKOptions {
    devKey: string;
    appId?: string;
    isDebug?: boolean;
    onConversionDataSuccess?: (obj: ConversionData) => void;
    onConversionDataFailure?: (err: string) => void;
}

export interface TrackEventOptions {
    eventName: string;
    eventValues: Object;
}

export function initSdk(options: InitSDKOptions): Promise<{status} | any>;

export function trackEvent(options: TrackEventOptions): Promise<{status} | any>;

export function setCustomerUserId (userId: string): Promise<{status} | any>;

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
