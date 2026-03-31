This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# ScriptableBakedReflectionSystem





class in
          UnityEditor.Experimental.Rendering


                  Leave feedback





Implements interfaces:[IScriptableBakedReflectionSystem](Experimental.Rendering.IScriptableBakedReflectionSystem.html)




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



Empty implementation of [IScriptableBakedReflectionSystem](Experimental.Rendering.IScriptableBakedReflectionSystem.html).





Use this class as a base class and override its methods to implement your own ScriptableBakedReflectionSystem.





### Properties



| Property | Description |
| --- | --- |
| stageCount | Number of stages of the baking process. |
| stateHashes | The hashes of the current baked state of the ScriptableBakedReflectionSystem. |





### Public Methods



| Method | Description |
| --- | --- |
| BakeAllReflectionProbes | Implement this method to bake all of the loaded reflection probes. |
| Cancel | Cancel the running bake jobs. |
| Clear | Clear the state of ScriptableBakedReflectionSystem. |
| SynchronizeReflectionProbes | Synchronize the baked data with the actual components and rendering settings. |
| Tick | This method is called during the Editor update until the ScriptableBakedReflectionSystem indicates that the baking is complete, with handle.SetIsDone(true). (See IScriptableBakedReflectionSystemStageNotifier.SetIsDone). |


            
