This version of Unity is unsupported.



# [PlayerSettings.WSA](PlayerSettings.WSA.html).lastRequiredScene




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







                    public static int lastRequiredScene;






### Description



The scene index number from the [Scenes in Build](../Manual/BuildSettings.html) list for the last scene that must be present in a **Streaming Install** build.





In the Editor, Unity displays this under **Packaging** in [UWP Player Settings](../Manual/class-PlayerSettingsWSA.html).
For an application to start, Unity requires all scenes in the Build Settings, up to this index, to be present on the device. If your application requires every scene in the list before the application can start, set this value to the index of the last scene in the list (scene_count - 1).
A scene may only use assets from another scene with a *smaller* index value. This means that the ordering of scenes within a streaming install is important because it determines the order in which Unity installs. Your application can't share assets in scenes lower down the list (larger index value) with scenes higher in the list (smaller index value).

**Note**: By default, Unity disables Streaming Install and ignores this value. Set [supportStreamingInstall](PlayerSettings.WSA-supportStreamingInstall.html) to `true` or check the **Streaming Install** option in PlayerSettings to enable this feature.


            
