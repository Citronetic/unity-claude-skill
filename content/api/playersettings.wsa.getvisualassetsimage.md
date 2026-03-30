This version of Unity is unsupported.



# [PlayerSettings.WSA](PlayerSettings.WSA.html).GetVisualAssetsImage




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

public static string GetVisualAssetsImage([PlayerSettings.WSAImageType](PlayerSettings.WSAImageType.html) type,
[PlayerSettings.WSAImageScale](PlayerSettings.WSAImageScale.html) scale);






### Parameters



| Parameter | Description |
| --- | --- |
| type | UWP Logo type to retrieve the Asset name for. |
| scale | UWP Scale type to retrieve the Asset name for. |





### Returns



**string**
        Returns the asset path for the image currently set as the specified Logo/ If you have not set an image, returns an empty string.





### Description



Retrieves the Asset path for the image you set as the Universal Windows Platform package logo.





In the Editor, Unity displays this under **Tile section** in [UWP Player Settings](../Manual/class-PlayerSettingsWSA.html).
**Important:** Unity writes these settings to the package manifest when it builds Universal Windows Platform for the first time. Building into an existing Universal Windows Platform build folder does not update the package manifest and does not apply any changes.


            
