This version of Unity is unsupported.



# [Physics2D](Physics2D.html).contactThreshold




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












                    public static float contactThreshold;






### Description



A threshold below which a contact is automatically disabled.





Colliders placed side-by-side do not form a continuous surface which can result in unwanted contacts (known as "ghost collisions") when moving across these colliders. The main use-case here is to try to suppress these kinds of contacts.

When using a [Rigidbody2D](Rigidbody2D.html) set to [CollisionDetectionMode2D.Continuous](CollisionDetectionMode2D.Continuous.html), if a contact overlaps with a distance less than this threshold, it is automatically disabled as indicated in [Collision2D.enabled](Collision2D-enabled.html).

The threshold is not used when the [Rigidbody2D](Rigidbody2D.html) is set to [CollisionDetectionMode2D.Discrete](CollisionDetectionMode2D.Discrete.html) or the threshold is set to zero.

**NOTES**: Caution is advised against changing this threshold as increasing it may cause valid contacts to be disabled resulting in collider penetration/tunnelling and reducing it may allow unwanted contacts to be left enabled. Also, there is no guarantee that all such unwanted contacts can be suppressed with the contact threshold.


            
