This version of Unity is unsupported.



# [ArticulationBody](ArticulationBody.html).GetDofStartIndices




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

public int GetDofStartIndices(List<int> dofStartIndices);






### Parameters



| Parameter | Description |
| --- | --- |
| dofStartIndices | Supplied list of integers to read back and store the data. |





### Returns



**int**
        Total degrees of freedom for the entire hierarchy of articulation bodies.





### Description



Calculates and reads back reduced coordinate data start indexes in reduced coordinate data buffer for every articulation body in the hierarchy.





In order to read back or set entire articulation hierarchy data in reduced coordinates where every degree of freedom is represented by float value, one needs to find the location of reduced cordinates data for particular ArticulationBody.
                    This can be achieved by calling [ArticulationBody.GetDofStartIndices](ArticulationBody.GetDofStartIndices.html) and indexing resulting list by the particular body index via [ArticulationBody.index](ArticulationBody-index.html).
                    Number of degrees of freedom for particular articulation body can be found using [ArticulationBody.dofCount](ArticulationBody-dofCount.html).
                    Additional resources: [index](ArticulationBody-index.html), [GetDofStartIndices](ArticulationBody.GetDofStartIndices.html), [dofCount](ArticulationBody-dofCount.html).


            
