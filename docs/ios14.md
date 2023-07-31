
# <a id="ios14"> Set plugin for IOS 14

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

