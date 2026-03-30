This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [IScriptableRuntimeReflectionSystem](Experimental.Rendering.IScriptableRuntimeReflectionSystem.html).TickRealtimeProbes




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

public bool TickRealtimeProbes();






### Returns



**bool**
        Whether a reflection probe was updated.





### Description



Update the reflection probes.





The implementation of this method should update the real-time reflection probes. This is called once per frame during the offscreen camera render.

If you use the built-in [ReflectionProbe](ReflectionProbe.html) component and rely on the built-in culling system (see [ScriptableCullingParameters](Rendering.ScriptableCullingParameters.html)), you must call [ReflectionProbe.UpdateCachedState](ReflectionProbe.UpdateCachedState.html) to update and provide the appropriate probe information to the culling system.


            
