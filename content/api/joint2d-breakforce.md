This version of Unity is unsupported.



# [Joint2D](Joint2D.html).breakForce




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












                    public float breakForce;






### Description



The force that needs to be applied for this joint to break.





When a joint tries to constrain a [Rigidbody2D](Rigidbody2D.html) it may need to apply a force to do so.  This is known as the [reactionForce](Joint2D-reactionForce.html).  Each physics update, the [breakForce](Joint2D-breakForce.html) is compared to the size of the [reactionForce](Joint2D-reactionForce.html); if it exceeds it then [Joint2D.OnJointBreak2D](Joint2D.OnJointBreak2D.html) is called with a reference to the joint that broke.  Knowing the joint that broke, you can check the actual reaction force that broke the joint using [reactionForce](Joint2D-reactionForce.html) or [Joint2D.GetReactionForce](Joint2D.GetReactionForce.html).

The break force can be set to [Mathf.Infinity](Mathf.Infinity.html)  to make the joint unbreakable by any amount of reaction force. Alternately, setting the [breakAction](Joint2D-breakAction.html) to [JointBreakAction2D.Ignore](JointBreakAction2D.Ignore.html) will make the joint unbreakable by either [breakForce](Joint2D-breakForce.html) or [breakTorque](Joint2D-breakTorque.html).

The action taken when a joint exceeds the breakForce is controlled by [breakAction](Joint2D-breakAction.html).

Additional resources: [Joint2D.reactionForce](Joint2D-reactionForce.html), [Joint2D.GetReactionForce](Joint2D.GetReactionForce.html) & [Joint2D.OnJointBreak2D](Joint2D.OnJointBreak2D.html).


            
