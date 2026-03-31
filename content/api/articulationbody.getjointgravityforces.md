This version of Unity is unsupported.



# [ArticulationBody](ArticulationBody.html).GetJointGravityForces




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

public int GetJointGravityForces(List<float> forces);






### Parameters



| Parameter | Description |
| --- | --- |
| forces | Supplied list of floats to store the counteracting gravity force data. |





### Returns



**int**
        Total degrees of freedom (DOF) for the entire hierarchy of articulation bodies.





### Description



Fills the supplied list of floats with forces required to counteract gravity for each Articulation Body in the articulation.





This returns the forces required to counteract gravity in the reduced coordinate space for the entire articulation hierarchy starting from root to the supplied list of floats.
                    Every joint drive force DOF is represented by one float value. Depending on the type of the articulation joint there might be zero, one or three DOFs per joint.
                    To find the exact location of the data in the resulting list for the specific articulation body, call [ArticulationBody.GetDofStartIndices](ArticulationBody.GetDofStartIndices.html) and index the returned dofStartIndices list by the particular body index via [ArticulationBody.index](ArticulationBody-index.html).
                   To find the number of DOF for the articulation body, use [ArticulationBody.dofCount](ArticulationBody-dofCount.html).

ArticulationDrives and potential damping terms are not considered in the computation (for example, linear/angular damping or joint friction).

                    Units of measurement - N (newtons) for linear and Nm (newton-meters) for angular motion.

                    Additional resources: [index](ArticulationBody-index.html), [GetDofStartIndices](ArticulationBody.GetDofStartIndices.html), [dofCount](ArticulationBody-dofCount.html), [SetDriveTargets](ArticulationBody.SetDriveTargets.html).


            
