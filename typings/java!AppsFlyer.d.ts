/* tslint:disable:no-unused-variable no-internal-module no-namespace max-classes-per-file ban-types class-name */
/* tslint:disable indent max-line-length member-ordering unified-signatures member-access semicolon trailing-comma */

import javautilconcurrentExecutor = java.util.concurrent.Executor;
/// <reference path="./java.util.concurrent.Executor.d.ts" />
declare module com {
	export module appsflyer {
		export class AFExecutor {
			public getThreadPoolExecutor(): javautilconcurrentExecutor;
			public static getInstance(): com.appsflyer.AFExecutor;
			public getSerialExecutor(): javautilconcurrentExecutor;
		}
	}
}

declare module com {
	export module appsflyer {
		export class AFInAppEventParameterName {
			/**
			 * Constructs a new instance of the com.appsflyer.AFInAppEventParameterName interface with the provided implementation.
			 */
			public constructor(implementation: {
			});
			public static DESTINATION_A: string;
			public static DESTINATION_B: string;
			public static DATE_B: string;
			public static DATE_A: string;
			public static TRAVEL_END: string;
			public static RECEIPT_ID: string;
			public static CONTENT_LIST: string;
			public static RETURNING_ARRIVAL_DATE: string;
			public static SUGGESTED_DESTINATIONS: string;
			public static DESTINATION_LIST: string;
			public static LATITUDE: string;
			public static MAX_RATING_VALUE: string;
			public static PARAM_1: string;
			public static DEEP_LINK: string;
			public static REVENUE: string;
			public static PRICE: string;
			public static NUM_CHILDREN: string;
			public static NUM_INFANTS: string;
			public static PAYMENT_INFO_AVAILIBLE: string;
			public static LEVEL: string;
			public static PREFERRED_NEIGHBORHOODS: string;
			public static RATING_VALUE: string;
			public static REGION: string;
			public static USER_SCORE: string;
			public static REVIEW_TEXT: string;
			public static COUNTRY: string;
			public static CONTENT_TYPE: string;
			public static PARAM_8: string;
			public static PARAM_9: string;
			public static PARAM_6: string;
			public static PARAM_7: string;
			public static PURCHASE_CURRENCY: string;
			public static PARAM_4: string;
			public static VALIDATED: string;
			public static PARAM_5: string;
			public static PARAM_2: string;
			public static PARAM_3: string;
			public static EVENT_START: string;
			public static DEPARTING_DEPARTURE_DATE: string;
			public static SEARCH_STRING: string;
			public static QUANTITY: string;
			public static DEPARTING_ARRIVAL_DATE: string;
			public static CLASS: string;
			public static AF_CHANNEL: string;
			public static NEW_VERSION: string;
			public static CITY: string;
			public static CUSTOMER_USER_ID: string;
			public static ACHIEVEMENT_ID: string;
			public static TUTORIAL_ID: string;
			public static COUPON_CODE: string;
			public static EVENT_END: string;
			public static CURRENCY: string;
			public static SUCCESS: string;
			public static REGSITRATION_METHOD: string;
			public static NUM_ADULTS: string;
			public static RETURNING_DEPARTURE_DATE: string;
			public static CONTENT_ID: string;
			public static TRAVEL_START: string;
			public static VIRTUAL_CURRENCY_NAME: string;
			public static DESCRIPTION: string;
			public static SUGGESTED_HOTELS: string;
			public static PREFERRED_PRICE_RANGE: string;
			public static LONGTITUDE: string;
			public static OLD_VERSION: string;
			public static SCORE: string;
			public static PREFERRED_NUM_STOPS: string;
			public static PROJECTED_REVENUE: string;
			public static PARAM_10: string;
			public static PREFERRED_STAR_RATINGS: string;
			public static HOTEL_SCORE: string;
		}
	}
}

