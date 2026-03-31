This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).GetIl2CppCompilerConfiguration




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

public static [Il2CppCompilerConfiguration](Il2CppCompilerConfiguration.html) GetIl2CppCompilerConfiguration([Build.NamedBuildTarget](Build.NamedBuildTarget.html) buildTarget);






### Parameters



| Parameter | Description |
| --- | --- |
| buildTarget | The NamedBuildTarget. |





### Returns



**Il2CppCompilerConfiguration**
        Returns compiler configuration.





### Description



Gets compiler configuration used when compiling generated C++ code for the build target you specify.




---






                        **Obsolete**
                        Use GetIl2CppCompilerConfiguration(NamedBuildTarget buildTarget) instead.




## Declaration

public static [Il2CppCompilerConfiguration](Il2CppCompilerConfiguration.html) GetIl2CppCompilerConfiguration([BuildTargetGroup](BuildTargetGroup.html) targetGroup);






### Parameters



| Parameter | Description |
| --- | --- |
| targetGroup | Build target group. |





### Description



BuildTargetGroup is marked for deprecation in the future. Use [NamedBuildTarget](Build.NamedBuildTarget.html) instead.


            
