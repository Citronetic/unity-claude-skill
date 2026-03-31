This version of Unity is unsupported.



# [ModifiableContactPair](ModifiableContactPair.html).GetFaceIndex




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















## Declaration

public uint GetFaceIndex(int i);






### Parameters



| Parameter | Description |
| --- | --- |
| i | Index of the contact point. |





### Returns



**uint**
        Index of a face this contact point belongs to.





### Description



Get the index of a face a particular contact point belongs to in this contact pair. Use this with [Mesh.triangles](Mesh-triangles.html).





Only valid if one of the colliders in this pair is a non-convex MeshCollider. In this case, that collider will always be the second shape of the pair.
A value of 0xffffFFFF indicates an error, which could be none of the Colliders were non-convex MeshColliders, or that the contact point index was out of bounds.


            
