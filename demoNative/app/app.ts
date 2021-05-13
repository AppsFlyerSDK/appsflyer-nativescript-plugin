/*
In NativeScript, the app.js file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

const Application = require("@nativescript/core").Application;
import { CustomAppDelegate } from "./custom-app-delegate";

if (Application.ios) {
    Application.ios.delegate = CustomAppDelegate;
}

Application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
