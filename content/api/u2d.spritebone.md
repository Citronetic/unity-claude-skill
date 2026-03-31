This version of Unity is unsupported.



# SpriteBone





struct in
          UnityEngine.U2D



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



















### Description



Stores a set of information that describes the bind pose of this Sprite.





This struct describes the hierarchy and other spatial relationships between the bones of this Sprite.





### Properties



| Property | Description |
| --- | --- |
| color | Shows the color set for the bone in the Editor. |
| guid | The Unique GUID of this bone. |
| length | The length of the bone. This is important for the leaf bones to describe their length without needing another bone as the terminal bone. |
| name | The name of the bone. This is useful when recreating bone hierarchy at editor or runtime. You can also use this as a way of resolving the bone path when a Sprite is bound to a more complex or richer hierarchy. |
| parentId | The ID of the parent of this bone. |
| position | The position in local space of this bone. |
| rotation | The rotation of this bone in local space. |


            
