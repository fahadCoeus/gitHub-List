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
@interface RNTMapManager : RCTViewManager
@end

@implementation RNTMapManager

RCT_EXPORT_MODULE(UIDatePicker)

RCT_EXPORT_VIEW_PROPERTY(onchange,RCTBubblingEventBlock)

- (UIView *)view
{

  return [[UIDatePicker alloc] init];

}


@end
