This version of Unity is unsupported.



# BuildPlayerProcessor





class in
          UnityEditor.Build


                  Leave feedback





Implements interfaces:[IOrderedCallback](Build.IOrderedCallback.html)




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



















### Description



Extend BuildPlayerProcessor to receive callbacks during a Player build.





Add files and perform custom setup before the build starts. For more information, refer to [Use build callbacks](../Manual/build-callbacks.html).

Additional resources: [IFilterBuildAssemblies](Build.IFilterBuildAssemblies.html), [IPostBuildPlayerScriptDLLs](Build.IPostBuildPlayerScriptDLLs.html), [IUnityLinkerProcessor](Build.IUnityLinkerProcessor.html), IPreprocessBuildWithContext, IPostprocessBuildWithContext.





### Properties



| Property | Description |
| --- | --- |
| callbackOrder | Returns the relative callback order for callbacks.  Callbacks with lower values are called before ones with higher values. |





### Public Methods



| Method | Description |
| --- | --- |
| PrepareForBuild | Implement this function to receive a callback before a player build starts. |


            
