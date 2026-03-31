This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# LicensingUtility





class in
          UnityEditor.Experimental.Licensing


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



Use the Licensing Utility class to request user permissions. User permissions are referred to as entitlements, which are simple strings, ie. "com.unity.editor.ui".





### Static Methods



| Method | Description |
| --- | --- |
| HasEntitlement | Checks if the current user is entitled to a specific entitlement. |
| HasEntitlements | Checks if the current user is entitled to a list of entitlements. |
| HasEntitlementsExtended | Retrieves extended information about the license file and its contents, including custom data attached to individual entitlements. |
| InvokeLicenseUpdateCallbacks | Notifies all compononents that have been registered to act upon licensing changes. |
| UpdateLicense | Triggers an update to all available license types found on this machine. |


            
