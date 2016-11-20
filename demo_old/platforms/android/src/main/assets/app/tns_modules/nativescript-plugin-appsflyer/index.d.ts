//declare module "nativescript-plugin-appsflyer" {




export interface InitSDKOptions {
    devKey: string,
    appId?: string,
    isDebug?: boolean
}

export function initSdk(options: InitSDKOptions): Promise<boolean>;

export function available(): Promise<boolean>;

//}
