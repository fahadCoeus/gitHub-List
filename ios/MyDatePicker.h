

#import <UIKit/UIKit.h>
//#import "UIView+React.h"
#import <React/RCTViewManager.h>
@interface MyDatePicker : UIDatePicker

@property (nonatomic, copy) RCTBubblingEventBlock onChange;

@end
