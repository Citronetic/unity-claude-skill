This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).SetNormalMapEncoding




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

public static void SetNormalMapEncoding([Build.NamedBuildTarget](Build.NamedBuildTarget.html) buildTarget,
[NormalMapEncoding](NormalMapEncoding.html) encoding);




                        **Obsolete**
                        Use SetNormalMapEncoding(NamedBuildTarget buildTarget, NormalMapEncoding encoding) instead.




## Declaration

public static void SetNormalMapEncoding([BuildTargetGroup](BuildTargetGroup.html) platform,
[NormalMapEncoding](NormalMapEncoding.html) encoding);






### Parameters



| Parameter | Description |
| --- | --- |
| encoding | The desired normal map encoding. |
| buildTarget | The NamedBuildTarget (only Android, iOS and tvOS). |
| platform | The platform build target group whose normal map encoding you want to set. |





### Description



Sets the normal map encoding for the given build target.





The normal map encoding is configurable on Android, iOS and tvOS. On all other platforms it is ignored.

BuildTargetGroup is marked for deprecation in the future. Use [NamedBuildTarget](Build.NamedBuildTarget.html) instead.


            
