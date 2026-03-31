This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).SetMobileMTRendering




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

public static void SetMobileMTRendering([Build.NamedBuildTarget](Build.NamedBuildTarget.html) buildTarget,
bool enable);




                        **Obsolete**
                        Use SetMobileMTRendering(NamedBuildTarget buildTarget, bool enable) instead.




## Declaration

public static void SetMobileMTRendering([BuildTargetGroup](BuildTargetGroup.html) targetGroup,
bool enable);






### Parameters



| Parameter | Description |
| --- | --- |
| targetGroup | Mobile platform (Only iOS, tvOS and Android). |
| buildTarget | The NamedBuildTarget (Only iOS, tvOS and Android). |





### Description



Enable or disable multithreaded rendering option for mobile platform.





BuildTargetGroup is marked for deprecation in the future. Use [NamedBuildTarget](Build.NamedBuildTarget.html) instead.


            
