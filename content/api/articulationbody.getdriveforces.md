This version of Unity is unsupported.



# [ArticulationBody](ArticulationBody.html).GetDriveForces




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

public int GetDriveForces(List<float> forces);






### Parameters



| Parameter | Description |
| --- | --- |
| forces | Supplied list of floats to store the drive force data. |





### Returns



**int**
        Total degrees of freedom (DOF) for the entire hierarchy of Articulation Bodies.





### Description



Reads the entire hierarchy of Articulation Bodies and fills the supplied list of floats with Articulation Drive forces.





This returns Articulation Drive forces in the reduced coordinate space for the entire Articulation hierarchy starting from the root to the supplied list of floats.
                    Every drive force DOF is represented by one float value. However, there might be zero, one or three DOFs per joint, depending on the type of the articulation joint.
                    To find the exact location of the data in the resulting list for the specific Articulation Body, call [ArticulationBody.GetDofStartIndices](ArticulationBody.GetDofStartIndices.html) and index the returned dofStartIndices list by the particular body index with [ArticulationBody.index](ArticulationBody-index.html).
                    To find the number of DOF for the Articulation Body, use [ArticulationBody.dofCount](ArticulationBody-dofCount.html).

                    Additional resources: [index](ArticulationBody-index.html), [GetDofStartIndices](ArticulationBody.GetDofStartIndices.html), [dofCount](ArticulationBody-dofCount.html), [SetJointForces](ArticulationBody.SetJointForces.html).


            
