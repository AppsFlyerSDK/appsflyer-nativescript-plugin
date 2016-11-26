
<img src="https://www.appsflyer.com/wp-content/themes/ohav-child/images/logo.svg"  width="200">

# nativescript-plugin-appsflyer
This React Native Library uses the AppsFlyer 4.6.0 library for both iOS and Android

[![npm version](https://badge.fury.io/js/nativescript-plugin-appsflyer.svg)](https://badge.fury.io/js/nativescript-plugin-appsflyer)

## Table of content

- [Supported Platforms](#this-plugin-is-built-for)
- [Installation](#installation)
 - [iOS](#installation_ios) 
 - [Android](#installation_android)
- [API Methods](#api-methods) 
 - [initSdk](#initSdk) 
 - [trackEvent](#trackEvent) 
- [Demo](#demo) 


## <a id="this-plugin-is-built-for"> This plugin is built for

- iOS AppsFlyerSDK **v4.5.9**
- Android AppsFlyerSDK **v4.6.0**

## <a id="installation"> Installation

`$ npm install nativescript-plugin-appsflyer --save`

### <a id="installation_ios"> iOS


1. Add the `appsFlyerFramework` to `podfile` and run `pod install`.


Example:
     
```
use_frameworks!
target 'demo' do
  pod 'AppsFlyerFramework'
end
```

  Don't use CocoaPods? please see their [DOCS](https://guides.cocoapods.org/using/getting-started.html) . 


2. Create *bridge* between your application and `appsFlyerFramework`:
  In XCode ➜ project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
  Go to `node_modules` ➜ `nativescript-plugin-appsflyer` and add `RNAppsFlyer.xcodeproj`
   Build your project, It will generate `libRNAppsFlyer.a` file: 

    ![enter image description here](https://s26.postimg.org/ucnxv1jeh/react_native_api.png)
  
     

3. Run your project (`Cmd+R`) or through CLI run: `react-native run-ios`

### <a id="installation_android"> Android

##### **android/app/build.gradle**
1. Add the project to your dependencies
```gradle
dependencies {
    ...
    compile project(':nativescript-plugin-appsflyer')
}
```

##### **android/settings.gradle**

1. Add the project

```gradle
include ':nativescript-plugin-appsflyer'
project(':nativescript-plugin-appsflyer').projectDir = new File(rootProject.projectDir, '../node_modules/nativescript-plugin-appsflyer/android')
```

Build project so you should get following dependency (see an Image): 

![enter image description here](https://s26.postimg.org/4ie559jeh/Screen_Shot_2016_11_07_at_5_02_00_PM.png)

##### **MainApplication.java**
Add:
 

 1. `import com.appsflyer.reactnative.RNAppsFlyerPackage;`
 
 2.  In the `getPackages()` method register the module:
  `new RNAppsFlyerPackage(MainApplication.this)`

So `getPackages()` should look like:

```java
 @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new RNAppsFlyerPackage(MainApplication.this),
          //.....
      );
    }
```



## <a id="api-methods">  API Methods

---

Call module by adding: 

`import appsFlyer from 'nativescript-plugin-appsflyer';`

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

*Example:*

```javascript
 let options = {
       devKey:  'WdpTVAcYwmxsaQ4WeTspmh',
       appId: "975313579",
       isDebug: true
     };

    appsFlyer.initSdk(options, (error, result) => {
      if (error) {
        console.error(error);
      } else {
       //..
      }
    })
```

---

#####<a id="trackEvent"> **`appsFlyer.trackEvent(eventName, eventValues, callback): void`**


- These in-app events help you track how loyal users discover your app, and attribute them to specific 
campaigns/media-sources. Please take the time define the event/s you want to measure to allow you 
to track ROI (Return on Investment) and LTV (Lifetime Value).
- The `trackEvent` method allows you to send in-app events to AppsFlyer analytics. This method allows you to add events dynamically by adding them directly to the application code.


| parameter   | type                        | description |
| ----------- |-----------------------------|--------------|
| `eventName` | `String`                    | custom event name, is presented in your dashboard.  See the Event list [HERE](https://github.com/AppsFlyerSDK/nativescript-plugin-appsflyer/blob/master/ios/AppsFlyerTracker.h)  |
| `eventValue` | `Object`                    | event details |

*Example:*

```javascript

 const eventName = "af_add_to_cart";
 const eventValues = {
      "af_content_id": "id123",
      "af_currency":"USD",
      "af_revenue": "2"
  };

 appsFlyer.trackEvent(eventName, eventValues, (error, result) => {
     if (error) {
         console.error(error);
     } else {
         //...
     }
 })
    
```

---


##Demo

This plugin has a `demo` project bundled with it. To give it a try , clone this repo and from root a.e. `nativescript-plugin-appsflyer` execute the following:

```sh
npm run setup
```

 - Run `npm run demo.ios` or `npm run demo.android` will run for the appropriate platform.
 - Run `npm run ios-pod` to run `Podfile` under `demo` project
 

![demo printscreen](demo/demo_example.png?raw=true)
