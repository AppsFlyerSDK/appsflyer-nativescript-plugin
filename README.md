
<img src="https://www.appsflyer.com/wp-content/uploads/2016/11/logo-1.svg"  width="200">

# appsflyer-nativescript-plugin
 Nativescript Library for AppsFlyer SDK

[![npm version](https://badge.fury.io/js/nativescript-plugin-appsflyer.svg)](https://badge.fury.io/js/nativescript-plugin-appsflyer)

## Table of content

- [Supported Platforms](#this-plugin-is-built-for)
- [Installation](#installation)
 - [API Methods](#api-methods) 
 - [initSdk](#initSdk) 
 - [trackEvent](#trackEvent) 
- [sharingFilter](#setSharingFilter) 
 - [setSharingFilter](#setSharingFilter) 
 - [setSharingFilterForAllPartners](#setSharingFilterForAllPartners) 
- [Demo](#demo) 


## <a id="this-plugin-is-built-for"> This plugin is built for

- iOS AppsFlyerSDK *latest*
- Android AppsFlyerSDK **v5.4.1**

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

#####<a id="trackEvent"> **`appsFlyer.trackEvent(options): Promise<any>`**


- These in-app events help you track how loyal users discover your app, and attribute them to specific 
campaigns/media-sources. Please take the time define the event/s you want to measure to allow you 
to track ROI (Return on Investment) and LTV (Lifetime Value).
- The `trackEvent` method allows you to send in-app events to AppsFlyer analytics. This method allows you to add events dynamically by adding them directly to the application code.

| parameter   | type                        | description  |
| ----------- |-----------------------------|--------------|
| `options`   | `Object`                    |   track event configuration           |

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
        appsFlyer.trackEvent(options).then(function(result) {
            viewModel.set("trackEventResponse", result);
        }, function(err) {
            viewModel.set("trackEventResponse", JSON.stringify(err));
        });
    
    
```

---
<a id="sharingFilter"> `Sharing filter (GDPR/CCPA COMPLIANT - Read more information in the <a href="https://support.appsflyer.com/hc/en-us/articles/360001422989-Implementing-app-user-opt-in-opt-out-in-the-AppsFlyer-SDK">following article</a>)`
 
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
| `partners`  | `Array<String>`             |   Exclude (one or more) networks/integrated partners from getting data          |


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
