This version of Unity is unsupported.



# [PhysicsVisualizationSettings](PhysicsVisualizationSettings.html).useVariedContactColors




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












                    public static bool useVariedContactColors;






### Description



Whether varied colors are used for [PhysicsDebugWindow](PhysicsDebugWindow.html) contact visualization.





If you set this property to false, [PhysicsVisualizationSettings.contactColor](PhysicsVisualizationSettings-contactColor.html), [PhysicsVisualizationSettings.contactImpulseColor](PhysicsVisualizationSettings-contactImpulseColor.html), and [PhysicsVisualizationSettings.contactSeparationColor](PhysicsVisualizationSettings-contactSeparationColor.html) properties are used to visualize contacts.

If you set this property to true, random colors are used to visualize contacts. The Collider instance ID is hashed into a color that is used for the arrow representing the contact normal. The separation is visualized by an inverse color and the impulse is black. Note that [PhysicsDebugWindow](PhysicsDebugWindow.html) does not take [PhysicsVisualizationSettings.baseAlpha](PhysicsVisualizationSettings-baseAlpha.html) into account.


            
