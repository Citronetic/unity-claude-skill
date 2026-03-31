This version of Unity is unsupported.



# [Physics](Physics.html).invokeCollisionCallbacks




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












                    public static bool invokeCollisionCallbacks;






### Description



Whether or not [MonoBehaviour](MonoBehaviour.html) collision messages will be sent by the physics system.





If this property is set to `true`, [MonoBehaviour.OnCollisionEnter](MonoBehaviour.OnCollisionEnter.html), [MonoBehaviour.OnCollisionStay](MonoBehaviour.OnCollisionStay.html), and [MonoBehaviour.OnCollisionExit](MonoBehaviour.OnCollisionExit.html) messages will be sent to the corresponding scripts that have these methods implemented.

If this property is set to `false`, no [MonoBehaviour.OnCollisionEnter](MonoBehaviour.OnCollisionEnter.html), [MonoBehaviour.OnCollisionStay](MonoBehaviour.OnCollisionStay.html), or [MonoBehaviour.OnCollisionExit](MonoBehaviour.OnCollisionExit.html) messages will be sent. This can be beneficial when only the [Physics.ContactEvent](Physics.ContactEvent.html) is used to read contacts as this will stop the physics system from iterating simulation results.

Note: This does not affect trigger events.


            
