This version of Unity is unsupported.



# [ArticulationBody](ArticulationBody.html).SetDriveTargetVelocities




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

public void SetDriveTargetVelocities(List<float> targetVelocities);






### Parameters



| Parameter | Description |
| --- | --- |
| targetVelocities | Supplied list of floats used to set the joint drive target velocities. |





### Description



Assigns articulation body joint drive target velocities for the entire hierarchy of bodies.





This sets joint drive target velocities in the reduced coordinate space for the entire articulation hierarchy starting from root using the supplied list of floats.
                    Every joint drive target velocity DOF is represented by one float value, however depending on the type of the articulation joint there might be zero, one or 3 DOFs per joint.
                    The exact location of the data to be set in the supplied list for the specific articulation body can be found by calling [ArticulationBody.GetDofStartIndices](ArticulationBody.GetDofStartIndices.html) and indexing returned dofStartIndices list by the particular body index via [ArticulationBody.index](ArticulationBody-index.html).
                    Number of degrees of freedom(DOF) for the articulation body can be found using [ArticulationBody.dofCount](ArticulationBody-dofCount.html).

                    Units of measurement - m/s (meters per second) for linear and rad/s (radians per second) for angular motion.

                    Additional resources: [index](ArticulationBody-index.html), [GetDofStartIndices](ArticulationBody.GetDofStartIndices.html), [dofCount](ArticulationBody-dofCount.html), [GetDriveTargetVelocities](ArticulationBody.GetDriveTargetVelocities.html).


            
