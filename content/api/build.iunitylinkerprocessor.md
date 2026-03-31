This version of Unity is unsupported.



# IUnityLinkerProcessor





interface in
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



Implement this interface to receive callbacks related to the running of UnityLinker.





Configure the managed code stripping of a build with this interface. For more information about build callbacks, refer to [Use build callbacks](../Manual/build-callbacks.html).

Additional resources: [BuildPlayerProcessor](Build.BuildPlayerProcessor.html), [IFilterBuildAssemblies](Build.IFilterBuildAssemblies.html), [IPostBuildPlayerScriptDLLs](Build.IPostBuildPlayerScriptDLLs.html), IPreprocessBuildWithContext





### Public Methods



| Method | Description |
| --- | --- |
| GenerateAdditionalLinkXmlFile | Generates additional link.xml files for preserving additional types and their members. |


            
