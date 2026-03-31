This version of Unity is unsupported.



# [VideoClipImporter](VideoClipImporter.html).SetTargetSettings




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















## Declaration

public void SetTargetSettings(string platform,
[VideoImporterTargetSettings](VideoImporterTargetSettings.html) settings);






### Parameters



| Parameter | Description |
| --- | --- |
| platform | Platform name. |
| settings | The new platform-specific import settings. Throws an exception if the platform is unknown. |





### Description



Sets the platform-specific import settings for the specified platform.





The options for the platform string are "Default", "Standalone", "Android", "iOS", "Lumin", "PS4", "Switch", "tvOS", "WebGL", "WSA", or "XboxOne".


            
