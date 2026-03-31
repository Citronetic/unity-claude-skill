This version of Unity is unsupported.



# [Collider](Collider.html).excludeLayers




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












                    public [LayerMask](LayerMask.html) excludeLayers;






### Description



The additional layers that this [Collider](Collider.html) should exclude when deciding if the [Collider](Collider.html) can contact another [Collider](Collider.html).





The Layer Collision Matrix defines which layers can contact other layers. Use this property to specify additional layers that this specific [Collider](Collider.html) instance should not contact.

When deciding which layers can contact each other, the Layer Collision Matrix first includes layers, then excludes layers. If a layer is set to be included and excluded, it is excluded.

**NOTE**: Layers can be included or excluded differently depending on the settings of each [Collider](Collider.html) instance. As such, there could be a conflicting decision for whether two [Collider](Collider.html) instances can come into contact with each other. To learn how Unity decides this, see [Collider.layerOverridePriority](Collider-layerOverridePriority.html).

Additional resources: [Collider.includeLayers](Collider-includeLayers.html), [Rigidbody.includeLayers](Rigidbody-includeLayers.html), [Rigidbody.excludeLayers](Rigidbody-excludeLayers.html), [ArticulationBody.includeLayers](ArticulationBody-includeLayers.html), [ArticulationBody.excludeLayers](ArticulationBody-excludeLayers.html).


            
