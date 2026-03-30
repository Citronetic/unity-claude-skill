This version of Unity is unsupported.



# [PlayerSettings.WSA](PlayerSettings.WSA.html).GetTargetDeviceFamily




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

public static bool GetTargetDeviceFamily([PlayerSettings.WSATargetFamily](PlayerSettings.WSATargetFamily.html) family);






### Parameters



| Parameter | Description |
| --- | --- |
| family | Device Family type to check. |





### Returns



**bool**
        Returns true if the project targets the device family. Otherwise, returns false.





### Description



Checks if your project targets the specified [device family](PlayerSettings.WSATargetFamily.html).





In the Editor, Unity displays this as a list of checkboxes under **Supported Device Families** in [UWP Player Settings](../Manual/class-PlayerSettingsWSA.html). If you do not indicate that your Universal Windows Platform application supports any device family type, it defaults to the Windows.Universal family.
**Important:**  Unity writes these settings to the package manifest when it builds Universal Windows Platform for the first time. Building into an existing Universal Windows Platform build folder does not update the package manifest and does not apply any changes.


            
