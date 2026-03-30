This version of Unity is unsupported.



# [HingeJoint2D](HingeJoint2D.html).useConnectedAnchor




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












                    public bool useConnectedAnchor;






### Description



Controls whether the connected anchor is used or not.





By default, this property is enabled which results in the [Joint2D.connectedBody](Joint2D-connectedBody.html) and [AnchoredJoint2D.connectedAnchor](AnchoredJoint2D-connectedAnchor.html) properties being used to constrain the position of the [Rigidbody2D](Rigidbody2D.html) the [HingeJoint2D](HingeJoint2D.html) is attached to. This is known as a point-to-point constraint.

When this property is disabled, the point-to-point constraint is disabled. This stops the [HingeJoint2D](HingeJoint2D.html) from being connected to its anchor point allowing the [Rigidbody2D](Rigidbody2D.html) it is added to, to move freely.

Disabling this allows both the [motor](HingeJoint2D-useMotor.html) and [limits](HingeJoint2D-useLimits.html) to be used to constrain and modify angular motion while not constraining linear motion.


            
