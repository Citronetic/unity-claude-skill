This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).SetArchitecture




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

public static void SetArchitecture([Build.NamedBuildTarget](Build.NamedBuildTarget.html) buildTarget,
int architecture);




                        **Obsolete**
                        Use SetArchitecture(NamedBuildTarget buildTarget, int architecture) instead.




## Declaration

public static void SetArchitecture([BuildTargetGroup](BuildTargetGroup.html) targetGroup,
int architecture);






### Parameters



| Parameter | Description |
| --- | --- |
| buildTarget | The NamedBuildTarget. |
| architecture | An integer value associated with the architecture of the build target.  0 - None, 1 - ARM64, 2 - Universal. |





### Description



Sets the architecture for the given build target.





BuildTargetGroup is marked for deprecation in the future. Use [NamedBuildTarget](Build.NamedBuildTarget.html) instead.


            
