
declare class AppsFlyerCrossPromotionHelper extends NSObject {

	static alloc(): AppsFlyerCrossPromotionHelper; // inherited from NSObject

	static new(): AppsFlyerCrossPromotionHelper; // inherited from NSObject

	static trackAndOpenStoreCampaignParamtersOpenStore(appID: string, campaign: string, parameters: NSDictionary<any, any>, openStoreBlock: (p1: NSURLSession, p2: NSURL) => void): void;

	static trackCrossPromoteImpressionCampaign(appID: string, campaign: string): void;
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
}

declare class AppsFlyerShareInviteHelper extends NSObject {

	static alloc(): AppsFlyerShareInviteHelper; // inherited from NSObject

	static generateInviteUrlWithLinkGeneratorCompletionHandler(generatorCreator: (p1: AppsFlyerLinkGenerator) => AppsFlyerLinkGenerator, completionHandler: (p1: NSURL) => void): void;

	static new(): AppsFlyerShareInviteHelper; // inherited from NSObject

	static trackInviteParameters(channel: string, parameters: NSDictionary<any, any>): void;
}

declare class AppsFlyerTracker extends NSObject {

	static alloc(): AppsFlyerTracker; // inherited from NSObject

	static new(): AppsFlyerTracker; // inherited from NSObject

	static sharedTracker(): AppsFlyerTracker;

	advertiserId: string;

	appInviteOneLinkID: string;

	appleAppID: string;

	appsFlyerDevKey: string;

	currencyCode: string;

	customData: NSDictionary<any, any>;

	customerUserID: string;

	delegate: AppsFlyerTrackerDelegate;

	deviceTrackingDisabled: boolean;

	disableAppleAdSupportTracking: boolean;

	disableIAdTracking: boolean;

	host: string;

	isDebug: boolean;

	isStopTracking: boolean;

	minTimeBetweenSessions: number;

	shouldCollectDeviceName: boolean;

	useReceiptValidationSandbox: boolean;

	useUninstallSandbox: boolean;

	continueUserActivityRestorationHandler(userActivity: NSUserActivity, restorationHandler: (p1: NSArray<any>) => void): boolean;

	didUpdateUserActivity(userActivity: NSUserActivity): void;

	getAppsFlyerUID(): string;

	getSDKVersion(): string;

	handleOpenURLSourceApplication(url: NSURL, sourceApplication: string): void;

	handleOpenURLSourceApplicationWithAnnotation(url: NSURL, sourceApplication: string, annotation: any): void;

	handleOpenUrlOptions(url: NSURL, options: NSDictionary<any, any>): void;

	handlePushNotification(pushPayload: NSDictionary<any, any>): void;

	loadConversionDataWithDelegate(delegate: AppsFlyerTrackerDelegate): void;

	registerUninstall(deviceToken: NSData): void;

	remoteDebuggingCallWithData(data: string): void;

	setUserEmailsWithCryptType(userEmails: NSArray<any>, type: EmailCryptType): void;

	trackAppLaunch(): void;

	trackEventWithValue(eventName: string, value: string): void;

	trackEventWithValues(eventName: string, values: NSDictionary<any, any>): void;

	trackLocationLatitude(longitude: number, latitude: number): void;

	validateAndTrackInAppPurchasePriceCurrencyTransactionIdAdditionalParametersSuccessFailure(productIdentifier: string, price: string, currency: string, tranactionId: string, params: NSDictionary<any, any>, successBlock: (p1: NSDictionary<any, any>) => void, failedBlock: (p1: NSError, p2: any) => void): void;
}

interface AppsFlyerTrackerDelegate extends NSObjectProtocol {

	onAppOpenAttribution?(attributionData: NSDictionary<any, any>): void;

	onAppOpenAttributionFailure?(error: NSError): void;

	onConversionDataReceived?(installData: NSDictionary<any, any>): void;

	onConversionDataRequestFailure?(error: NSError): void;
}
declare var AppsFlyerTrackerDelegate: {

	prototype: AppsFlyerTrackerDelegate;
};

declare const enum EmailCryptType {

	None = 0,

	SHA1 = 1,

	MD5 = 2,

	SHA256 = 3
}
