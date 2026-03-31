This version of Unity is unsupported.



# [Collider](Collider.html).providesContacts




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












                    public bool providesContacts;






### Description



Whether or not this Collider generates contacts for [Physics.ContactEvent](Physics.ContactEvent.html).





If this property is set to `true`, all contacts produced by this collider will appear in the buffer. If this property is set to false, contact generation will depend on these factors:



          - If the Collider or its Rigidbody have a script with a [MonoBehaviour.OnCollisionStay](MonoBehaviour.OnCollisionStay.html) method, all contacts will be generated for [Physics.ContactEvent](Physics.ContactEvent.html).

          - If the Collider or its Rigidbody has a script with either [MonoBehaviour.OnCollisionEnter](MonoBehaviour.OnCollisionEnter.html) or [MonoBehaviour.OnCollisionExit](MonoBehaviour.OnCollisionExit.html) but not [MonoBehaviour.OnCollisionStay](MonoBehaviour.OnCollisionStay.html), enter and exit contacts will be generated for [Physics.ContactEvent](Physics.ContactEvent.html), but not stay contacts.

          - If the [PhysicsVisualizationSettings.showAllContacts](PhysicsVisualizationSettings-showAllContacts.html) property is set to true, all Colliders will generate all contacts for visualisation purposes!




            
