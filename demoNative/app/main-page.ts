import { EventData, Page, fromObject, TextField, BindingOptions } from '@nativescript/core'
import { HelloWorldModel } from './main-view-model'

export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  const newViewModel = new HelloWorldModel(page)
  const source = fromObject({
    gcdResponse: "Text set via twoWay binding",
    logEventResponse: "Text set via twoWay binding"
});
const textField: TextField = new TextField();
    textField.bind(<BindingOptions>{
        sourceProperty: "gcdResponse",
        targetProperty: "text",
        twoWay: false
    }, source);
  page.bindingContext = newViewModel
  newViewModel.initSdk();
}
