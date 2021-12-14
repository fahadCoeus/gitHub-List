import Foundation
import UIKit
import React


@available(iOS 14.0, *)
@objc(ColorPicker)

class ColorPicker: NSObject, RCTBridgeModule, UIColorPickerViewControllerDelegate {
  var changeColorCallBack : RCTPromiseResolveBlock!
  var sendErrorCallBack:RCTPromiseRejectBlock!
  static func moduleName() -> String! {
    return "ColorPicker"
  }
  @objc
  func picker(_ resolve:  @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock)  -> Void {
    DispatchQueue.main.async {
      let presentedViewController = RCTPresentedViewController();
      let colorPickerVC = UIColorPickerViewController()
      colorPickerVC.delegate = self
      presentedViewController?.present(colorPickerVC, animated: true) {}
      
    
    }
      changeColorCallBack = resolve;
      sendErrorCallBack = reject;
}
  func colorPickerViewControllerDidFinish(_ viewController: UIColorPickerViewController) {
    let newColor:String = hexStringFromColor(color: viewController.selectedColor);
   
    if(newColor != ""){
      
      changeColorCallBack(newColor)
    }
    
    else{
      sendErrorCallBack("event_failure", "no color returned", nil);
      
    }
   }
  
   func hexStringFromColor(color: UIColor) -> String {
      let components = color.cgColor.components
      let r: CGFloat = components?[0] ?? 0.0
      let g: CGFloat = components?[1] ?? 0.0
      let b: CGFloat = components?[2] ?? 0.0

      let hexString = String.init(format: "#%02lX%02lX%02lX", lroundf(Float(r * 255)), lroundf(Float(g * 255)), lroundf(Float(b * 255)))
      print(hexString)
     
      return hexString
   }
}
