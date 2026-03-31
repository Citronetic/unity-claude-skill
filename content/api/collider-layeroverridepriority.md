This version of Unity is unsupported.



# [Collider](Collider.html).layerOverridePriority




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












                    public int layerOverridePriority;






### Description



A decision priority assigned to this [Collider](Collider.html) used when there is a conflicting decision on whether a [Collider](Collider.html) can contact another [Collider](Collider.html).





The Layer Collision Matrix defines which layers can contact other layers. Additionally, you can include and exclude layers per [Collider](Collider.html) or for all [Collider](Collider.html)s attached to a specific [Rigidbody](Rigidbody.html) or [ArticulationBody](ArticulationBody.html). Any contact involves two different [Collider](Collider.html) instances. Unfortunately this can result in one [Collider](Collider.html) deciding that it should contact the other [Collider](Collider.html), but the other [Collider](Collider.html) deciding it shouldn't.  There are rules to decide how these situations are handled.

The rules for making a decision between two [Collider](Collider.html)s, referred to here as A and B, are made in the following order:



          1. If both A and B make the same decision then use that decision.

          2. If only A or B are using a layer include or exclude override, then use the decision for A or B that has the include or exclude override specified.

          3. If both A and B are using a layer include or exclude override, then use the decision from A or B that has the higher [Collider.layerOverridePriority](Collider-layerOverridePriority.html).

          4. If A and B have the same [Collider.layerOverridePriority](Collider-layerOverridePriority.html), then the decision will be to not create a contact.





Additional resources: [Collider.includeLayers](Collider-includeLayers.html), [Collider.excludeLayers](Collider-excludeLayers.html), [Rigidbody.includeLayers](Rigidbody-includeLayers.html), [Rigidbody.excludeLayers](Rigidbody-excludeLayers.html), [ArticulationBody.includeLayers](ArticulationBody-includeLayers.html), [ArticulationBody.excludeLayers](ArticulationBody-excludeLayers.html).


            
