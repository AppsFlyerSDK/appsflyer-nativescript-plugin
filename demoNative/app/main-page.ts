import { EventData, Page, fromObject } from '@nativescript/core'
import { HelloWorldModel } from './main-view-model'

export var viewModel =  fromObject({
  gcdResponse: "GCD isn't called yet", 
  logEventResponse: "not called yet", 
  getAppsFlyerUIDResponse: "not called yet", 
  initSdkResponse: "not initialized yet", 
  logLocationResponse: [], 
})
export function navigatingTo(args: EventData) {
  const page = <Page>args.object

  const newViewModel = new HelloWorldModel(viewModel)

  viewModel.set("logEvent", function(){ return newViewModel.logEvent(viewModel)});

  page.bindingContext = viewModel
  newViewModel.initSdk();
}
