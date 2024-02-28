# APIs

<img  src="https://massets.appsflyer.com/wp-content/uploads/2018/06/20092440/static-ziv_1TP.png"  width="400"  >

## Methods
- [initSdk](#initSdk)
- [startSdk](#startSdk)
- [logEvent](#logEvent)
- [setSharingFilter](#setSharingFilter) 
- [setSharingFilterForAllPartners](#setSharingFilterForAllPartners)
- [setCustomerUserId](#setCustomerUserId)
- [setAppInviteOneLink](#setAppInviteOneLink)
- [generateInviteUrl](#generateInviteUrl)
- [enableTCFDataCollection](#enableTCFDataCollection)  <!-- New addition -->
- [setConsentData](#setConsentData)
- [stop](#stop)


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
| `manualStart`  |`boolean`| `false` | Prevents from the SDK from sending the launch request after using appsFlyer.initSdk(...). When using this property, the apps needs to manually trigger the appsFlyer.startSdk() API to report the app launch.|
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

##### <a id="startSdk">  **`appsFlyer.startSdk(): void`**
`startSDK()` In version 6.13.0 of the appslfyer-nativescript-plugin SDK we added the option of splitting between the initialization stage and start stage. All you need to do is add the property manualStart: true to the init object, and later call appsFlyer.startSdk() whenever you decide. If this property is set to false or doesn’t exist, the sdk will start after calling appsFlyer.initSdk(...).


##### <a id="logEvent"> **`appsFlyer.logEvent(options): Promise<any>`**


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

* Example: (native javascript)*

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

#### `Sharing filter`
(GDPR/CCPA COMPLIANT - Read more information in the [following article](https://support.appsflyer.com/hc/en-us/articles/360001422989-Implementing-app-user-opt-in-opt-out-in-the-AppsFlyer-SDK)

In some cases, advertisers may want to stop sharing user-level data with ad networks/partners for specific users. 
Reasons for this include: 
 Privacy policies such as CCPA or GDPR
 User opt-out mechanisms
 Competition with some partners (ad networks, 3rd parties)
 AppsFlyer provides two API methods to stop sharing data with some or all partners:

##### <a id="setSharingFilter"> **`appsFlyer.setSharingFilter(partners): Promise<any>`**
- `setSharingFilter`: Used by advertisers to set some (one or more) networks/integrated partners to exclude from getting data.

| parameter   | type                        | description  |
| ----------- |-----------------------------|--------------|
| `partners`  | `Array`             |   Exclude (one or more) networks/integrated partners from getting data          |


* Example: (native javascript)*

```javascript
        var partners = [""];

        appsFlyer.setSharingFilter(partners).then(function(result) {
            viewModel.set("setSharingFilterResponse", result.status);
        }, function(err) {
            viewModel.set("setSharingFilter Response", JSON.stringify(err));
        });

```

##### <a id="setSharingFilterForAllPartners"> **`appsFlyer.setSharingFilterForAllPartners(): Promise<any>`**
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

##### <a id="setCustomerUserId"> **`appsFlyer.setCustomerUserId(id): void`**

*Example:*

```javascript
appsFlyer.setCustomerUserId("123);   
```

---

#### `User invite`

A complete list of supported parameters is available [here](https://support.appsflyer.com/hc/en-us/articles/115004480866-User-Invite-Tracking). Custom parameters can be passed using a userParams{} nested object, as in the example above.

##### <a id="setAppInviteOneLink"> **`appsFlyer.setAppInviteOneLink(onelinkid): void`**

Set the OneLink ID that should be used for User-Invite-API.<br/>
The link that is generated for the user invite will use this OneLink ID as the base link ID.

| parameter       | type     | description               |
| ----------      |----------|------------------         |
| oneLinkID       | string   | oneLinkID                 |


*Example:*

```javascript
appsFlyer.setAppInviteOneLink('abcd'); 
```


##### <a id="generateInviteUrl"> **`appsFlyer.generateInviteUrl(parameters): void`**


| parameter       | type     | description                      |
| ----------      |----------|------------------                |
| parameters      | AppsFlyerLinkGeneratorArgs | parameters for Invite link       |


*AppsFlyerLinkGeneratorArgs:*

```javascript
interface AppsFlyerLinkGeneratorArgs {
    params: Object;
    onSuccess?: (link: string) => void;
    onError?: (err: string) => void;
}
```


*Example:*
```javascript
appsFlyer.generateInviteUrl(
    {
        params: {
            channel: 'gmail',
            campaign: 'myCampaign',
            customerID: '1234',
            userParams: {
                myParam: 'newUser',
                anotherParam: 'fromWeb',
                amount: 1,
            },
        },
        onSuccess: function(link){console.log(link);},
        onError: function(err){console.log(err);}
    }
);
```


---

**<a id="enableTCFDataCollection"> `enableTCFDataCollection(bool shouldCollect)`**

The `enableTCFDataCollection` method is employed to control the automatic collection of the Transparency and Consent Framework (TCF) data. By setting this flag to `true`, the system is instructed to automatically collect TCF data. Conversely, setting it to `false` prevents such data collection.

_Example:_
```javascript
appsFlyer.enableTCFDataCollection(true);
```
---

**<a id="setConsentData"> `setConsentData(Map<String, Object> consentData)`**

The `AppsflyerConsentArgs` interface helps manage user consent settings. By using the setConsentData we able to manually collect the TCF data.

```javascript
//For GDPR:
appsFlyer.setConsentData({
      isUserSubjectToGDPR: true,
      hasConsentForAdsPersonalization: true, //optional setted to false if not defined
      hasConsentForDataUsage: true, //optional setted to false if not defined
    });

//For Non-GDPR:
appsFlyer.setConsentData({
      isUserSubjectToGDPR: false,
    });
```

The `appsFlyer` handles consent data with `setConsentData` method, where you can pass the desired `AppsflyerConsent` instance.

---

To reflect TCF data in the conversion (first launch) payload, it's crucial to configure `enableTCFDataCollection` **or** `setConsentData` between the SDK initialization and start phase. Follow the example provided:

```javascript
// Set AppsFlyerOption - make sure to set manualStart to true
let options = {
      devKey: "WdpTVAcYwmxsaQ4WeTspmh",
      appId: "975313579",
      isDebug: true,
      manualStart: true,
      timeToWaitForATTUserAuthorization: 10,
      onConversionDataSuccess: function (_res) {
        console.log("Get conversion data success: " + JSON.stringify(_res));
        _this.set("gcdResponse", JSON.stringify(_res));
      },
      onConversionDataFail: function (_res) {
        console.log("Get conversion data failure: " + JSON.stringify(_res));
        _this.set("gcdResponse", JSON.stringify(_res));
      },
      onAppOpenAttribution: function (_res) {
        console.log("onAppOpenAttribution: " + JSON.stringify(_res));
        _this.set("gcdResponse", "onAppOpenAttribution: " + JSON.stringify(_res));

      },
      onAppOpenAttributionFailure: function (_res) {
        console.log("onAppOpenAttributionFailure: " + JSON.stringify(_res));
      },
      onDeepLinking: function (_res) {
        if (_res) {
          console.log("onDeepLinking: " + JSON.parse(_res).deepLink);
          _this.set("gcdResponse", "onDeepLinking: " + JSON.parse(_res).deepLink);
        }
      },
    };

appsFlyer.initSdk(options)

// Set configurations to the SDK
// Enable TCF Data Collection
appsFlyer.enableTCFDataCollection(true);
  
// Set Consent Data
// If user is subject to GDPR
  appsFlyer.setConsentData({
      isUserSubjectToGDPR: true,
      hasConsentForAdsPersonalization: true,
      hasConsentForDataUsage: true,
    });

// If user is not subject to GDPR
//  appsFlyer.setConsentData({
//      isUserSubjectToGDPR: false,
//    });

// Here we start a session
appsFlyer.startSDK(); 
```

Following this sequence ensures that the consent configurations take effect before the AppsFlyer SDK starts, providing accurate consent data in the first launch payload.
Note: You need to use either `enableTCFDataCollection` or `setConsentData` if you use both of them our backend will prioritize the provided consent data from `setConsentData`.

---

##### <a id="stop"> **`appsFlyer.stop(isStopped): void`**

In some extreme cases you might want to shut down all SDK functions due to legal and privacy compliance. This can be achieved with the stopSDK API. Once this API is invoked, our SDK no longer communicates with our servers and stops functioning.

There are several different scenarios for user opt-out. We highly recommend following the exact instructions for the scenario, that is relevant for your app.

In any event, the SDK can be reactivated by calling the same API, by passing false.

| parameter       | type     | description                                          |
| ----------      |----------|------------------                                    |
| isStopped  | boolean  | True if the SDK is stopped (default value is false). |


*Example:*

```javascript
appsFlyer.stop(true);   
```
