This version of Unity is unsupported.



# [Physics](Physics.html).reuseCollisionCallbacks




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












                    public static bool reuseCollisionCallbacks;






### Description



Determines whether the garbage collector should reuse only a single instance of a Collision type for all collision callbacks.





When an [MonoBehaviour.OnCollisionEnter](MonoBehaviour.OnCollisionEnter.html), [MonoBehaviour.OnCollisionStay](MonoBehaviour.OnCollisionStay.html) or [MonoBehaviour.OnCollisionExit](MonoBehaviour.OnCollisionExit.html) collision callback occurs, the [Collision](Collision.html) object passed to it is created for each individual callback. This means the garbage collector has to remove each object, which reduces performance.

When this option is true, only a single instance of the [Collision](Collision.html) type is created and reused for each individual callback. This reduces waste for the garbage collector to handle and improves performance.

You would only set this option to false if the [Collision](Collision.html) object is referenced outside of the collision callback for processing later, so recycling the [Collision](Collision.html) object is not desired.


            
