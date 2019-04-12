//
//  Bulb.swift
//  AwesomoeApp
//
//  Created by Amol Chaudhari on 12/04/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(Bulb)
class Bulb: NSObject {
  
  @objc
  static var isOn = false
  
  @objc
  func turnOn() {
    Bulb.isOn = true
    print("Bulb is now ON")
  }
}
