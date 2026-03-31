This version of Unity is unsupported.



# [Physics2D](Physics2D.html).GetRayIntersectionAll




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

public static RaycastHit2D[] GetRayIntersectionAll([Ray](Ray.html) ray,
float distance,
int layerMask = DefaultRaycastLayers);






### Parameters



| Parameter | Description |
| --- | --- |
| ray | The 3D ray defining origin and direction to test. |
| distance | The maximum distance over which to cast the ray. |
| layerMask | The LayerMask filter used to select which layers to detect Colliders for. |





### Returns



**RaycastHit2D[]**
        The ray intersection results.





### Description



Cast a 3D ray against the 2D Colliders in the Scene.





This function acts as a 3D "ray cast" but specifically designed to detect 2D Colliders. It achieved this by projecting the 3D ray into 2D space and then performs the 2D intersection test, ordering the results by the Z direction of the original 3D ray.

**NOTE:** All results are sorted into ascending distance order i.e. the first result is the closest.


            
