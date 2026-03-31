This version of Unity is unsupported.



# Device





class in
          UnityEngine.iOS



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


                  Leave feedback




                  Suggest a change












## Success!



Thank you for helping us improve the quality of Unity Documentation. Although we cannot accept all submissions, we do read each suggested change from our users and will make updates where applicable.

                      Close




## Submission failed



For some reason your suggested change could not be submitted. Please <a>try again</a> in a few minutes. And thank you for taking the time to help us improve the quality of Unity Documentation.

                      Close


                      Your name


                      Your email


                      Suggestion*

                      Submit suggestion


Cancel



















### Description



Interface into iOS specific functionality.





### Static Properties



| Property | Description |
| --- | --- |
| advertisingIdentifier | Advertising ID. |
| advertisingTrackingEnabled | Is advertising tracking enabled. |
| deferSystemGesturesMode | Defer system gestures until the second swipe on specific edges. |
| generation | The generation of the device. (Read Only) |
| hideHomeButton | Specifies whether the home button should be hidden in the iOS build of this application. |
| iosAppOnMac | Indicates whether the process is an iOS app running on a Mac. |
| lowPowerModeEnabled | Indicates whether Low Power Mode is enabled on the device. |
| runsOnSimulator | Returns true if the process is an iOS app running on a Simulator. |
| systemVersion | iOS version. |
| vendorIdentifier | Vendor ID. |
| wantsSoftwareDimming | Indicates whether the screen may be dimmed lower than the hardware is normally capable of by emulating it in software. |





### Static Methods



| Method | Description |
| --- | --- |
| RequestStoreReview | Request App Store rating and review from the user. |
| ResetNoBackupFlag | Set file flag to be included in iCloud/iTunes backup. |
| SetNoBackupFlag | Set file flag to be excluded from iCloud/iTunes backup. This uses NSURLIsExcludedFromBackupKey. Note that you should set this property each time you save a file. |


            
