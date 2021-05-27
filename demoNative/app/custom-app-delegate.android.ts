// import {
//     AndroidActivityCallbacks
//   } from '@nativescript/core'
  
//   @NativeClass()
//   @JavaProxy('org.myApp.MainActivity')

//   const superProto = androidx.appcompat.app.AppCompatActivity.prototype;

//   export class Activity extends androidx.appcompat.app.AppCompatActivity {
//     public isNativeScriptActivity
  
//     private _callbacks: AndroidActivityCallbacks
    
//     public onNewIntent (intent): void {
//         this._callbacks.onNewIntent(this, intent, superProto.setIntent, superProto.onNewIntent);
//     }
 
//   }