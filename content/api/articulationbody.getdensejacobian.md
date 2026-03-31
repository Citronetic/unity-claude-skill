This version of Unity is unsupported.



# [ArticulationBody](ArticulationBody.html).GetDenseJacobian




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

public int GetDenseJacobian(ref [ArticulationJacobian](ArticulationJacobian.html) jacobian);






### Parameters



| Parameter | Description |
| --- | --- |
| jacobian | Supplied struct to read back and store Jacobian matrix values. |





### Returns



**int**
        Number of elements in Jacobian matrix.





### Description



Calculates and writes dense Jacobian matrix of the articulation body hierarchy to the supplied struct.





This calculates dense Jacobian matrix of the entire articulation body hierarchy starting from root articulation body.
                    Number of rows [ArticulationJacobian.rows](ArticulationJacobian-rows.html) of the matrix is equal to the number of articulation bodies in hierarchy times 6: 3 rows of linear/positional DOF and 3 rows of angular/rotational DOF for each body.
                    Number of columns [ArticulationJacobian.columns](ArticulationJacobian-columns.html) of the matrix is equal to the total number of all joints degrees of freedom(DOF), plus 6 if [ArticulationBody.immovable](ArticulationBody-immovable.html) is false.
                    Additional resources: [index](ArticulationBody-index.html), [ArticulationJacobian](ArticulationJacobian.html), [GetDofStartIndices](ArticulationBody.GetDofStartIndices.html).


            
