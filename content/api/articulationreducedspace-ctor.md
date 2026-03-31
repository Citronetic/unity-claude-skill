This version of Unity is unsupported.



# ArticulationReducedSpace Constructor




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

public ArticulationReducedSpace(float a);






## Declaration

public ArticulationReducedSpace(float a,
float b);






## Declaration

public ArticulationReducedSpace(float a,
float b,
float c);






### Parameters



| Parameter | Description |
| --- | --- |
| a | Coordinate of the first degree of freedom. |
| b | Coordinate of the second degree of freedom. |
| c | Coordinate of the third degree of freedom. |





### Description



Stores coordinates in reduced space.





Used in conjunction with joint parameter accessors in reduced coordinate space, for instance: ArticulationBody.jointPosition.

Currently, an articulation body can have up to three degrees of freedom:



          - a fixed joint has no degrees of freedom;

          - a revolute joint has one rotational degree of freedom -- rotation around the X axis, called twist;

          - a prismatic joint has one translational degree of freedom -- translation along X, Y, or Z axis;

          - a spherical joint has up to three, depending on the amount of unlocked motions. Currently, if only one axis is unlocked, then the amount of degrees of freedom will be reported as 1, and 3 otherwise. The order of axes is as follows: first is twist, then the two swing values.




            
