//
//  slider.swift
//  gitHubList
//
//  Created by Muhammad Fahad on 09/12/2021.
//

import Foundation
import CHIPageControl
import UIKit
import React


@available(iOS 14.0, *)
@objc(Slider)

class Slider : CHIPageControlAji, RCTBridgeModule {
//  var changeColorCallBack : RCTPromiseResolveBlock!
//  var sendErrorCallBack:RCTPromiseRejectBlock!
  static func moduleName() -> String! {
    return "Slider"
  }
  @objc
  func slide()  -> Void {
    DispatchQueue.main.async {
      let presentedViewController = RCTPresentedViewController();
      let silderVC = CHIPageControlAji(frame: CGRect(x: 0, y:0, width: 100, height: 20))
      presentedViewController?.present(silderVC, animated: true) {}


    }
//      changeColorCallBack = resolve;
//      sendErrorCallBack = reject;
}
//  func colorPickerViewControllerDidFinish(_ viewController: UIColorPickerViewController) {
//    let newColor:String = hexStringFromColor(color: viewController.selectedColor);
//
//    if(newColor != ""){
//
//      changeColorCallBack(newColor)
//    }
//
//    else{
//      sendErrorCallBack("event_failure", "no color returned", nil);
//
//    }
//   }
  
}
