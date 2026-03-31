This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).GetManagedStrippingLevel




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

public static [ManagedStrippingLevel](ManagedStrippingLevel.html) GetManagedStrippingLevel([Build.NamedBuildTarget](Build.NamedBuildTarget.html) buildTarget);






### Parameters



| Parameter | Description |
| --- | --- |
| buildTarget | The NamedBuildTarget. |





### Returns



**ManagedStrippingLevel**
        Returns the default [ManagedStrippingLevel](ManagedStrippingLevel.html) for the build target you select.





### Description



Gets the managed code stripping level set for the build target you select




---






                        **Obsolete**
                        Use GetManagedStrippingLevel(NamedBuildTarget buildTarget) instead.




## Declaration

public static [ManagedStrippingLevel](ManagedStrippingLevel.html) GetManagedStrippingLevel([BuildTargetGroup](BuildTargetGroup.html) targetGroup);






### Parameters



| Parameter | Description |
| --- | --- |
| targetGroup | The target platform group whose code stripping level you want to retrieve. |





### Description



BuildTargetGroup is marked for deprecation in the future. Use [NamedBuildTarget](Build.NamedBuildTarget.html) instead.


            
