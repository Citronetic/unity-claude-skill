This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [IScriptableBakedReflectionSystem](Experimental.Rendering.IScriptableBakedReflectionSystem.html).Tick




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



This method is called every Editor update until the ScriptableBakedReflectionSystem indicates that the baking is complete, with `handle.SetIsDone(true)`. (See [IScriptableBakedReflectionSystemStageNotifier.SetIsDone](Experimental.Rendering.IScriptableBakedReflectionSystemStageNotifier.SetIsDone.html)).





You should use this to check if a bake is required by comparing the provided hashes (or your own hashes) with the baked data.

If you detect any changes, then this is the place to prepare and launch baking jobs.
While the jobs are running, you can indicate their progress with the `handle.EnterStage(stage, progressMessage, progress)` call. See [IScriptableBakedReflectionSystemStageNotifier.EnterStage](Experimental.Rendering.IScriptableBakedReflectionSystemStageNotifier.EnterStage.html).

See [IScriptableBakedReflectionSystem](Experimental.Rendering.IScriptableBakedReflectionSystem.html) for examples.


            
