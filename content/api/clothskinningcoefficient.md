This version of Unity is unsupported.



# ClothSkinningCoefficient





struct in
          UnityEngine



/



Implemented in:[UnityEngine.ClothModule](UnityEngine.ClothModule.html)


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



The ClothSkinningCoefficient struct is used to set up how a [Cloth](Cloth.html) component is allowed to move with respect to the [SkinnedMeshRenderer](SkinnedMeshRenderer.html) it is attached to.





This is set using the [Cloth.coefficients](Cloth-coefficients.html) property on the Cloth component, which is a
per-vertex array of ClothSkinningCoefficient structs. Typically, you will not set these values from code,
but instead, set them up in the editor which shows up when you look at the Cloth component in the inspector.





### Properties



| Property | Description |
| --- | --- |
| collisionSphereDistance | Definition of a sphere a vertex is not allowed to enter. This allows collision against the animated cloth. |
| maxDistance | Distance a vertex is allowed to travel from the skinned mesh vertex position. |


            
