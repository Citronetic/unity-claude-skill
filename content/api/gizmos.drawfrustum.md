This version of Unity is unsupported.



# [Gizmos](Gizmos.html).DrawFrustum




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

public static void DrawFrustum([Vector3](Vector3.html) center,
float fov,
float maxRange,
float minRange,
float aspect);






### Parameters



| Parameter | Description |
| --- | --- |
| center | The apex of the truncated pyramid. With respect to a camera, this would be the camera position. This is an offset from the currently set Gizmos.matrix. |
| fov | The vertical field of view (the angle at the apex in degrees not radians). |
| maxRange | Distance of the frustum's far plane. |
| minRange | Distance of the frustum's near plane. |
| aspect | The aspect ratio of the frustum to draw. This is the frustum's width divided by its height. |





### Description



Draws a camera frustum using the currently set `Gizmos.matrix` for its location and rotation.





The frustum is drawn with the currently set [Gizmos.color](Gizmos-color.html). Note that the fov parameter is the vertical field of view, not the horizontal field of view.


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    void OnDrawGizmosSelected()
    {
        // Draws a red wireframe frustum at world origin with 16:9 aspect ratio and 90 degrees horizontal FOV.
        Gizmos.color = Color.red;
        Gizmos.DrawFrustum(new Vector3(), 59f, 1000f, 3f, 16f/9f);
        // The near plane value is intentially set large to demonstrate its offset from the frustum center.
    }
}
```


            
