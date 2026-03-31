This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).SetManagedStrippingLevel




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

public static void SetManagedStrippingLevel([Build.NamedBuildTarget](Build.NamedBuildTarget.html) buildTarget,
[ManagedStrippingLevel](ManagedStrippingLevel.html) level);




                        **Obsolete**
                        Use SetManagedStrippingLevel(NamedBuildTarget buildTarget, ManagedStrippingLevel level) instead.




## Declaration

public static void SetManagedStrippingLevel([BuildTargetGroup](BuildTargetGroup.html) targetGroup,
[ManagedStrippingLevel](ManagedStrippingLevel.html) level);






### Parameters



| Parameter | Description |
| --- | --- |
| level | The desired managed code stripping level. |
| buildTarget | The NamedBuildTarget. |





### Description



Sets the managed code stripping level for specified build target.





During the build process, Unity strips unused code from your project's managed and dynamically linked libraries. Stripping code results in a much smaller executable but can remove code you'd like to use.

                    The [ManagedStrippingLevel](ManagedStrippingLevel.html) Enum defines the options you can use to specify the rate at which Unity should remove unused code or to disable code stripping altogether.

                    Additional resources: [GetManagedStrippingLevel](PlayerSettings.GetManagedStrippingLevel.html), [Managed code stripping](../Manual/ManagedCodeStripping.html).

                    BuildTargetGroup is marked for deprecation in the future. Use [NamedBuildTarget](Build.NamedBuildTarget.html) instead.


            
