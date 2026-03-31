This version of Unity is unsupported.



# RaycastHit





struct in
          UnityEngine



/



Implemented in:[UnityEngine.PhysicsModule](UnityEngine.PhysicsModule.html)


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



Structure used to get information back from a raycast.





Additional resources: [Physics.Raycast](Physics.Raycast.html), [Physics.Linecast](Physics.Linecast.html), [Physics.RaycastAll](Physics.RaycastAll.html).





### Properties



| Property | Description |
| --- | --- |
| articulationBody | The ArticulationBody of the collider that was hit. If the collider is not attached to an articulation body then it is null. |
| barycentricCoordinate | The barycentric coordinate of the triangle we hit. |
| collider | The Collider that was hit. |
| colliderInstanceID | Instance ID of the Collider that was hit. |
| distance | The distance from the ray's origin to the impact point. |
| lightmapCoord | The uv lightmap coordinate at the impact point. |
| normal | The normal of the surface the ray hit. |
| point | The impact point in world space where the ray hit the collider. |
| rigidbody | The Rigidbody of the collider that was hit. If the collider is not attached to a rigidbody then it is null. |
| textureCoord | The uv texture coordinate at the collision location. |
| textureCoord2 | The secondary uv texture coordinate at the impact point. |
| transform | The Transform of the rigidbody or collider that was hit. |
| triangleIndex | The index of the triangle that was hit. |


            
