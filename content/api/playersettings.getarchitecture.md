This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).GetArchitecture




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

public static int GetArchitecture([Build.NamedBuildTarget](Build.NamedBuildTarget.html) buildTarget);






### Parameters



| Parameter | Description |
| --- | --- |
| buildTarget | The NamedBuildTarget. |





### Returns



**int**
        An integer value associated with the architecture of the build target.  0 - None, 1 - ARM64, 2 - Universal.





### Description



Gets the architecture for the given build target.




---






                        **Obsolete**
                        Use GetArchitecture(NamedBuildTarget buildTarget) instead.




## Declaration

public static int GetArchitecture([BuildTargetGroup](BuildTargetGroup.html) targetGroup);






### Description



BuildTargetGroup is marked for deprecation in the future. Use [NamedBuildTarget](Build.NamedBuildTarget.html) instead.


            
