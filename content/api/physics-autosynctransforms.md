This version of Unity is unsupported.



# [Physics](Physics.html).autoSyncTransforms




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












                    public static bool autoSyncTransforms;






### Description



Whether or not to automatically sync transform changes with the physics system whenever a [Transform](Transform.html) component changes.





When a [Transform](Transform.html) component changes, any [Rigidbody](Rigidbody.html) or [Collider](Collider.html) on that [Transform](Transform.html) or its children may need to be repositioned, rotated or scaled depending on the change to the [Transform](Transform.html).  You can control if the changes made to the [Transform](Transform.html) are automatically applied to the correct components by setting this property true.  When set to false, synchronization only occurs prior to the physics simulation step during the Fixed Update.  You can also manually synchronize transform changes using [Physics.SyncTransforms](Physics.SyncTransforms.html).

**Note**: When autoSyncTransforms is set to true, repeatedly changing a Transform and then performing a physics query can cause performance loss. To avoid affecting performance, set autoSyncTransforms to false if you want to perform multiple Transform changes and queries in succession. You should only set autoSyncTransforms to true for physics backwards compatibility in existing projects made before Unity 2017.2. For projects made in Unity 2017.2 onwards, turn this option off.


            
