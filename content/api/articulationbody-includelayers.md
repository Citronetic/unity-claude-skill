This version of Unity is unsupported.



# [ArticulationBody](ArticulationBody.html).includeLayers




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




                [Switch to Manual](../Manual/class-ArticulationBody.html)







                    public [LayerMask](LayerMask.html) includeLayers;






### Description



The additional layers that all [Collider](Collider.html)s attached to this [ArticulationBody](ArticulationBody.html) should include when deciding if a the [Collider](Collider.html) can come into contact with another [Collider](Collider.html).





The Layer Collision Matrix defines which layers can contact other layers. Use this property to specify additional layers that all [Collider](Collider.html)s attached to this [ArticulationBody](ArticulationBody.html) instance can contact.

**NOTE**: Layers can be included or excluded differently depending on the settings of each [Collider](Collider.html) instance. As such, there could be a conflicting decision for whether two [Collider](Collider.html) instances can come into contact with each other. To learn how Unity decides this, see [Collider.layerOverridePriority](Collider-layerOverridePriority.html).

Additional resources: [Collider.excludeLayers](Collider-excludeLayers.html), [ArticulationBody.excludeLayers](ArticulationBody-excludeLayers.html), [Rigidbody.includeLayers](Rigidbody-includeLayers.html), [Rigidbody.excludeLayers](Rigidbody-excludeLayers.html).


            
