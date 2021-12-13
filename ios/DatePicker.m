//
//  DatePicker.m
//  gitHubList
//
//  Created by Muhammad Fahad on 08/12/2021.
//

//#import <MapKit/MapKit.h>
#import <UIKit/UIKit.h>
  
#import <React/RCTViewManager.h>
//#import "RNTDatePicker.h"
#import <React/RCTConvert.h>
#import "MyDatePicker.h"
@interface RNTMapManager : RCTViewManager
@end

@implementation RNTMapManager

RCT_EXPORT_MODULE(UIDatePicker)



- (UIView *)view
{
//  UIDatePicker *dp = [[UIDatePicker alloc] init];
//  datePickerValueChanged( dp.allTargets;
  return [[MyDatePicker alloc] init];

//  datePickerValueChanged(dp.allTargets);
}
RCT_EXPORT_VIEW_PROPERTY(date, NSDate)

RCT_EXPORT_VIEW_PROPERTY(onChange,RCTBubblingEventBlock)


@end
