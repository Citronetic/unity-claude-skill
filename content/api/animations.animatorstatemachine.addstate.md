This version of Unity is unsupported.



# [AnimatorStateMachine](Animations.AnimatorStateMachine.html).AddState




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

public [Animations.AnimatorState](Animations.AnimatorState.html) AddState(string name);






## Declaration

public [Animations.AnimatorState](Animations.AnimatorState.html) AddState(string name,
[Vector3](Vector3.html) position);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The name of the new state. |
| position | The position of the state node. |





### Returns



**AnimatorState**
        The AnimatorState that was created for this state.





### Description



Utility function to add a state to the state machine.





The state asset that is created is added as a sub asset of the state machine.  The API returns an [AnimatorState](Animations.AnimatorState.html) which you can use to add transitions.

An example showing usage of this API can be found at the [AnimatorController](Animations.AnimatorController.html) page.




---








## Declaration

public void AddState([Animations.AnimatorState](Animations.AnimatorState.html) state,
[Vector3](Vector3.html) position);






### Parameters



| Parameter | Description |
| --- | --- |
| state | The state to add. |
| position | The position of the state node. |





### Description



Utility function to add a state to the state machine.





This function pushes an Undo operation.


            
