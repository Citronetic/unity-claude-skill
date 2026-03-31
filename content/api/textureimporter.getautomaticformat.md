This version of Unity is unsupported.



# [TextureImporter](TextureImporter.html).GetAutomaticFormat




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




                [Switch to Manual](../Manual/class-TextureImporter.html)










## Declaration

public [TextureImporterFormat](TextureImporterFormat.html) GetAutomaticFormat(string platform);






### Returns



**TextureImporterFormat**
        Format chosen by the system for the provided platform, TextureImporterFormat.Automatic if the platform does not exist.





### Description



Returns the TextureImporterFormat that would be automatically chosen for this platform.





The options for the platform string are "Standalone", "Web", "iPhone", "Android", "WebGL", "Windows Store Apps", "PS4", "PSM", "XboxOne", "Nintendo Switch" and "tvOS".


            
