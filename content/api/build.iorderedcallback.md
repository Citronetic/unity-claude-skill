This version of Unity is unsupported.



# IOrderedCallback





interface in
          UnityEditor.Build


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



















### Description



Interface that provides control over callback order.





This is the base class for build callback interfaces, for example [IPreprocessBuildWithReport](Build.IPreprocessBuildWithReport.html), [IPreprocessShaders](Build.IPreprocessShaders.html), [IProcessSceneWithReport](Build.IProcessSceneWithReport.html), [IPostprocessBuildWithReport](Build.IPostprocessBuildWithReport.html), and [IUnityLinkerProcessor](Build.IUnityLinkerProcessor.html).

Every class that implements these interfaces must define the callbackOrder property with a "get" accessor.





### Properties



| Property | Description |
| --- | --- |
| callbackOrder | Returns a numeric value that determines the order in which the build callback is invoked. |


            