declare module com {
	export module appsflyer {
		export class AFInAppEventType {
			/**
			 * Constructs a new instance of the com.appsflyer.AFInAppEventType interface with the provided implementation.
			 */
			public constructor(implementation: {
			});
			public static LEVEL_ACHIEVED: string;
			public static CUSTOMER_SEGMENT: string;
			public static LOCATION_CHANGED: string;
			public static OPENED_FROM_PUSH_NOTIFICATION: string;
			public static ORDER_ID: string;
			public static INITIATED_CHECKOUT: string;
			public static TUTORIAL_COMPLETION: string;
			public static LOGIN: string;
			public static RE_ENGAGE: string;
			public static UPDATE: string;
			public static ADD_PAYMENT_INFO: string;
			public static CONTENT_VIEW: string;
			public static LOCATION_COORDINATES: string;
			public static ADD_TO_WISH_LIST: string;
			public static ADD_TO_CART: string;
			public static SEARCH: string;
			public static RATE: string;
			public static COMPLETE_REGISTRATION: string;
			public static SPENT_CREDIT: string;
			public static TRAVEL_BOOKING: string;
			public static ACHIEVEMENT_UNLOCKED: string;
			public static SHARE: string;
			public static INVITE: string;
			public static PURCHASE: string;
		}
	}
}

import androidcontentContext = android.content.Context;
/// <reference path="./android.content.Context.d.ts" />
declare module com {
	export module appsflyer {
		export class AFKeystoreWrapper {
			public constructor(param0: androidcontentContext);
		}
	}
}

import javalangThrowable = java.lang.Throwable;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module appsflyer {
		export class AFLogger {
			public static afInfoLog(param0: string, param1: boolean): void;
			public static resetDeltaTime(): void;
			public static afErrorLog(param0: string, param1: javalangThrowable): void;
			public static afWarnLog(param0: string): void;
			public static afErrorLog(param0: string, param1: javalangThrowable, param2: boolean): void;
			public static afRDLog(param0: string): void;
			public static afInfoLog(param0: string): void;
			public constructor();
			public static afDebugLog(param0: string): void;
		}
		export module AFLogger {
			export class LogLevel {
				public static NONE: com.appsflyer.AFLogger.LogLevel;
				public static ERROR: com.appsflyer.AFLogger.LogLevel;
				public static WARNING: com.appsflyer.AFLogger.LogLevel;
				public static INFO: com.appsflyer.AFLogger.LogLevel;
				public static DEBUG: com.appsflyer.AFLogger.LogLevel;
				public static VERBOSE: com.appsflyer.AFLogger.LogLevel;
				public getLevel(): number;
				public static values(): native.Array<com.appsflyer.AFLogger.LogLevel>;
				public static valueOf(param0: string): com.appsflyer.AFLogger.LogLevel;
			}
		}
	}
}

import javautilMap = java.util.Map;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module appsflyer {
		export class AppsFlyerConversionListener {
			/**
			 * Constructs a new instance of the com.appsflyer.AppsFlyerConversionListener interface with the provided implementation.
			 */
			public constructor(implementation: {
				onConversionDataSuccess(param0: javautilMap): void;
				onConversionDataFail(param0: string): void;
				onAppOpenAttribution(param0: javautilMap): void;
				onAttributionFailure(param0: string): void;
			});
			public onAttributionFailure(param0: string): void;
			public onAppOpenAttribution(param0: javautilMap): void;
			public onConversionDataSuccess(param0: javautilMap): void;
			public onConversionDataFail(param0: string): void;
		}
	}
}

// import DeepLinkResult = com.appsflyer.deeplink;;
declare module com {
	export module appsflyer {
		export module deeplink {
			export class DeepLinkListener {
				/**
				 * Constructs a new instance of the DeepLinkListener interface with the provided implementation.
				 */
				public constructor(implementation: {
					onDeepLinking(param0: DeepLinkResult): void;
				});
				public onDeepLinking(param0: DeepLinkResult): void;
			}
		}
	}
}

declare module com {
	export module appsflyer {
		export module internal {
			export module platform_extension {
				export class Plugin {
					public static NATIVE_SCRIPT: com.appsflyer.internal.platform_extension.Plugin
				}
				export class PluginInfo {
					public constructor(
						plugin: com.appsflyer.internal.platform_extension.Plugin, version: string, additionalParams: java.util.HashMap
					);
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module appsflyer {
		export class AppsFlyerInAppPurchaseValidatorListener {
			/**
			 * Constructs a new instance of the com.appsflyer.AppsFlyerInAppPurchaseValidatorListener interface with the provided implementation.
			 */
			public constructor(implementation: {
				onValidateInApp(): void;
				onValidateInAppFailure(param0: string): void;
			});
			public onValidateInAppFailure(param0: string): void;
			public onValidateInApp(): void;
		}
	}
}

declare module com {
    export module appsflyer {
        export class AppsFlyerConsent {

