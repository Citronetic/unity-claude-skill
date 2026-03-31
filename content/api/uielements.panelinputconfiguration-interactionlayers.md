This version of Unity is unsupported.



# [PanelInputConfiguration](UIElements.PanelInputConfiguration.html).interactionLayers




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












                    public [LayerMask](LayerMask.html) interactionLayers;






### Description



The Physics layers considered when casting world-space rays to determine the target of pointer events.
 Any UnityEngine.UIElements.UIDocument with one or more Collider on the Interaction Layers,
 or with GameObject children with colliders on the Interaction Layers,
 sends pointer events corresponding to the input rays to its panel.
 Other Colliders on those layers block panel events.





All layers except the Ignore Raycasts layer are enabled by default.

If World Space input is disabled, this property has no effect.


            
