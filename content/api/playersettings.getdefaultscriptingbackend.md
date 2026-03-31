This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).GetDefaultScriptingBackend




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

public static [ScriptingImplementation](ScriptingImplementation.html) GetDefaultScriptingBackend([Build.NamedBuildTarget](Build.NamedBuildTarget.html) buildTarget);






### Parameters



| Parameter | Description |
| --- | --- |
| buildTarget | The NamedBuildTarget. |





### Returns



**ScriptingImplementation**
        A ScriptingImplementation object that describes the default scripting backend for the build target you select.





### Description



Returns the default [ScriptingImplementation](ScriptingImplementation.html) for the build target you select.




---






                        **Obsolete**
                        Use GetDefaultScriptingBackend(NamedBuildTarget buildTarget) instead.




## Declaration

public static [ScriptingImplementation](ScriptingImplementation.html) GetDefaultScriptingBackend([BuildTargetGroup](BuildTargetGroup.html) targetGroup);






### Parameters



| Parameter | Description |
| --- | --- |
| targetGroup | The platform group to retrieve the scripting backend for. |





### Returns



**ScriptingImplementation**
        A ScriptingImplementation object that describes the default scripting backend used on that build target.





### Description



BuildTargetGroup is marked for deprecation in the future. Use [NamedBuildTarget](Build.NamedBuildTarget.html) instead.


            
