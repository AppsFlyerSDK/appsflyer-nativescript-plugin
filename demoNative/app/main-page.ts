import { EventData, Page, fromObject, TextField, BindingOptions, StackLayout } from '@nativescript/core'
import { HelloWorldModel } from './main-view-model'

var viewModel =  fromObject({
  gcdResponse: "GCD isn't called yet", 
  logEventResponse: "not called yet", 
  getAppsFlyerUIDResponse: "not called yet", 
  initSdkResponse: "not initialized yet", 
  logLocationResponse: [], 
})
export function navigatingTo(args: EventData) {
  const page = <Page>args.object

  const newViewModel = new HelloWorldModel(viewModel)
  // const logEvent = new TextField();
  viewModel.addEventListener("logEvent", newViewModel.logEvent);

  page.bindingContext = viewModel
  newViewModel.initSdk();
}
