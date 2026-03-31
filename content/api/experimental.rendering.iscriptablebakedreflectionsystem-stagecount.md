This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [IScriptableBakedReflectionSystem](Experimental.Rendering.IScriptableBakedReflectionSystem.html).stageCount




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












                    public int stageCount;






### Description



Number of stages of the baking process.





When ticking the ScriptableBakedReflectionSystem (see [IScriptableBakedReflectionSystem.Tick](Experimental.Rendering.IScriptableBakedReflectionSystem.Tick.html), the current IScriptableBakedReflectionSystem is expected to bake data through stages.

Your own reflection system implementation may have a different number of stages, you should set the number here.

The BuiltinScriptableBakedReflectionSystem goes through 2 stages: BakeReflectionProbes, RenderRealtimeProbes.


            
