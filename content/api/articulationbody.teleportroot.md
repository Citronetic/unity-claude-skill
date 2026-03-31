This version of Unity is unsupported.



# [ArticulationBody](ArticulationBody.html).TeleportRoot




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




                [Switch to Manual](../Manual/class-ArticulationBody.html)










## Declaration

public void TeleportRoot([Vector3](Vector3.html) position,
[Quaternion](Quaternion.html) rotation);






### Parameters



| Parameter | Description |
| --- | --- |
| position | The new position of the root articulation body. |
| rotation | The new orientation of the root articulation body. |





### Description



Teleport the root body of the articulation to a new pose.





Articulations are immutable once created, so it's not possible to change positions, orientations or velocities of the articulation bodies. However, you can still move the root body of the articulation with this function. To do so, call the function with the root body of the articulation. Assign zero vectors to [ArticulationBody.linearVelocity](ArticulationBody-linearVelocity.html) and [ArticulationBody.angularVelocity](ArticulationBody-angularVelocity.html) of the root articulation to reset the movement after [ArticulationBody.TeleportRoot](ArticulationBody.TeleportRoot.html).


            
