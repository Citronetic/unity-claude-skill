This version of Unity is unsupported.



# [Collider2D](Collider2D.html).forceReceiveLayers




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












                    public [LayerMask](LayerMask.html) forceReceiveLayers;






### Description



The Layers that this [Collider2D](Collider2D.html) can receive forces from during a Collision contact with another [Collider2D](Collider2D.html).





When a collision occurs between two [Collider2D](Collider2D.html), both Colliders would normally receive a force from each other that separates them. Both Colliders have a Layer assigned to them respectively, which can be the same or different Layer(s). For the forces to apply, each Collider must send a force to the Layer that is assigned to the other Collider, while also receiving a force on their own Layer from the other Collider. Thus, both Colliders must mutually agree on which Layers the forces are being sent and received.

The [forceReceiveLayers](Collider2D-forceReceiveLayers.html) property allows you to select which Layers that the Collider receives force from, while [forceSendLayers](Collider2D-forceSendLayers.html) allows you to select which Layers the Collider sends a force to.

**NOTES**:



          - Because forces only relate to a Collision contact, this features does not apply when either [Collider2D](Collider2D.html) is set to be a trigger via [Collider2D.isTrigger](Collider2D-isTrigger.html) and does not affect mutual forces applied by a [Joint2D](Joint2D.html).

          - Any [Rigidbody2D.bodyType](Rigidbody2D-bodyType.html) can send forces; however, only a [Dynamic Body Type](RigidbodyType2D.Dynamic.html) can receive forces. Neither [Kinematic Body Type](RigidbodyType2D.Kinematic.html) nor [Static Body Type](RigidbodyType2D.Static.html) can receive forces.

          - Forces being sent and received do not affect Collision callbacks which are still called even if no forces are applied.

          - During a Collision callback, any impulses reported by [ContactPoint2D.normalImpulse](ContactPoint2D-normalImpulse.html) or [ContactPoint2D.tangentImpulse](ContactPoint2D-tangentImpulse.html) will be the impulses that would have been applied if [forceSendLayers](Collider2D-forceSendLayers.html) and [forceReceiveLayers](Collider2D-forceReceiveLayers.html) were not used.





Additional resources: [Collider2D.forceSendLayers](Collider2D-forceSendLayers.html).


            
