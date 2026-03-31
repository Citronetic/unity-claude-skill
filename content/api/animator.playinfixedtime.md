This version of Unity is unsupported.



# [Animator](Animator.html).PlayInFixedTime




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

public void PlayInFixedTime(string stateName,
int layer = -1,
float fixedTime = float.NegativeInfinity);






## Declaration

public void PlayInFixedTime(int stateNameHash,
int layer = -1,
float fixedTime = float.NegativeInfinity);






### Parameters



| Parameter | Description |
| --- | --- |
| stateName | The state name. |
| stateNameHash | The state hash name. If stateNameHash is 0, it changes the current state time. |
| layer | The layer index. If layer is -1, it plays the first state with the given state name or hash. |
| fixedTime | The time offset (in seconds). |





### Description



Plays a state.





When you specify a state name, or the string used to generate a hash, it should include the name of the parent layer. For example, if you have a `Run` state in the `Base Layer`, the name is `Base Layer.Run`.
When you use the `stateName` parameter, this method calls [Animator.StringToHash](Animator.StringToHash.html) internally. If you use this method with the same `stateName` often, precompute the hash and use the `stateHashName` parameter to improve performance.

Additional resources:  [Animator.StringToHash](Animator.StringToHash.html) for how to get a hash from the name.


            
