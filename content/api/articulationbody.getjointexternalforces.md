This version of Unity is unsupported.



# [ArticulationBody](ArticulationBody.html).GetJointExternalForces




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

public int GetJointExternalForces(List<float> forces,
float step);






### Parameters



| Parameter | Description |
| --- | --- |
| forces | Supplied list of floats to store the counteracting external force data. |
| step | The timestep of the next physics simulation. |





### Returns



**int**
        Total degrees of freedom (DOF) for the entire hierarchy of articulation bodies.





### Description



Fills the supplied list of floats with forces required to counteract any existing external forces (applied using [ArticulationBody.AddForce](ArticulationBody.AddForce.html) or [ArticulationBody.AddTorque](ArticulationBody.AddTorque.html)) for each Articulation Body in the articulation.





This returns the forces required to counteract external forces in the reduced coordinate space for the entire articulation hierarchy starting from root to the supplied list of floats. This function utilizes the [ArticulationBody.GetAccumulatedForce](ArticulationBody.GetAccumulatedForce.html) and [ArticulationBody.GetAccumulatedTorque](ArticulationBody.GetAccumulatedTorque.html) methods. As such, you must supply the timestep of the next simulation.

                    Every joint drive force DOF is represented by one float value. Depending on the type of the articulation joint, a joint can have zero, one or three DOFs.
                    To find the exact location of the data in the resulting list for the specific articulation body, call [ArticulationBody.GetDofStartIndices](ArticulationBody.GetDofStartIndices.html) and index the returned dofStartIndices list by the particular body index via [ArticulationBody.index](ArticulationBody-index.html).
                   To find the number of DOF for the articulation body, use [ArticulationBody.dofCount](ArticulationBody-dofCount.html).

Gravity, ArticulationDrives and potential damping terms are not considered in the computation (for example, linear/angular damping or joint friction).

                    Additional resources: [index](ArticulationBody-index.html), [GetDofStartIndices](ArticulationBody.GetDofStartIndices.html), [dofCount](ArticulationBody-dofCount.html), [SetDriveTargets](ArticulationBody.SetDriveTargets.html).


            
