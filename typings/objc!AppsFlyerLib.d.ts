declare class AppsFlyerCrossPromotionHelper extends NSObject {
  static alloc(): AppsFlyerCrossPromotionHelper; // inherited from NSObject

  static new(): AppsFlyerCrossPromotionHelper; // inherited from NSObject

  static logCrossPromotionAndOpenStore(
    appID: string,
    campaign: string,
    parameters: NSDictionary<any, any>,
    openStoreBlock: (p1: NSURLSession, p2: NSURL) => void
  ): void;

  static logCrossPromotionImpression(appID: string, campaign: string): void;
}

declare class AppsFlyerLinkGenerator extends NSObject {
  static alloc(): AppsFlyerLinkGenerator; // inherited from NSObject

  static new(): AppsFlyerLinkGenerator; // inherited from NSObject

  addParameterValueForKey(value: string, key: string): void;

  addParameters(parameters: NSDictionary<any, any>): void;

  setAppleAppID(appleAppID: string): void;

  setBaseDeeplink(baseDeeplink: string): void;

  setCampaign(campaign: string): void;

  setChannel(channel: string): void;

  setDeeplinkPath(deeplinkPath: string): void;

  setReferrerCustomerId(referrerCustomerId: string): void;

  setReferrerImageURL(referrerImageURL: string): void;

  setReferrerName(referrerName: string): void;

  setReferrerUID(referrerUID: string): void;

  setBrandDomain(brandDomain: string): void;
}

declare class AppsFlyerShareInviteHelper extends NSObject {
  static alloc(): AppsFlyerShareInviteHelper; // inherited from NSObject

  static generateInviteUrlWithLinkGeneratorCompletionHandler(
    generatorCreator: (p1: AppsFlyerLinkGenerator) => AppsFlyerLinkGenerator,
    completionHandler: (p1: NSURL) => void
  ): void;

  static new(): AppsFlyerShareInviteHelper; // inherited from NSObject

  static logInvite(channel: string, parameters: NSDictionary<any, any>): void;
}

//AppsFlyerConsent bridging class
declare class AppsFlyerConsent extends NSObject {
  static alloc(): AppsFlyerConsent; // required for instantiation

  static new(): AppsFlyerConsent; // override "new" as unavailable

  isUserSubjectToGDPR: boolean;
  hasConsentForDataUsage: boolean;
  hasConsentForAdsPersonalization: boolean;

  static initForGDPRUserWithHasConsentForDataUsageHasConsentForAdsPersonalization(
    hasConsentForDataUsage: boolean,
    hasConsentForAdsPersonalization: boolean
  ): AppsFlyerConsent;
  static initNonGDPRUser(): AppsFlyerConsent;
}

declare class AppsFlyerLib extends NSObject {
  static alloc(): AppsFlyerLib; // inherited from NSObject

  static new(): AppsFlyerLib; // inherited from NSObject

  static shared(): AppsFlyerLib;

  advertiserId: string;

  appInviteOneLinkID: string;

  appleAppID: string;

  appsFlyerDevKey: string;

  currencyCode: string;

  customData: NSDictionary<any, any>;

  customerUserID: string;

  delegate: AppsFlyerLibDelegate;

  deepLinkDelegate: AppsFlyerDeepLinkDelegate;

  anonymizeUser: boolean;

  disableCollectASA: boolean;

  host: string;

  isDebug: boolean;

  shouldCollect: boolean;

  isStopped: boolean;

  minTimeBetweenSessions: number;

  shouldCollectDeviceName: boolean;

  useReceiptValidationSandbox: boolean;

  useUninstallSandbox: boolean;

  setConsentData(consent: AppsFlyerConsent): void;

  enableTCFDataCollection(shouldCollect: boolean): void;

  setPluginInfoWithPluginVersionAdditionalParams(
    initWithPlugin: AFSDKPlugin,
    pluginVersion: string,
    additionalParams: NSDictionary<any, any>
  ): void;

  continueUserActivityRestorationHandler(
    userActivity: NSUserActivity,
    restorationHandler: (p1: NSArray<any>) => void
  ): boolean;

  didUpdateUserActivity(userActivity: NSUserActivity): void;

