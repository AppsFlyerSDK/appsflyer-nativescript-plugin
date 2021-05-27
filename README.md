
<img src="https://www.appsflyer.com/wp-content/uploads/2016/11/logo-1.svg"  width="200">

# appsflyer-nativescript-plugin
 Nativescript Library for AppsFlyer SDK

[![npm version](https://badge.fury.io/js/nativescript-plugin-appsflyer.svg)](https://badge.fury.io/js/nativescript-plugin-appsflyer)

## Table of content

- [Supported Platforms](#this-plugin-is-built-for)
- [Installation](#installation)
 - [API Methods](#api-methods) 
 - [initSdk](#initSdk) 
 - [logEvent](#logEvent) 
 - [deepLink](#deepLink) 
 - [Set plugin for IOS 14](#ios14)
 - [setSharingFilter](#setSharingFilter) 
 - [setSharingFilterForAllPartners](#setSharingFilterForAllPartners) 
- [Demo](#demo) 


## <a id="this-plugin-is-built-for"> This plugin is built for

- iOS AppsFlyerSDK **v6.2.6**
- Android AppsFlyerSDK **v6.2.3**

## <a id="installation"> Installation

`$ tns plugin add nativescript-plugin-appsflyer`



## <a id="api-methods">  API Methods

---

Call module by adding (native javascript): 

`var appsFlyer = require("nativescript-plugin-appsflyer");`

---


##### <a id="initSdk">  **`appsFlyer.initSdk(options, callback): void`**

initializes the SDK.

| parameter   | type                        | description  |
| ----------- |-----------------------------|--------------|
| `options`   | `Object`                    |   SDK configuration           |


**`options`**

| name       | type    | default | description            |
| -----------|---------|---------|------------------------|
| `devKey`   |`string` |         |   [Appsflyer Dev key](https://support.appsflyer.com/hc/en-us/articles/207032126-AppsFlyer-SDK-Integration-Android)    |
| `appId`    |`string` |        | [Apple Application ID](https://support.appsflyer.com/hc/en-us/articles/207032066-AppsFlyer-SDK-Integration-iOS) (for iOS only) |
| `isDebug`  |`boolean`| `false` | debug mode (optional)|
| `onConversionDataSuccess`  |`function`| | AppsFlyer allows you to access the user attribution data in real-time for every new install, directly from the SDK level. By doing this you can serve users with personalized content or send them to specific activities within the app, which can greatly enhance their engagement with your app. For [Android](https://support.appsflyer.com/hc/en-us/articles/207032126-AppsFlyer-SDK-Integration-Android#7-get-conversion-data); for [iOS](https://support.appsflyer.com/hc/en-us/articles/207032066-AppsFlyer-SDK-Integration-iOS#7-get-conversion-data)  |
| `onConversionDataFailure`  |`function`| | |

*Example:*

```javascript
 var options = {
            devKey:  'WdpTVAcYwmxsaQ4WeTspmh',
            appId: "975313579",
            isDebug: true,
            timeToWaitForATTUserAuthorization: 60,
            onConversionDataSuccess: function(_res){
                console.log(JSON.stringify(_res));
            },
            onConversionDataFailure: function(_res){
                console.warn("failure: " + JSON.stringify(_res));
            },
        };

        appsFlyer.initSdk(options).then(function(result) {
            viewModel.set("initSdkResponse", result.status);
        }, function(err) {
            viewModel.set("initSdkResponse", JSON.stringify(err));
        });
```

---

#####<a id="logEvent"> **`appsFlyer.logEvent(options): Promise<any>`**


- These in-app events help you measure how loyal users discover your app, and attribute them to specific 
campaigns/media-sources. Please take the time define the event/s you want to measure to allow you 
to measure the ROI (Return on Investment) and LTV (Lifetime Value).
- The `logEvent` method allows you to send in-app events to AppsFlyer analytics. This method allows you to add events dynamically by adding them directly to the application code.

| parameter   | type                        | description  |
| ----------- |-----------------------------|--------------|
| `options`   | `Object`                    |   log event configuration           |

**`options`**

| parameter   | type                        | description |
| ----------- |-----------------------------|--------------|
| `eventName` | `string`                    | custom event name, is presented in your dashboard.  See the Event list [HERE](https://github.com/AppsFlyerSDK/AppsFlyerFramework/blob/master/AppsFlyerLib.framework/Versions/A/Headers/AppsFlyerTracker.h)  |
| `eventValues` | `Object`                    | event details (see example bellow) |

*Example: (native javascript)*

```javascript
 
        var options = {
            eventName: "af_add_to_cart",
            eventValues: {
                "af_content_id": "id123",
                "af_currency": "USD",
                "af_revenue": "2"
            }
        };
        appsFlyer.logEvent(options).then(function(result) {
            viewModel.set("logEventResponse", result);
        }, function(err) {
            viewModel.set("logEventResponse", JSON.stringify(err));
        });
    
    
```
---

---

## <a id="deeplinking"> Deep Linking
<img src="https://massets.appsflyer.com/wp-content/uploads/2018/03/21101417/app-installed-Recovered.png" width="350">


#### The 3 Deep Linking Types:
Since users may or may not have the mobile app installed, there are 2 types of deep linking:

1. Deferred Deep Linking - Serving personalized content to new or former users, directly after the installation. 
2. Direct Deep Linking - Directly serving personalized content to existing users, which already have the mobile app installed.
3. Unified deep linking - Unified deep linking sends new and existing users to a specific in-app activity as soon as the app is opened.

For more info please check out the [OneLink™ Deep Linking Guide](https://support.appsflyer.com/hc/en-us/articles/208874366-OneLink-Deep-Linking-Guide#Intro).

###  <a id="deferred-deep-linking"> 1. Deferred Deep Linking (Get Conversion Data)

Handle the Deferred deeplink in the following callback:
```
var options = {

onConversionDataSuccess: function(_res){
        console.log("Get conversion data success: " + JSON.stringify(_res));
    },
}
```

Check out the deferred deeplinkg guide from the AppFlyer knowledge base [here](https://support.appsflyer.com/hc/en-us/articles/207032096-Accessing-AppsFlyer-Attribution-Conversion-Data-from-the-SDK-Deferred-Deeplinking-#Introduction)

###  <a id="handle-deeplinking"> 2. Direct Deeplinking

Handle the Direct deeplink in the 'onAppOpenAttribution' callback:

```
var options = {
    devKey: 'devKey',
    appId: "appId",
    isDebug: true,
    onAppOpenAttribution: function(_res){
        console.log("onAppOpenAttribution: " + JSON.stringify(_res));
    },
    onAppOpenAttributionFailure: function(_res){
        console.log("onAppOpenAttributionFailure: " + JSON.stringify(_res));
    },
};
```

When a deeplink is clicked on the device the AppsFlyer SDK will return the link in the [onAppOpenAttribution](https://support.appsflyer.com/hc/en-us/articles/208874366-OneLink-Deep-Linking-Guide#deep-linking-data-the-onappopenattribution-method-) method.

###  <a id="Unified-deep-linking"> 3. Unified deep linking

Handle the Unified deeplink in the 'onDeepLinking' callback (if `onDeepLinking` callback is define, `onAppOpenAttribution` won't be called):

```
var options = {
    devKey: 'devKey',
    appId: "appId",
    isDebug: true,
    onDeepLinking: function(_res){
        console.log("onDeepLinking: " + _res);
    },
};

For more information about this api, please check [OneLink Guide Here](https://dev.appsflyer.com/docs/android-unified-deep-linking)

###  <a id="android-deeplink"> Android Deeplink Setup
    
    
#### URI Scheme
In your app’s manifest add the following intent-filter to your relevant activity:
```xml 
<intent-filter>
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="your unique scheme" />
</intent-filter>
```

**NOTE:** On Android, AppsFlyer SDK inspects activity intent object during onResume(). Because of that, for each activity that may be configured or launched with any [non-standard launch mode](https://developer.android.com/guide/topics/manifest/activity-element#lmode) the following code was added to `MainActivity.java` in `android/app/src/main/java/com...`

Java:

```java
    @Override
    public void onNewIntent(Intent intent) {
         super.onNewIntent(intent);
         setIntent(intent);
    }
```

Kotlin:

```
    override fun onNewIntent(intent : Intent){
        super.onNewIntent(intent)
        setIntent(intent)
    }
```


#### App Links

In your app’s manifest add the following intent-filter to your relevant activity:

```xml 
<intent-filter android:autoVerify="true">
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="your unique scheme" />
    <data android:scheme="https"
        android:host="yourcompany.onelink.me" 
        android:pathPrefix="your path prefix" />
</intent-filter>
```

For more on App Links check out the guide [here](https://support.appsflyer.com/hc/en-us/articles/115005314223-Deep-Linking-Users-with-Android-App-Links#what-are-android-app-links).


###  <a id="iosdeeplinks"> iOS Deeplink Setup


### URI Scheme

1. Create custom app delegate 

2. Add the following iOS method and AppsFlyer API

```
@NativeClass()
export class CustomAppDelegate extends UIResponder, ATTrackingManager implements UIApplicationDelegate{
    public static ObjCProtocols = [UIApplicationDelegate];

    applicationOpenURLOptions(application: UIApplication, urlOptions: NSURL, options: NSDictionary<string, any>): boolean {
        console.log("applicationOpenURLOptions");
        AppsFlyerLib.shared().handleOpenUrlOptions(urlOptions, options);
        return true;
    }

    // Open URI-scheme for iOS 8 and below
    applicationOpenURLSourceApplicationAnnotation(application: UIApplication, url: NSURL, sourceApplication: string, annotation: any): boolean {
        console.log("applicationOpenURLSourceApplicationAnnotation");
        AppsFlyerLib.shared().handleOpenURLSourceApplicationWithAnnotation(url, sourceApplication, annotation);
        return true;
    }
};

```

For more on URI-schemes check out the guide [here](https://support.appsflyer.com/hc/en-us/articles/208874366-OneLink-deep-linking-guide#setups-uri-scheme-for-ios-8-and-below)


### Universal Links

1. Create custom app delegate 

2. Add the following iOS method and AppsFlyer API

```
@NativeClass()
export class CustomAppDelegate extends UIResponder, ATTrackingManager implements UIApplicationDelegate{
    public static ObjCProtocols = [UIApplicationDelegate];

    // Open Universal Links
    applicationContinueUserActivityRestorationHandler?(application: UIApplication, userActivity: NSUserActivity, restorationHandler: (p1: NSArray<UIUserActivityRestoring>) => void): boolean{
        console.log("applicationContinueUserActivityRestorationHandler");
        AppsFlyerLib.shared().continueUserActivityRestorationHandler(userActivity, restorationHandler);
        return true;
    }
};
```



More on Universal Links:
Essentially, the Universal Links method links between an iOS mobile app and an associate website/domain, such as AppsFlyer’s OneLink domain (xxx.onelink.me). To do so, it is required to:

1. Get your SHA256 fingerprint:

    a. Creating A Keystore

    b. [Generate Fingerprint](https://developers.google.com/android/guides/client-auth)
2. Configure OneLink sub-domain and link to mobile app in the AppsFlyer onelink setup on your dashboard, add the fingerprint there (AppsFlyer takes care of hosting the ‘apple-app-site-association’ file)
3. Configure the mobile app to register approved domains:

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
    <plist version="1.0">
        <dict>
            <key>com.apple.developer.associated-domains</key>
            <array>
                <string>applinks:test.onelink.me</string>
            </array>
        </dict>
    </plist>
    ```

For more on Universal Links check out the guide [here](https://support.appsflyer.com/hc/en-us/articles/208874366-OneLink-Deep-Linking-Guide#setups-universal-links).


---

## <a id="ios14"> Set plugin for IOS 14

1. Add a custom App Delegate and inside add the ATT consent dialog for IDFA collection:
```
@NativeClass()
export class CustomAppDelegate extends UIResponder, ATTrackingManager implements UIApplicationDelegate{
    public static ObjCProtocols = [UIApplicationDelegate];

    applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary): boolean {
        if (parseFloat(UIDevice.currentDevice.systemVersion) >= 14) {
            console.log("iOS 14");
            ATTrackingManager.requestTrackingAuthorizationWithCompletionHandler((status) => {

            });
        }
        console.log("applicationDidFinishLaunchingWithOptions");
    }

};
```

2. In the app.ts add:

```
import { CustomAppDelegate } from "./custom-app-delegate";

if (Application.ios) {
    Application.ios.delegate = CustomAppDelegate;
}
```

3. Add `Privacy - Tracking Usage Description` inside your `.plist` file in Xcode.

4. Optional: Set the `timeToWaitForATTUserAuthorization` property in the `options` to delay the sdk initazliation for a number of `x seconds` until the user accept the consent dialog:

```
var options = {
            devKey:  'WdpTVAcYwmxsaQ4WeTspmh',
            appId: "975313579",
            isDebug: true,
            timeToWaitForATTUserAuthorization: 60
        };
```


For more info visit our Full Support guide for iOS 14:

https://support.appsflyer.com/hc/en-us/articles/207032066#integration-33-configuring-app-tracking-transparency-att-support


---
##`Sharing filter`
(GDPR/CCPA COMPLIANT - Read more information in the [following article](https://support.appsflyer.com/hc/en-us/articles/360001422989-Implementing-app-user-opt-in-opt-out-in-the-AppsFlyer-SDK)

In some cases, advertisers may want to stop sharing user-level data with ad networks/partners for specific users. 
Reasons for this include: 
 Privacy policies such as CCPA or GDPR
 User opt-out mechanisms
 Competition with some partners (ad networks, 3rd parties)
 AppsFlyer provides two API methods to stop sharing data with some or all partners:


#####<a id="setSharingFilter"> **`appsFlyer.setSharingFilter(partners): Promise<any>`**
- `setSharingFilter`: Used by advertisers to set some (one or more) networks/integrated partners to exclude from getting data.

| parameter   | type                        | description  |
| ----------- |-----------------------------|--------------|
| `partners`  | `Array`             |   Exclude (one or more) networks/integrated partners from getting data          |


*Example: (native javascript)*

```javascript
        var partners = [""];

        appsFlyer.setSharingFilter(partners).then(function(result) {
            viewModel.set("setSharingFilterResponse", result.status);
        }, function(err) {
            viewModel.set("setSharingFilter Response", JSON.stringify(err));
        });
```

#####<a id="setSharingFilterForAllPartners"> **`appsFlyer.setSharingFilterForAllPartners(): Promise<any>`**
- `setSharingFilterForAllPartners`: Used by advertisers to exclude all networks/integrated partners from getting data.
 
*Example: (native javascript)*

```javascript
        appsFlyer.setSharingFilterForAllPartners().then(function(result) {
            viewModel.set("setSharingFilterForAllPartners", result.status);
        }, function(err) {
            viewModel.set("setSharingFilterForAllPartners Response", JSON.stringify(err));
        });
 ```   
---
##Demo

This plugin has a `demo` project bundled with it. To give it a try , clone this repo and from root a.e. `nativescript-plugin-appsflyer` execute the following:

```sh
npm run setup
```

 - Run `npm run demo.ios` or `npm run demo.android` will run for the appropriate platform.
