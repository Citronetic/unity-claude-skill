This version of Unity is unsupported.



# [Joint](Joint.html).connectedBody




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












                    public [Rigidbody](Rigidbody.html) connectedBody;






### Description



A reference to another rigidbody this joint connects to.





If not set then the joint connects the object to a fixed point in world space.

Unity does not support connecting a joint to a [Rigidbody](Rigidbody.html) in a different [Scene](SceneManagement.Scene.html) that is using a local physics Scene. If a joint is connected to a [Rigidbody](Rigidbody.html), and then that [Rigidbody](Rigidbody.html) is moved to a [Scene](SceneManagement.Scene.html) that uses [LocalPhysicsMode.Physics3D](SceneManagement.LocalPhysicsMode.Physics3D.html), then the joint is automatically disconnected from the [Rigidbody](Rigidbody.html).

Additional resources: [Scene](SceneManagement.Scene.html) and [LocalPhysicsMode](SceneManagement.LocalPhysicsMode.html).


            
