//
//  MyDatePicker.m
//  gitHubList
//
//  Created by Muhammad Fahad on 09/12/2021.
//

#import <Foundation/Foundation.h>
#import "MyDatePicker.h"

@implementation MyDatePicker

- (instancetype)initWithFrame:(CGRect)frame {
  if ((self = [super initWithFrame:frame])) {
    [self addTarget:self action:@selector(didChange:)
   forControlEvents:UIControlEventValueChanged];
  }
  return self;
}

- (void)didChange:(MyDatePicker*)sender {
  if (sender.onChange) {
    self.timeZone = [NSTimeZone timeZoneForSecondsFromGMT:0];
    sender.onChange(@{ @"changedDate": @(self.date.timeIntervalSince1970 * 1000.0) });
  }
}

@end
