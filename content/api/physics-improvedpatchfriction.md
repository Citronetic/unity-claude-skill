This version of Unity is unsupported.



# [Physics](Physics.html).improvedPatchFriction




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












                    public static bool improvedPatchFriction;






### Description



Enables an improved patch friction mode that guarantees static and dynamic friction do not exceed analytical results.





This improved mode only applies when patch friction is enabled, otherwise it has no effect.

The physics engine computes contact points for each pair of colliders that are in contact. From those contacts, the engine produces a set of up to two friction anchor points. With the flag set, the engine distributes the normal force between the friction anchors so that the total amount of friction applied does not exceed the analytical results.


            
