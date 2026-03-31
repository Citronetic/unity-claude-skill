This version of Unity is unsupported.



# [AnimatorStateMachine](Animations.AnimatorStateMachine.html).AddStateMachine




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

public [Animations.AnimatorStateMachine](Animations.AnimatorStateMachine.html) AddStateMachine(string name);






## Declaration

public [Animations.AnimatorStateMachine](Animations.AnimatorStateMachine.html) AddStateMachine(string name,
[Vector3](Vector3.html) position);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The name of the new state machine. |
| position | The position of the state machine node. |





### Returns



**AnimatorStateMachine**
        The newly created [AnimatorStateMachine](Animations.AnimatorStateMachine.html) state machine.





### Description



Utility function to add a state machine to the state machine.





The state machine asset that is created is added as a sub asset of the state machine.

An example showing usage of this API can be found at the [AnimatorController](Animations.AnimatorController.html) page.




---








## Declaration

public void AddStateMachine([Animations.AnimatorStateMachine](Animations.AnimatorStateMachine.html) stateMachine,
[Vector3](Vector3.html) position);






### Parameters



| Parameter | Description |
| --- | --- |
| stateMachine | The state machine to add. |
| position | The position of the state machine node. |





### Description



Utility function to add a state machine to the state machine.





This function pushes an Undo operation.


            
