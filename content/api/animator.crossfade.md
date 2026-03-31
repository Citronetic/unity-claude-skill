This version of Unity is unsupported.



# [Animator](Animator.html).CrossFade




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




                [Switch to Manual](../Manual/class-Animator.html)










## Declaration

public void CrossFade(string stateName,
float normalizedTransitionDuration,
int layer = -1,
float normalizedTimeOffset = float.NegativeInfinity,
float normalizedTransitionTime = 0.0f);






## Declaration

public void CrossFade(int stateHashName,
float normalizedTransitionDuration,
int layer = -1,
float normalizedTimeOffset = 0.0f,
float normalizedTransitionTime = 0.0f);






### Parameters



| Parameter | Description |
| --- | --- |
| stateName | The name of the state. |
| stateHashName | The hash name of the state. |
| normalizedTransitionDuration | The duration of the transition (normalized). |
| layer | The layer where the crossfade occurs. |
| normalizedTimeOffset | The time of the state (normalized). |
| normalizedTransitionTime | The time of the transition (normalized). |





### Description



Creates a crossfade from the current state to any other state using normalized times.





When you specify a state name, or the string used to generate a hash, it should include the name of the parent layer. For example, if you have a `Run` state in the `Base Layer`, the name is `Base Layer.Run`.
When you use the `stateName` parameter, this method calls [Animator.StringToHash](Animator.StringToHash.html) internally. If you use this method with the same `stateName` often, precompute the hash and use the `stateHashName` parameter to improve performance.

Additional resources: [Animator.CrossFadeInFixedTime](Animator.CrossFadeInFixedTime.html) for times in seconds. [Animator.StringToHash](Animator.StringToHash.html) for how to get a hash from the name.


            
