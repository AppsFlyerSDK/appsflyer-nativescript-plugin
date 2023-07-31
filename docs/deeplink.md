# Deeplink

<img  src="https://massets.appsflyer.com/wp-content/uploads/2018/06/20092440/static-ziv_1TP.png"  width="400"  >

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

