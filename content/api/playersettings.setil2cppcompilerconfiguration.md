This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).SetIl2CppCompilerConfiguration




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

public static void SetIl2CppCompilerConfiguration([Build.NamedBuildTarget](Build.NamedBuildTarget.html) buildTarget,
[Il2CppCompilerConfiguration](Il2CppCompilerConfiguration.html) configuration);




                        **Obsolete**
                        Use SetIl2CppCompilerConfiguration(NamedBuildTarget buildTarget, Il2CppCompilerConfiguration configuration) instead.




## Declaration

public static void SetIl2CppCompilerConfiguration([BuildTargetGroup](BuildTargetGroup.html) targetGroup,
[Il2CppCompilerConfiguration](Il2CppCompilerConfiguration.html) configuration);






### Parameters



| Parameter | Description |
| --- | --- |
| buildTarget | The NamedBuildTarget. |
| targetGroup | Build target group. |
| configuration | Compiler configuration. |





### Description



Sets compiler configuration used when compiling generated C++ code for a particular build target.





BuildTargetGroup is marked for deprecation in the future. Use [NamedBuildTarget](Build.NamedBuildTarget.html) instead.


            
