This version of Unity is unsupported.


                  **Removed**





# [Physics2D](Physics2D.html).raycastsHitTriggers




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













                        **Obsolete**
                        Physics2D.raycastsHitTriggers is obsolete. Use Physics2D.queriesHitTriggers instead.
**Upgrade to [queriesHitTriggers](Physics2D-queriesHitTriggers.html)**

                    public static bool raycastsHitTriggers;






### Description



Set the raycasts to either detect or not detect Triggers.





A Collider can be set up to act as a *trigger* which will detect other Colliders entering its volume but won't physically collide with them. Often, it is desirable to avoid detecting trigger Colliders with raycasts because they don't represent solid objects. This property lets you choose whether or not raycasts should detect triggers.

Additional resources: [Collider2D.isTrigger](Collider2D-isTrigger.html), [Raycast](Physics2D.Raycast.html).


            
