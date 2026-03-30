This version of Unity is unsupported.



# [PlayerSettings.WSA](PlayerSettings.WSA.html).supportStreamingInstall




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







                    public static bool supportStreamingInstall;






### Description



Indicates whether you can launch the Universal Windows Platform application package before installation is complete.





In the Editor, Unity displays this under **Streaming Install** in [UWP Player Settings](../Manual/class-PlayerSettingsWSA.html).
If you enable Streaming Install, you must also set a [lastRequiredScene](PlayerSettings.WSA-lastRequiredScene.html) value to indicate which scenes the application requires to launch and which scenes are streamable.

Unity generates an AppxContentGroupMap.xml file which specifies the assets that the application requires to launch and which the application can stream in the background while the application is running.
The application requires the assets from the scenes from the top of [the Build list](../Manual/BuildSettings.html) through to the lastRequiredScene and does not launch until it installs these assets. The application considers assets from the remaining scenes as streamable which allows the application to launch before installing these assets..

For information on Streaming install, see [Microsoft's documentation.](https://docs.microsoft.com/en-us/windows/msix/package/streaming-install)


            
