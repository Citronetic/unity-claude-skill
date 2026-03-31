This version of Unity is unsupported.



# [PermissionCallbacks](Android.PermissionCallbacks.html).PermissionDeniedAndDontAskAgain




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



















### Parameters



| Parameter | Description |
| --- | --- |
| value | Permission name. |





### Description



Triggered when the user chooses **Deny And Don't Ask Again** for a permission request or denies the permission twice on newer Android versions, or the operating system determines that it should not be requested again.





If you do not subscribe to this event, Unity triggers [PermissionCallbacks.PermissionDenied](Android.PermissionCallbacks.PermissionDenied.html) as a fallback. On Android versions 12 and newer, it's recommended to use [PermissionCallbacks.PermissionDenied](Android.PermissionCallbacks.PermissionDenied.html) only as `PermissionCallbacks.PermissionDeniedAndDontAskAgain` might show different behavior.

Additional resources: [Permission.ShouldShowRequestPermissionRationale](Android.Permission.ShouldShowRequestPermissionRationale.html)


            