  getAppsFlyerUID(): string;

  getSDKVersion(): string;

  handleOpenURLSourceApplication(url: NSURL, sourceApplication: string): void;

  handleOpenURLSourceApplicationWithAnnotation(
    url: NSURL,
    sourceApplication: string,
    annotation: any
  ): void;

  handleOpenUrlOptions(url: NSURL, options: NSDictionary<any, any>): void;

  handlePushNotification(pushPayload: NSDictionary<any, any>): void;

  loadConversionDataWithDelegate(delegate: AppsFlyerLibDelegate): void;

  registerUninstall(deviceToken: NSData): void;

  remoteDebuggingCallWithData(data: string): void;

  setUserEmailsWithCryptType(
    userEmails: NSArray<any>,
    type: EmailCryptType
  ): void;

  start(): void;

  logEventWithValues(eventName: string, values: NSDictionary<any, any>): void;

  logEventWithEventNameEventValuesCompletionHandler(
    eventName: string,
    values: NSDictionary<any, any>,
    completionHandler: (p1: NSDictionary<any, any>, p2: NSError) => void
  ): void;

  logLocationLatitude(longitude: number, latitude: number): void;

  validateAndLogInAppPurchase(
    productIdentifier: string,
    price: string,
    currency: string,
    tranactionId: string,
    params: NSDictionary<any, any>,
    successBlock: (p1: NSDictionary<any, any>) => void,
    failedBlock: (p1: NSError, p2: any) => void
  ): void;

  waitForATTUserAuthorizationWithTimeoutInterval(
    timeoutInterval: NSTimeInterval
  ): void;
}

declare class AppsFlyerDeepLinkResult extends NSObject {
  static alloc(): AppsFlyerDeepLinkResult; // inherited from NSObject
  static new(): AppsFlyerDeepLinkResult;

  deepLink: AppsFlyerDeepLink;
  status: AFSDKDeepLinkResultStatus;
  error: NSError;
}

declare class AppsFlyerDeepLink extends NSObject {
  static alloc(): AppsFlyerDeepLink; // inherited from NSObject
  static new(): AppsFlyerDeepLink;

  clickEvent: NSDictionary<string, any>;
  deeplinkValue: string;
  matchType: string;
  clickHTTPReferrer: string;
  mediaSource: string;
  campaign: string;
  campaignId: string;
  afSub1: string;
  afSub2: string;
  afSub3: string;
  afSub4: string;
  afSub5: string;
  isDeferred: boolean;
  toString(): string;
}

interface AppsFlyerDeepLinkDelegate extends NSObjectProtocol {
  didResolveDeepLink?(result: AppsFlyerDeepLinkResult): void;
}

declare var AppsFlyerDeepLinkDelegate: {
  prototype: AppsFlyerDeepLinkDelegate;
};

interface AppsFlyerLibDelegate extends NSObjectProtocol {
  onAppOpenAttribution?(attributionData: NSDictionary<any, any>): void;

  onAppOpenAttributionFailure?(error: NSError): void;

  onConversionDataSuccess?(installData: NSDictionary<any, any>): void;

  onConversionDataFail?(error: NSError): void;
}
declare var AppsFlyerLibDelegate: {
  prototype: AppsFlyerLibDelegate;
};

declare const enum EmailCryptType {
  None = 0,

  SHA1 = 1,

  MD5 = 2,

  SHA256 = 3,
}

declare const enum AFSDKPlugin {
  AFSDKPluginIOSNative = 0,
  AFSDKPluginUnity = 1,
  AFSDKPluginFlutter = 2,
  AFSDKPluginReactNative = 3,
  AFSDKPluginAdobeAir = 4,
  AFSDKPluginAdobeMobile = 5,
  AFSDKPluginCocos2dx = 6,
  AFSDKPluginCordova = 7,
  AFSDKPluginMparticle = 8,
  AFSDKPluginNativeScript = 9,
  AFSDKPluginExpo = 10,
  AFSDKPluginUnreal = 11,
  AFSDKPluginXamarin = 12,
  AFSDKPluginCapacitor = 13,
  AFSDKPluginSegment = 14,
  AFSDKPluginAdobeSwiftAEP = 15,
}
