# APIs

<img  src="https://massets.appsflyer.com/wp-content/uploads/2018/06/20092440/static-ziv_1TP.png"  width="400"  >

## Methods
- [initSdk](#initSdk)
- [logEvent](#logEvent)
- [setSharingFilter](#setSharingFilter) 
- [setSharingFilterForAllPartners](#setSharingFilterForAllPartners) 
- [setAppInviteOneLink](#setAppInviteOneLink)
- [generateInviteUrl](#generateInviteUrl)
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
        onFailure: function(err){console.log(err);}
    );
```


---

##### <a id="stop"> **`appsFlyer.stop(isStopped): void`**

`stop(isStopped)`

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
