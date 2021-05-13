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
    // Open Universal Links
    applicationContinueUserActivityRestorationHandler?(application: UIApplication, userActivity: NSUserActivity, restorationHandler: (p1: NSArray<UIUserActivityRestoring>) => void): boolean{
        console.log("applicationContinueUserActivityRestorationHandler");
        AppsFlyerLib.shared().continueUserActivityRestorationHandler(userActivity, restorationHandler);
        return true;
    }
};

