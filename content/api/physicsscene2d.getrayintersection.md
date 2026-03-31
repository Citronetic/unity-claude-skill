This version of Unity is unsupported.



# [PhysicsScene2D](PhysicsScene2D.html).GetRayIntersection




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

public [RaycastHit2D](RaycastHit2D.html) GetRayIntersection([Ray](Ray.html) ray,
float distance,
int layerMask = Physics2D.DefaultRaycastLayers);






### Parameters



| Parameter | Description |
| --- | --- |
| ray | The 3D ray defining origin and direction to test. |
| distance | The maximum distance over which to cast the ray. |
| layerMask | The LayerMask filter used to select which layers to detect Colliders for. |





### Returns



**RaycastHit2D**
        The ray intersection result.





### Description



Cast a 3D ray against the 2D Colliders in the Scene.





This function acts as a 3D "ray cast" but specifically designed to detect 2D Colliders. It achieved this by projecting the 3D ray into 2D space and then performs the 2D intersection test, ordering the results by the Z direction of the original 3D ray.




---








## Declaration

public int GetRayIntersection([Ray](Ray.html) ray,
float distance,
List<RaycastHit2D> results,
int layerMask = Physics2D.DefaultRaycastLayers);






### Parameters



| Parameter | Description |
| --- | --- |
| ray | The 3D ray defining origin and direction to test. |
| distance | The maximum distance over which to cast the ray. |
| results | The list to receieve results. |
| layerMask | The LayerMask filter used to select which layers to detect Colliders for. |





### Returns



**int**
        The number of RaycastHit2D results returned.





### Description



Cast a 3D ray against the 2D Colliders in the Scene.





This function acts as a 3D "ray cast" but specifically designed to detect 2D Colliders. It achieved this by projecting the 3D ray into 2D space and then performs the 2D intersection test, ordering the results by the Z direction of the original 3D ray.




---








## Declaration

public int GetRayIntersection([Ray](Ray.html) ray,
float distance,
RaycastHit2D[] results,
int layerMask = Physics2D.DefaultRaycastLayers);






### Parameters



| Parameter | Description |
| --- | --- |
| ray | The 3D ray defining origin and direction to test. |
| distance | The maximum distance over which to cast the ray. |
| results | The array to receive results.  The size of the array determines the maximum number of results that can be returned. |
| layerMask | The LayerMask filter used to select which layers to detect Colliders for. |





### Returns



**int**
        The number of RaycastHit2D results returned.





### Description



Cast a 3D ray against the 2D Colliders in the Scene.





This function acts as a 3D "ray cast" but specifically designed to detect 2D Colliders. It achieved this by projecting the 3D ray into 2D space and then performs the 2D intersection test, ordering the results by the Z direction of the original 3D ray.


            
