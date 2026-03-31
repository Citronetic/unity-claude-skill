This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).SetScriptingBackend




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

public static void SetScriptingBackend([Build.NamedBuildTarget](Build.NamedBuildTarget.html) buildTarget,
[ScriptingImplementation](ScriptingImplementation.html) backend);




                        **Obsolete**
                        Use SetScriptingBackend(NamedBuildTarget buildTarget, ScriptingImplementation backend) instead.




## Declaration

public static void SetScriptingBackend([BuildTargetGroup](BuildTargetGroup.html) targetGroup,
[ScriptingImplementation](ScriptingImplementation.html) backend);






### Parameters



| Parameter | Description |
| --- | --- |
| buildTarget | The NamedBuildTarget. |
| backend | The ScriptingImplementation. |





### Description



Sets the scripting framework for a given build target.





Sets the scripting framework that Unity will use for a specific build target.  Sets either IL2CPP, Mono, or .NET as the backend scripting framework.

BuildTargetGroup is marked for deprecation in the future. Use [NamedBuildTarget](Build.NamedBuildTarget.html) instead.


            
