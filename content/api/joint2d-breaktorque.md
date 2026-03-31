This version of Unity is unsupported.



# [Joint2D](Joint2D.html).breakTorque




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












                    public float breakTorque;






### Description



The torque that needs to be applied for this joint to break.





When a joint tries to constrain a [Rigidbody2D](Rigidbody2D.html) it may need to apply torque to do so.  This is known as the [reactionTorque](Joint2D-reactionTorque.html).  Each physics update, the [breakTorque](Joint2D-breakTorque.html) is compared to the [reactionTorque](Joint2D-reactionTorque.html); if it exceeds it then [Joint2D.OnJointBreak2D](Joint2D.OnJointBreak2D.html) is called with a reference to the joint that broke.  Knowing the joint that broke you can check the actual reaction torque that broke the joint using [reactionTorque](Joint2D-reactionTorque.html) or [Joint2D.GetReactionTorque](Joint2D.GetReactionTorque.html).

The break torque can be set to [Mathf.Infinity](Mathf.Infinity.html) to make the joint unbreakable by any amount of reaction torque. Alternately, setting the [breakAction](Joint2D-breakAction.html) to [JointBreakAction2D.Ignore](JointBreakAction2D.Ignore.html) will make the joint unbreakable by either [breakForce](Joint2D-breakForce.html) or [breakTorque](Joint2D-breakTorque.html).

The action taken when a joint exceeds the breakForce is controlled by [breakAction](Joint2D-breakAction.html).

Note: [breakTorque](Joint2D-breakTorque.html) is not available on [DistanceJoint2D](DistanceJoint2D.html), [SpringJoint2D](SpringJoint2D.html) or [TargetJoint2D](TargetJoint2D.html).

Additional resources: [Joint2D.reactionTorque](Joint2D-reactionTorque.html), [Joint2D.GetReactionTorque](Joint2D.GetReactionTorque.html) & [Joint2D.OnJointBreak2D](Joint2D.OnJointBreak2D.html).


            
