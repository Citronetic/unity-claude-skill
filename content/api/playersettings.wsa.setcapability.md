This version of Unity is unsupported.



# [PlayerSettings.WSA](PlayerSettings.WSA.html).SetCapability




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




                [Switch to Manual](../Manual/class-PlayerSettings.html)










## Declaration

public static void SetCapability([PlayerSettings.WSACapability](PlayerSettings.WSACapability.html) capability,
bool value);






### Parameters



| Parameter | Description |
| --- | --- |
| capability | UWP Capability type to change. |
| value | True to include the Capability in the UWP build or false to remove it. |





### Description



Includes or removes the specified [UWP Capability](PlayerSettings.WSACapability.html) in the Universal Windows Platform build.





In the Editor, Unity displays this as a list of checkboxes under **Capabilities** in [UWP Player Settings](../Manual/class-PlayerSettingsWSA.html).
**Important:** Unity writes these settings to the package manifest when it builds Universal Windows Platform for the first time. Building into an existing Universal Windows Platform build folder does not update the package manifest and does not apply any changes.


            
