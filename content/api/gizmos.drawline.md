This version of Unity is unsupported.



# [Gizmos](Gizmos.html).DrawLine




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

public static void DrawLine([Vector3](Vector3.html) from,
[Vector3](Vector3.html) to);






### Parameters



| Parameter | Description |
| --- | --- |
| from | The start position of the line to draw in world space. |
| to | The end position of the line to draw in world space. |





### Description



Draws a line between two points in the Scene view.





`DrawLine` is a method used for visual debugging in the Unity Editor. Use `DrawLine` to render a line segment in the Scene view. `DrawLine` is versatile and can be used to visualize connections, paths, or boundaries in your scene.

The line is drawn using the current Gizmos color, which can be set using [Gizmos.color](Gizmos-color.html) before calling `DrawLine`.
The line is drawn using the current Gizmos matrix, which can be set using [Gizmos.matrix](Gizmos-matrix.html) before calling `DrawLine`.

Typically, you'd use this method within [MonoBehaviour.OnDrawGizmos](MonoBehaviour.OnDrawGizmos.html) or [MonoBehaviour.OnDrawGizmosSelected](MonoBehaviour.OnDrawGizmosSelected.html) functions in your MonoBehaviour scripts, or within a method with the [DrawGizmo](DrawGizmo.html) attribute. Like all Gizmos, it's an Editor-only tool and should not be used for game functionality. This method has no effect in the Game view or at runtime. If you want to draw similar shapes at runtime, refer to [Debug.DrawLine](Debug.DrawLine.html).

The line respects the 3D space and perspective of the scene, including depth and occlusion by other objects. It also respects the alpha channel of the Gizmos color, allowing for semi-transparent lines as well as the transformation of [Gizmos.matrix](Gizmos-matrix.html).

If you need to draw many lines consider the [Gizmos.DrawLineList](Gizmos.DrawLineList.html) or [Gizmos.DrawLineStrip](Gizmos.DrawLineStrip.html) functions which are much faster than repeatedly calling this function to draw lines individually.


              


```
using UnityEngine;public class LineGizmoExample : MonoBehaviour
{
    public Transform endPoint;
    [Range(0f, 1f)]
    public float alpha = 0.75f;    private void OnDrawGizmos()
    {
        if (endPoint == null) return;        // Set the color with custom alpha
        Gizmos.color = new Color(1f, 1f, 0f, alpha); // Yellow with custom alpha        // Draw the line
        Gizmos.DrawLine(transform.position, endPoint.position);        // Draw spheres at start and end points
        Gizmos.DrawSphere(transform.position, 0.1f);
        Gizmos.DrawSphere(endPoint.position, 0.1f);        // Calculate and display the midpoint
        Vector3 midpoint = (transform.position + endPoint.position) / 2f;
        Gizmos.color = Color.red;
        Gizmos.DrawSphere(midpoint, 0.15f);        // Display the distance
        float distance = Vector3.Distance(transform.position, endPoint.position);
        UnityEditor.Handles.Label(midpoint, $"Distance: {distance:F2}");
    }
}
```





Additional resources: [Gizmos.DrawLineList](Gizmos.DrawLineList.html), [Gizmos.DrawLineStrip](Gizmos.DrawLineStrip.html), [MonoBehaviour.OnDrawGizmos](MonoBehaviour.OnDrawGizmos.html), [MonoBehaviour.OnDrawGizmosSelected](MonoBehaviour.OnDrawGizmosSelected.html), [DrawGizmo](DrawGizmo.html), [Gizmos.color](Gizmos-color.html), [Gizmos.matrix](Gizmos-matrix.html).


            
