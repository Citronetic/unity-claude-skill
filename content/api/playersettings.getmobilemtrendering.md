This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).GetMobileMTRendering




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

public static bool GetMobileMTRendering([Build.NamedBuildTarget](Build.NamedBuildTarget.html) buildTarget);






### Parameters



| Parameter | Description |
| --- | --- |
| buildTarget | The NamedBuildTarget. (Only iOS, tvOS and Android). |





### Returns



**bool**
        Returns true if multithreaded rendering option for build target is enabled.





### Description



Check if multithreaded rendering option for mobile platform is enabled.




---






                        **Obsolete**
                        Use GetMobileMTRendering(NamedBuildTarget buildTarget) instead.




## Declaration

public static bool GetMobileMTRendering([BuildTargetGroup](BuildTargetGroup.html) targetGroup);






### Parameters



| Parameter | Description |
| --- | --- |
| targetGroup | Mobile platform (Only iOS, tvOS and Android). |





### Description



BuildTargetGroup is marked for deprecation in the future. Use [NamedBuildTarget](Build.NamedBuildTarget.html) instead.


            
