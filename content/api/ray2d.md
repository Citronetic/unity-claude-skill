This version of Unity is unsupported.



# Ray2D





struct in
          UnityEngine



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



A ray in 2D space.





A *ray* is a line segment that extends from a point in space in a specified direction. Rays have a number of uses in Unity but the most common is probably *raycasting*. This technique involves tracing along the path of a ray from its origin to determine if it intersects with any objects. This is useful for plotting the paths of projectiles, determining lines of sight and implementing many common game mechanics.

Additional resources: [Physics2D.Raycast](Physics2D.Raycast.html), [Ray](Ray.html) class, [RaycastHit2D](RaycastHit2D.html) class.





### Properties



| Property | Description |
| --- | --- |
| direction | The direction of the ray in world space. |
| origin | The starting point of the ray in world space. |





### Constructors



| Constructor | Description |
| --- | --- |
| Ray2D | Creates a 2D ray starting at origin along direction. |





### Public Methods



| Method | Description |
| --- | --- |
| GetPoint | Get a point that lies a given distance along a ray. |
| ToString | Returns a formatted string for this 2D ray. |


            