            public isUserSubjectToGDPR: boolean;
            public hasConsentForDataUsage: boolean | null; 
            public hasConsentForAdsPersonalization: boolean | null; 

            public static forGDPRUser(hasConsentForDataUsage: boolean, hasConsentForAdsPersonalization: boolean): com.appsflyer.AppsFlyerConsent;

            public static forNonGDPRUser(): com.appsflyer.AppsFlyerConsent;
        }
    }
}

import javautilHashMap = java.util.HashMap;
import androidappActivity = android.app.Activity;
import androidappApplication = android.app.Application;
import androidcontentIntent = android.content.Intent;
import androidcontentContentResolver = android.content.ContentResolver;
import javautilconcurrentScheduledExecutorService = java.util.concurrent.ScheduledExecutorService;
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.Application.d.ts" />
/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./com.appsflyer.AppsFlyerConversionListener.d.ts" />
/// <reference path="./com.appsflyer.AppsFlyerInAppPurchaseValidatorListener.d.ts" />
/// <reference path="./com.appsflyer.AppsFlyerLib.d.ts" />
/// <reference path="./com.appsflyer.ConversionDataListener.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.concurrent.ScheduledExecutorService.d.ts" />
declare module com {
	export module appsflyer {
		export class AppsFlyerLib {
			public static LOG_TAG: string;
			public static ATTRIBUTION_ID_CONTENT_URI: string;
			public static ATTRIBUTION_ID_COLUMN_NAME: string;
			public static PRE_INSTALL_SYSTEM_RO_PROP: string;
			public static PRE_INSTALL_SYSTEM_DEFAULT: string;
			public static PRE_INSTALL_SYSTEM_DEFAULT_ETC: string;
			public static AF_PRE_INSTALL_PATH: string;
			public setConsentData(consent: AppsFlyerConsent): void;
			public enableTCFDataCollection(shouldCollect: bool): void;
			public stop(isStopped: bool, context: androidcontentContext): void;
			public setPluginInfo(pluginInfo: PluginInfo): void;
			public subscribeForDeepLink(deepLinkListener: DeepLinkListener): void;
			public registerConversionListener(param0: androidcontentContext, param1: com.appsflyer.AppsFlyerConversionListener): void;
			public getHost(): string;
			public setGCMProjectID(param0: string): void;
			public sendDeepLinkData(param0: androidappActivity): void;
			public setImeiData(param0: string): void;
			public setExtension(param0: string): void;
			public setGCMProjectNumber(param0: androidcontentContext, param1: string): void;
			public logSession(param0: androidcontentContext): void;
			public setAppId(param0: string): void;
			public logLocation(param0: androidcontentContext, param1: number, param2: number): void;
			public setCollectIMEI(param0: boolean): void;
			public setAppInviteOneLink(param0: string): void;
			public setUserEmails(param0: native.Array<string>): void;
			public getAttributionId(param0: androidcontentContentResolver): string;
			public setAndroidIdData(param0: string): void;
			public setAppUserId(param0: string): void;
			public setMinTimeBetweenSessions(param0: number): void;
			public static getInstance(): com.appsflyer.AppsFlyerLib;
			public setCollectAndroidID(param0: boolean): void;
			public init(param0: string, param1: com.appsflyer.AppsFlyerConversionListener, param2: androidcontentContext): com.appsflyer.AppsFlyerLib;
			public logEvent(param0: androidcontentContext, param1: string, param2: javautilMap): void;
			public logEvent(param0: androidcontentContext, param1: string, param2: javautilMap, param3: com.appsflyer.attribution.appsFlyerRequestListener): void;
			public registerValidatorListener(param0: androidcontentContext, param1: com.appsflyer.AppsFlyerInAppPurchaseValidatorListener): void;
			public sendPushNotificationData(param0: androidappActivity): void;
			public setDeepLinkData(param0: androidcontentIntent): void;
			public setUserEmail(param0: string): void;
			public setAdditionalData(param0: javautilHashMap): void;
			public setCurrencyCode(param0: string): void;
			public setSharingFilter(param0: Array): void;
			public setSharingFilterForAllPartners(): void;
			public unregisterConversionListener(): void;
			public getAppsFlyerUID(param0: androidcontentContext): string;
			public getSdkVersion(): string;
			public setUserEmails(param0: com.appsflyer.AppsFlyerProperties.EmailsCryptType, param1: native.Array<string>): void;
			public setCustomerUserId(param0: string): void;
			public setLogLevel(param0: com.appsflyer.AFLogger.LogLevel): void;
			public start(param0: androidappApplication): void;
			public isPreInstalledApp(param0: androidcontentContext): boolean;
			public setHostName(param0: string): void;
			public setDebugLog(param0: boolean): void;
			public setCollectFingerPrint(param0: boolean): void;
			public start(param0: androidappApplication, param1: string): void;
			public start(param0: androidcontentContext, param1: string): void;
			public getConversionData(param0: androidcontentContext, param1: com.appsflyer.ConversionDataListener): void;
			public setGCMProjectNumber(param0: string): void;
			public updateServerUninstallToken(param0: androidcontentContext, param1: string): void;
			public anonymizeUser(param0: boolean): void;
			public setIsUpdate(param0: boolean): void;
			public validateAndLogInAppPurchase(param0: androidcontentContext, param1: string, param2: string, param3: string, param4: string, param5: string, param6: javautilHashMap): void;
		}
		export module AppsFlyerLib {
			export abstract class a {
				public attributionCallbackFailure(param0: string, param1: number): void;
				public run(): void;
				public attributionCallback(param0: javautilMap): void;
				public getUrl(): string;
			}
			export class b {
				public run(): void;
				public constructor(param0: com.appsflyer.AppsFlyerLib, param1: androidcontentContext);
			}
			export class c {
				public run(): void;
			}
			export class d extends com.appsflyer.AppsFlyerLib.a {
				public attributionCallbackFailure(param0: string, param1: number): void;
				public getUrl(): string;
				public attributionCallback(param0: javautilMap): void;
				public constructor(param0: com.appsflyer.AppsFlyerLib, param1: androidcontentContext, param2: string, param3: javautilconcurrentScheduledExecutorService);
			}
			export class e {
				public run(): void;
			}
		}
	}
}

import javalangObject = java.lang.Object;
import androidcontentSharedPreferences = android.content.SharedPreferences;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.SharedPreferences.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module appsflyer {
		export class AppsFlyerProperties {
			public static APP_USER_ID: string;
			public static APP_ID: string;
			public static CURRENCY_CODE: string;
			public static IS_UPDATE: string;
			public static AF_KEY: string;
			public static USE_HTTP_FALLBACK: string;
			public static COLLECT_ANDROID_ID: string;
			public static COLLECT_IMEI: string;
			public static COLLECT_FINGER_PRINT: string;
			public static CHANNEL: string;
			public static EXTENSION: string;
			public static COLLECT_MAC: string;
			public static DEVICE_TRACKING_DISABLED: string;
			public static LAUNCH_PROTECT_ENABLED: string;
			public static IS_MONITOR: string;
			public static USER_EMAIL: string;
			public static USER_EMAILS: string;
			public static EMAIL_CRYPT_TYPE: string;
			public static ADDITIONAL_CUSTOM_DATA: string;
			public static COLLECT_FACEBOOK_ATTR_ID: string;
			public static DISABLE_LOGS_COMPLETELY: string;
			public static ENABLE_GPS_FALLBACK: string;
			public static DISABLE_OTHER_SDK: string;
			public static ONELINK_ID: string;
			public static ONELINK_DOMAIN: string;
			public static ONELINK_SCHEME: string;
			public isOnReceiveCalled(): boolean;
			public setOnReceiveCalled(): void;
			public isLogsDisabledCompletely(): boolean;
			public getLong(param0: string, param1: number): number;
			public getObject(param0: string): javalangObject;
			public setCustomData(param0: string): void;
			public setUserEmails(param0: string): void;
			public set(param0: string, param1: boolean): void;
			public isFirstLaunchCalled(): boolean;
			public setFirstLaunchCalled(param0: boolean): void;
			public saveProperties(param0: androidcontentSharedPreferences): void;
			public remove(param0: string): void;
			public setReferrer(param0: string): void;
			public getReferrer(param0: androidcontentContext): string;
			public loadProperties(param0: androidcontentContext): void;
			public isEnableLog(): boolean;
			public static getInstance(): com.appsflyer.AppsFlyerProperties;
			public setFirstLaunchCalled(): void;
			public getInt(param0: string, param1: number): number;
			public getString(param0: string): string;
			public set(param0: string, param1: string): void;
			public set(param0: string, param1: native.Array<string>): void;
			public getBoolean(param0: string, param1: boolean): boolean;
			public set(param0: string, param1: number): void;
			public isOtherSdkStringDisabled(): boolean;
		}
		export module AppsFlyerProperties {
			export class EmailsCryptType {
				public static NONE: com.appsflyer.AppsFlyerProperties.EmailsCryptType;
				public static SHA1: com.appsflyer.AppsFlyerProperties.EmailsCryptType;
				public static MD5: com.appsflyer.AppsFlyerProperties.EmailsCryptType;
				public static SHA256: com.appsflyer.AppsFlyerProperties.EmailsCryptType;
				public static values(): native.Array<com.appsflyer.AppsFlyerProperties.EmailsCryptType>;
				public static valueOf(param0: string): com.appsflyer.AppsFlyerProperties.EmailsCryptType;
				public getValue(): number;
			}
		}
	}
}

declare module com {
	export module appsflyer {
		export class BuildConfig {
			public static DEBUG: boolean;
			public static APPLICATION_ID: string;
			public static BUILD_TYPE: string;
			public static FLAVOR: string;
			public static VERSION_CODE: number;
			public static VERSION_NAME: string;
			public static AF_BUILD_VERSION: number;
			public static AF_SDK_VERSION: string;
			public constructor();
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module appsflyer {
		export class ConversionDataListener {
			/**
			 * Constructs a new instance of the com.appsflyer.ConversionDataListener interface with the provided implementation.
			 */
			public constructor(implementation: {
				onConversionDataLoaded(param0: javautilMap): void;
				onConversionFailure(param0: string): void;
			});
			public onConversionDataLoaded(param0: javautilMap): void;
			public onConversionFailure(param0: string): void;
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module appsflyer {
		export module attribution{
			export class AppsFlyerRequestListener {
				/**
				 * Constructs a new instance of the com.appsflyer.ConversionDataListener interface with the provided implementation.
				 */
				public constructor(implementation: {
					onSuccess(): void;
					onError(param0: number, param1: string): void;
				});
				public onSuccess(): void;
				public onError(param0: number, param1: string): void;
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.appsflyer.AppsFlyerLib.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module appsflyer {
		// export class CreateOneLinkHttpTask extends com.appsflyer.OneLinkHttpTask {
		// 	public setListener(param0: com.appsflyer.CreateOneLinkHttpTask.ResponseListener): void;
		// 	public constructor(param0: string, param1: javautilMap, param2: com.appsflyer.AppsFlyerLib, param3: androidcontentContext);
		// }
		export module CreateOneLinkHttpTask {
			export class ResponseListener {
				/**
				 * Constructs a new instance of the com.appsflyer.CreateOneLinkHttpTask$ResponseListener interface with the provided implementation.
				 */
				public constructor(implementation: {
					onResponse(param0: string): void;
					onResponseError(param0: string): void;
				});
				public onResponse(param0: string): void;
				public onResponseError(param0: string): void;
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module appsflyer {
		export class DebugLogQueue {
			public static getInstance(): com.appsflyer.DebugLogQueue;
			public push(param0: string): void;
			public pop(): com.appsflyer.DebugLogQueue.Item;
		}
		export module DebugLogQueue {
			export class Item {
				public getMsg(): string;
				public getTimestamp(): number;
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module appsflyer {
		export class FirebaseInstanceIdListener {
			public onTokenRefresh(): void;
			public constructor();
		}
	}
}

declare module com {
	export module appsflyer {
		export class GcmInstanceIdListener {
			public onTokenRefresh(): void;
			public constructor();
		}
	}
}

declare module com {
	export module appsflyer {
		export class InstanceIDListener extends com.appsflyer.GcmInstanceIdListener {
			public constructor();
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
declare module com {
	export module appsflyer {
		export class MultipleInstallBroadcastReceiver {
			public constructor();
			public onReceive(param0: androidcontentContext, param1: androidcontentIntent): void;
		}
	}
}

declare module com {
	export module appsflyer {
		export abstract class OneLinkHttpTask {
			public setConnProvider(param0: com.appsflyer.OneLinkHttpTask.HttpsUrlConnectionProvider): void;
			public run(): void;
		}
		export module OneLinkHttpTask {
			export class HttpsUrlConnectionProvider {
				public constructor();
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module appsflyer {
		export class ServerConfigHandler {
			public static getUrl(param0: string): string;
			public constructor();
		}
	}
}

declare module com {
	export module appsflyer {
		export class ServerParameters {
			public static DEFAULT_HOST: string;
			public static ADVERTISING_ID_PARAM: string;
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
declare module com {
	export module appsflyer {
		export class SingleInstallBroadcastReceiver {
			public constructor();
			public onReceive(param0: androidcontentContext, param1: androidcontentIntent): void;
		}
	}
}

declare module com {
	export module appsflyer {
		export class a {
			public getId(): string;
		}
	}
}

declare module com {
	export module appsflyer {
		export class b {
			public toString(): string;
		}
	}
}

declare module com {
	export module appsflyer {
		export class c {
			public run(): void;
		}
	}
}

import javautilList = java.util.List;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.appsflyer.cache.RequestCacheData.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module appsflyer {
		export module cache {
			export class CacheManager {
				public static CACHE_MAX_SIZE: number;
				public static AF_CACHE_DIR: string;
				public deleteRequest(param0: string, param1: androidcontentContext): void;
				public static getInstance(): com.appsflyer.cache.CacheManager;
				public init(param0: androidcontentContext): void;
				public getCachedRequests(param0: androidcontentContext): javautilList;
				public cacheRequest(param0: com.appsflyer.cache.RequestCacheData, param1: androidcontentContext): void;
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module appsflyer {
		export module cache {
			export class RequestCacheData {
				public getCacheKey(): string;
				public getVersion(): string;
				public getPostData(): string;
				public getRequestURL(): string;
				public constructor(param0: string, param1: string, param2: string);
				public setRequestURL(param0: string): void;
				public constructor(param0: native.Array<string>);
				public setPostData(param0: string): void;
				public setCacheKey(param0: string): void;
				public setVersion(param0: string): void;
			}
		}
	}
}

import androidcontentComponentName = android.content.ComponentName;
import androidosIBinder = android.os.IBinder;
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
declare module com {
	export module appsflyer {
		export class d {
			public onServiceConnected(param0: androidcontentComponentName, param1: androidosIBinder): void;
			public onServiceDisconnected(param0: androidcontentComponentName): void;
			public getBinder(): androidosIBinder;
		}
	}
}

/// <reference path="./android.os.IBinder.d.ts" />
declare module com {
	export module appsflyer {
		export class e {
			public getId(): string;
			public asBinder(): androidosIBinder;
		}
	}
}

declare module com {
	export module appsflyer {
		export class f {
			public toString(): string;
		}
		export module f {
			export class a {
				public static GOOGLE: com.appsflyer.f.a;
				public static AMAZON: com.appsflyer.f.a;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module appsflyer {
		export class g {
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module appsflyer {
		export class h {
			public onCancelled(): void;
			public onPreExecute(): void;
			public doInBackground(param0: native.Array<string>): string;
			public onPostExecute(param0: string): void;
		}
	}
}

import androidosBundle = android.os.Bundle;
import javalangrefWeakReference = java.lang.ref.WeakReference;
import javalangVoid = java.lang.Void;
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.Application.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.appsflyer.i.d.ts" />
/// <reference path="./java.lang.Void.d.ts" />
/// <reference path="./java.lang.ref.WeakReference.d.ts" />
declare module com {
	export module appsflyer {
		export class i {
			public onActivityStarted(param0: androidappActivity): void;
			public onActivityResumed(param0: androidappActivity): void;
			public onActivitySaveInstanceState(param0: androidappActivity, param1: androidosBundle): void;
			public onActivityStopped(param0: androidappActivity): void;
			public onActivityDestroyed(param0: androidappActivity): void;
			public registerListener(param0: androidappApplication, param1: com.appsflyer.i.b): void;
			public static getInstance(): com.appsflyer.i;
			public onActivityPaused(param0: androidappActivity): void;
			public onActivityCreated(param0: androidappActivity, param1: androidosBundle): void;
		}
		export module i {
			export class a {
				public doInBackground(param0: native.Array<javalangVoid>): javalangVoid;
				public constructor(param0: com.appsflyer.i, param1: javalangrefWeakReference);
			}
			export class b {
				/**
				 * Constructs a new instance of the com.appsflyer.i$b interface with the provided implementation.
				 */
				public constructor(implementation: {
					onBecameForeground(param0: androidappActivity): void;
					onBecameBackground(param0: javalangrefWeakReference): void;
				});
				public onBecameForeground(param0: androidappActivity): void;
				public onBecameBackground(param0: javalangrefWeakReference): void;
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module appsflyer {
		export class j extends com.appsflyer.OneLinkHttpTask {
		}
		export module j {
			export class a {
				/**
				 * Constructs a new instance of the com.appsflyer.j$a interface with the provided implementation.
				 */
				public constructor(implementation: {
					onGetOneLinkParameters(param0: javautilMap): void;
					onGetOneLinkParametersError(param0: string): void;
				});
				public onGetOneLinkParameters(param0: javautilMap): void;
				public onGetOneLinkParametersError(param0: string): void;
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module appsflyer {
		export class k {
			public static getOneLinkAuthorization(param0: number): string;
			public getHashCodeV2(param0: javautilMap): string;
			public static bytesToHex(param0: native.Array<number>): string;
			public getHashCode(param0: javautilMap): string;
			public static toMD5(param0: string): string;
			public static toSHA1(param0: string): string;
			public static toSha256(param0: string): string;
		}
	}
}

/// <reference path="./java.lang.ref.WeakReference.d.ts" />
declare module com {
	export module appsflyer {
		export class l {
			public static id(param0: javalangrefWeakReference): string;
		}
	}
}

import javalangClass = java.lang.Class;
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module appsflyer {
		export class m {
		}
		export module m {
			export class a {
				/**
				 * Constructs a new instance of the com.appsflyer.m$a interface with the provided implementation.
				 */
				public constructor(implementation: {
					forName(param0: string): javalangClass;
				});
				public forName(param0: string): javalangClass;
			}
			export class b {
				public static UNITY: com.appsflyer.m.b;
				public static REACT_NATIVE: com.appsflyer.m.b;
				public static CORDOVA: com.appsflyer.m.b;
				public static SEGMENT: com.appsflyer.m.b;
				public static DEFAULT: com.appsflyer.m.b;
				public static values(): native.Array<com.appsflyer.m.b>;
			}
		}
	}
}

declare module com {
	export module appsflyer {
		export class n {
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Void.d.ts" />
declare module com {
	export module appsflyer {
		export class o {
			public doInBackground(param0: native.Array<javalangVoid>): string;
			public onPreExecute(): void;
			public onPostExecute(param0: string): void;
		}
	}
}

declare module com {
	export module appsflyer {
		export module share {
			export class Constants {
				/**
				 * Constructs a new instance of the com.appsflyer.share.Constants interface with the provided implementation.
				 */
				public constructor(implementation: {
				});
				public static URL_ADVERTISING_ID: string;
				public static LOG_INVITE_ERROR_NO_CHANNEL: string;
				public static URL_REFERRER_IMAGE_URL: string;
				public static LOG_CROSS_PROMOTION_CLICK_URL: string;
				public static LOG_CROSS_PROMOTION_IMPRESSION_URL: string;
				public static URL_CAMPAIGN: string;
				public static LOG_INVITE_TRACKING_APP_INVITE_VIA_CHANNEL: string;
				public static AF_BASE_URL_FORMAT: string;
				public static USER_INVITE_LINK_TYPE: string;
				public static URL_MEDIA_SOURCE: string;
				public static LOG_INVITE_GENERATED_URL: string;
				public static HTTP_REDIRECT_URL_HEADER_FIELD: string;
				public static APPSFLYER_DEFAULT_APP_DOMAIN: string;
				public static URL_SITE_ID: string;
				public static URL_PATH_DELIMITER: string;
				public static LOG_INVITE_DETECTED_APP_INVITE_VIA_CHANNEL: string;
				public static URL_BASE_DEEPLINK: string;
				public static LOG_CROSS_PROMOTION_REDIRECTION_STATUS: string;
				public static USER_SHARE_LINK_TYPE: string;
				public static URL_CHANNEL: string;
				public static URL_REFERRER_NAME: string;
				public static URL_REFERRER_CUSTOMER_ID: string;
				public static ONELINK_DEFAULT_DOMAIN: string;
				public static LOG_CROSS_PROMOTION_APP_INSTALLED_FROM_CROSS_PROMOTION: string;
				public static BASE_URL_APP_APPSFLYER_COM: string;
				public static LOG_CROSS_PROMOTION_FAILED_RESPONSE_CODE: string;
				public static LOG_CROSS_PROMOTION_IMPRESSION_SUCCESS: string;
				public static URL_REFERRER_UID: string;
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Void.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module appsflyer {
		export module share {
			export class CrossPromotionHelper {
				public static logCrossPromotionAndOpenStore(param0: androidcontentContext, param1: string, param2: string): void;
				public static logCrossPromotionImpression(param0: androidcontentContext, param1: string, param2: string): void;
				public static logCrossPromotionAndOpenStore(param0: androidcontentContext, param1: string, param2: string, param3: javautilMap): void;
				public constructor();
			}
			export module CrossPromotionHelper {
				export class a {
					public doInBackground(param0: native.Array<string>): javalangVoid;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module appsflyer {
		export module share {
			export class LinkGenerator {
				public getChannel(): string;
				public setDeeplinkPath(param0: string): com.appsflyer.share.LinkGenerator;
				public setReferrerCustomerId(param0: string): com.appsflyer.share.LinkGenerator;
				public setReferrerUID(param0: string): com.appsflyer.share.LinkGenerator;
				public generateLink(): string;
				public addParameters(param0: javautilMap): com.appsflyer.share.LinkGenerator;
				public generateLink(param0: androidcontentContext, param1: com.appsflyer.CreateOneLinkHttpTask.ResponseListener): void;
				public getCampaign(): string;
				public setReferrerImageURL(param0: string): com.appsflyer.share.LinkGenerator;
				public constructor(param0: string);
				public getMediaSource(): string;
				public setBaseDeeplink(param0: string): com.appsflyer.share.LinkGenerator;
				public getParameters(): javautilMap;
				public setCampaign(param0: string): com.appsflyer.share.LinkGenerator;
				public setReferrerName(param0: string): com.appsflyer.share.LinkGenerator;
				public addParameter(param0: string, param1: string): com.appsflyer.share.LinkGenerator;
				public setChannel(param0: string): com.appsflyer.share.LinkGenerator;
				public setBaseURL(param0: string, param1: string, param2: string): com.appsflyer.share.LinkGenerator;
				public setBrandDomain(param0: string): com.appsflyer.share.LinkGenerator;
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.appsflyer.share.LinkGenerator.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module appsflyer {
		export module share {
			export class ShareInviteHelper {
				public static generateUserInviteLink(param0: androidcontentContext, param1: string, param2: javautilMap, param3: com.appsflyer.CreateOneLinkHttpTask.ResponseListener): void;
				public static generateInviteUrl(param0: androidcontentContext): com.appsflyer.share.LinkGenerator;
				public static logInvite(param0: androidcontentContext, param1: string, param2: javautilMap): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module appsflyer {
		export module share {
			export class a {
			}
		}
	}
}

