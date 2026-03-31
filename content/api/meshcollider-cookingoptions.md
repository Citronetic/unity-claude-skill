This version of Unity is unsupported.



# [MeshCollider](MeshCollider.html).cookingOptions




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




                [Switch to Manual](../Manual/class-MeshCollider.html)







                    public [MeshColliderCookingOptions](MeshColliderCookingOptions.html) cookingOptions;






### Description



Options used to enable or disable certain features in mesh cooking.





Mesh cooking is a process of turning a normal mesh into a mesh that is suitable for use in the physics engine. Cooking builds the spatial search structures for the physics queries such as [Physics.Raycast](Physics.Raycast.html) as well as supporting structures for the contacts generation. Any mesh has to be cooked before using it runtime. This can happen at import time (if you set the "Generate Colliders" option of the ModelImporter) or run-time.

Mostly useful when generating meshes run-time as it allows to disable certain validity checks that take time to run. Note that with the validity checks disabled, it's the user's responsibilty to provide valid data, otherwise the behaviour might be undefined.


            
