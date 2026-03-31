This version of Unity is unsupported.



# [Joint2D](Joint2D.html).breakAction




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












                    public [JointBreakAction2D](JointBreakAction2D.html) breakAction;






### Description



The action to take when the joint breaks the [breakForce](Joint2D-breakForce.html) or [breakTorque](Joint2D-breakTorque.html).





A joint breaks when the force a joint exerts exceeds [breakForce](Joint2D-breakForce.html) or when the torque a joint exerts exceeds [breakTorque](Joint2D-breakTorque.html).  The joint action happens after the call to [Joint2D.OnJointBreak2D](Joint2D.OnJointBreak2D.html) has completed.  If the [breakAction](Joint2D-breakAction.html) is changed during the [Joint2D.OnJointBreak2D](Joint2D.OnJointBreak2D.html) callback then that updated action happens.

Additional resources: [JointBreakAction2D](JointBreakAction2D.html).


            
