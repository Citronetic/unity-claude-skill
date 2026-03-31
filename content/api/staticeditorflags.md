This version of Unity is unsupported.



# StaticEditorFlags





enumeration


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



Describes which Unity systems consider the GameObject as static, and include the GameObject in their precomputations in the Unity Editor.





Setting StaticEditorFlags at runtime has no effect on these systems.

For more information, see the [Unity Manual documentation on StaticEditorFlags](../Manual/StaticObjects.html).

            Additional resources: [GameObjectUtility.SetStaticEditorFlags](GameObjectUtility.SetStaticEditorFlags.html), [GameObject.isStatic](GameObject-isStatic.html)





### Properties



| Property | Description |
| --- | --- |
| ContributeGI | Include the target Mesh Renderer in global illumination calculations. |
| OccluderStatic | Mark the GameObject as a Static Occluder in the occlusion culling system. |
| OccludeeStatic | Mark the GameObject as a Static Occludee in the occlusion culling system. |
| BatchingStatic | Combine the GameObject's Mesh with other eligible Meshes, to potentially reduce runtime rendering costs. |
| ReflectionProbeStatic | Include this GameObject when when precomputing data for Reflection Probes whose Type property is set to Baked. |


            
