This version of Unity is unsupported.



# [AnimatorControllerPlayable](Animations.AnimatorControllerPlayable.html).Play




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

public void Play(string stateName,
int layer = -1,
float normalizedTime = float.NegativeInfinity);






## Declaration

public void Play(int stateNameHash,
int layer = -1,
float normalizedTime = float.NegativeInfinity);






### Parameters



| Parameter | Description |
| --- | --- |
| stateName | The state name. |
| stateNameHash | The state hash name. If stateNameHash is 0, it changes the current state time. |
| layer | The layer index. If layer is -1, it plays the first state with the given state name or hash. |
| normalizedTime | The time offset between zero and one. |





### Description



Plays a state.





When you specify a state name, or the string used to generate a hash, it should include the name of the parent layer. For example, if you have a `Run` state in the `Base Layer`, the name is `Base Layer.Run`.
The `normalizedTime` parameter varies between 0 and 1.  If this parameter is left at zero then [Play](Animations.AnimatorControllerPlayable.Play.html) will operate as expected.  A different starting point can be given.  An example could be `normalizedTime` set to 0.5, which means the animation starts half way through.  If the transition from one state switches to another it may or may not be blended.  If the transition starts at 0.75 it will be blended with the other state.  If no transition is set up then [Play](Animations.AnimatorControllerPlayable.Play.html) will continue to 1.0 with no changes.


            
