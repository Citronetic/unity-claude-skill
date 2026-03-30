This version of Unity is unsupported.


                  **Method group is Obsolete**





# [PlayerSettings](PlayerSettings.html).SetScriptingDefineSymbolsForGroup




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








                        **Obsolete**
                        Use SetScriptingDefineSymbols(NamedBuildTarget buildTarget, string defines) instead.




## Declaration

public static void SetScriptingDefineSymbolsForGroup([BuildTargetGroup](BuildTargetGroup.html) targetGroup,
string defines);




                        **Obsolete**
                        Use SetScriptingDefineSymbols(NamedBuildTarget buildTarget, string[] defines) instead.




## Declaration

public static void SetScriptingDefineSymbolsForGroup([BuildTargetGroup](BuildTargetGroup.html) targetGroup,
string[] defines);






### Parameters



| Parameter | Description |
| --- | --- |
| targetGroup | The name of the group of devices. |
| defines | Symbols for this group can be passed as an array or as a string separated by semicolons. |





### Description



BuildTargetGroup is marked for deprecation in the future. Use [PlayerSettings.SetScriptingDefineSymbols](PlayerSettings.SetScriptingDefineSymbols.html) instead.





Set user-specified symbols for script compilation for the given build target group.

The second argument, `defines`, is a string of preprocessor values.  The values that this string
contains is located in "Scripting Define Symbols".  This can be located in the Configuration
section of the PlayerSettings.

Additional resources: [Platform Dependent Compilation](../Manual/platform-dependent-compilation.html).


            
