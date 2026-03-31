This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [ScriptableBakedReflectionSystem](Experimental.Rendering.ScriptableBakedReflectionSystem.html).Tick




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















## Declaration

public void Tick([Experimental.Rendering.SceneStateHash](Experimental.Rendering.SceneStateHash.html) sceneStateHash,
[Experimental.Rendering.IScriptableBakedReflectionSystemStageNotifier](Experimental.Rendering.IScriptableBakedReflectionSystemStageNotifier.html) handle);






### Parameters



| Parameter | Description |
| --- | --- |
| sceneStateHash | Current Scene state hash. |
| handle | A handle to receive notifications about the status of the stages of the baking process. |





### Description



This method is called during the Editor update until the ScriptableBakedReflectionSystem indicates that the baking is complete, with `handle.SetIsDone(true)`. (See [IScriptableBakedReflectionSystemStageNotifier.SetIsDone](Experimental.Rendering.IScriptableBakedReflectionSystemStageNotifier.SetIsDone.html)).





This implementation does nothing.

Override this method in your own implementation to prepare and issue baking jobs if required in your ScriptableBakedReflectionSystem. See [IScriptableBakedReflectionSystem](Experimental.Rendering.IScriptableBakedReflectionSystem.html).


            
