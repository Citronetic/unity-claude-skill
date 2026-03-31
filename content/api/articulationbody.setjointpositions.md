This version of Unity is unsupported.



# [ArticulationBody](ArticulationBody.html).SetJointPositions




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

public void SetJointPositions(List<float> positions);






### Parameters



| Parameter | Description |
| --- | --- |
| positions | Supplied list of floats used to set the joint positions. |





### Description



Assigns articulation body joint positions for the entire hierarchy of bodies.





This sets joint positions in the reduced coordinate space for the entire articulation hierarchy starting from root using the supplied list of floats.
                    Every joint position DOF is represented by one float value, however depending on the type of the articulation joint there might be zero, one or 3 DOFs per joint.
                    The exact location of the data to be set in the supplied list for the specific articulation body can be found by calling [ArticulationBody.GetDofStartIndices](ArticulationBody.GetDofStartIndices.html) and indexing returned dofStartIndices list by the particular body index via [ArticulationBody.index](ArticulationBody-index.html).
                    Number of degrees of freedom(DOF) for the articulation body can be found using [ArticulationBody.dofCount](ArticulationBody-dofCount.html).

                    Units of measurement - meters for linear and radians for angular motion.

                    Additional resources: [index](ArticulationBody-index.html), [GetDofStartIndices](ArticulationBody.GetDofStartIndices.html), [dofCount](ArticulationBody-dofCount.html), [GetJointPositions](ArticulationBody.GetJointPositions.html).


            
