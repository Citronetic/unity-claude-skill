This version of Unity is unsupported.



# [Gizmos](Gizmos.html).DrawRay




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

public static void DrawRay([Ray](Ray.html) r);






## Declaration

public static void DrawRay([Vector3](Vector3.html) from,
[Vector3](Vector3.html) direction);






### Parameters



| Parameter | Description |
| --- | --- |
| from | The ray start position in world space. |
| direction | The vector in world space defining the direction and length of the ray. The magnitude of this vector determines the length of the drawn ray. |
| r | A Ray struct that contains the origin and direction of the ray to draw. |





### Description



Draws a ray starting at a specified position `from` and extending in a given `direction` in the Scene view.





`DrawRay` is a method used for visual debugging in the Unity Editor. `DrawRay` renders a line segment in the Scene view. `DrawRay` is useful for visualizing raycasts, directions, or vectors in your scene.

The line is drawn using the current Gizmos color, which can be set using [Gizmos.color](Gizmos-color.html) before calling `DrawRay`.
The line is drawn using the current Gizmos matrix, which can be set using [Gizmos.matrix](Gizmos-matrix.html) before calling `DrawRay`.

Typically, you'd use this method within [MonoBehaviour.OnDrawGizmos](MonoBehaviour.OnDrawGizmos.html) or [MonoBehaviour.OnDrawGizmosSelected](MonoBehaviour.OnDrawGizmosSelected.html) functions in your MonoBehaviour scripts, or within a method with the [DrawGizmo](DrawGizmo.html) attribute. Like all Gizmos, it's an Editor-only tool and should not be used for game functionality. This method has no effect in the GameView or at runtime. If you want to draw similar shapes at runtime refer to [Debug.DrawLine](Debug.DrawLine.html).

The line segment respects the 3D space and perspective of the scene, including depth and occlusion by other objects. It also respects the alpha channel of the Gizmos color, allowing for semi-transparent lines as well as the transformation of [Gizmos.matrix](Gizmos-matrix.html).


              


```
using UnityEngine;public class RayGizmoExample : MonoBehaviour
{
    public Vector3 direction = Vector3.forward;
    public float length = 5f;
    [Range(0f, 1f)]
    public float alpha = 0.75f;    private void OnDrawGizmos()
    {
        // Set the color with custom alpha.
        Gizmos.color = new Color(0f, 1f, 0f, alpha); // Green with custom alpha        // Draw the ray.
        Gizmos.DrawRay(transform.position, direction.normalized * length);        // Draw a sphere at the end of the ray.
        Gizmos.DrawSphere(transform.position + direction.normalized * length, 0.1f);
    }
}
```





Additional resources: [MonoBehaviour.OnDrawGizmos](MonoBehaviour.OnDrawGizmos.html), [MonoBehaviour.OnDrawGizmosSelected](MonoBehaviour.OnDrawGizmosSelected.html), [DrawGizmo](DrawGizmo.html), [Gizmos.color](Gizmos-color.html), [Gizmos.matrix](Gizmos-matrix.html).


            
