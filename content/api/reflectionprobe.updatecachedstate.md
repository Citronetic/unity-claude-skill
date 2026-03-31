This version of Unity is unsupported.



# [ReflectionProbe](ReflectionProbe.html).UpdateCachedState




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




                [Switch to Manual](../Manual/class-ReflectionProbe.html)










## Declaration

public static void UpdateCachedState();






### Description



Updates the culling system with the ReflectionProbe's current state. This ensures that Unity correctly culls the ReflectionProbe during rendering if you implement your own runtime reflection system.





By default, Unity culls ReflectionProbes automatically as part of the built-in Scriptable Runtime Reflection System. However, if you implement your own reflection system, you need to call this function in your implementation of [ScriptableRuntimeReflectionSystem.TickRealtimeProbes](Experimental.Rendering.ScriptableRuntimeReflectionSystem.TickRealtimeProbes.html). Call this method once per frame and before the rendering starts to ensure Unity correctly culls ReflectionProbes during rendering.


            
