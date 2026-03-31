This version of Unity is unsupported.



# [Gizmos](Gizmos.html).DrawLineList




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

public static void DrawLineList(ReadOnlySpan<Vector3> points);






### Parameters



| Parameter | Description |
| --- | --- |
| points | Pairs of points to use as the beginning and end of each line to draw. Unity throws an exception if points contains an odd number of elements. |





### Description



Draws multiple lines between pairs of points.





This function provides a more efficient way to draw multiple lines than repeatedly calling the [Gizmos.DrawLine](Gizmos.DrawLine.html) function for each one.

Each pair of points from the `points` span represents the start and end of each line, so the Editor draws the first line from `points[0]` to `points[1]`, the next from `points[2]` to `points[3]`, and so on. The method requires the span to have an even number of points, if not it throws an exception.

This method is versatile and can be used to visualize connections, paths, or boundaries in your scene.

The lines are drawn using the current Gizmos color, which can be set using [Gizmos.color](Gizmos-color.html) before calling `DrawLineList`.
The lines are drawn using the current Gizmos matrix, which can be set using [Gizmos.matrix](Gizmos-matrix.html) before calling `DrawLineList`.

Typically, you'd use this method within [MonoBehaviour.OnDrawGizmos](MonoBehaviour.OnDrawGizmos.html) or [MonoBehaviour.OnDrawGizmosSelected](MonoBehaviour.OnDrawGizmosSelected.html) functions in your MonoBehaviour scripts, or within a method with the [DrawGizmo](DrawGizmo.html) attribute. Like all Gizmos, it's an editor-only tool and should not be used for game functionality. This method has no effect in the Game view or at runtime. If you want to draw similar shapes at runtime see [Debug.DrawLine](Debug.DrawLine.html).

The lines respect the 3D space and perspective of the scene, including depth and occlusion by other objects. They also respect the alpha channel of the Gizmos color, allowing for semi-transparent lines as well as the transformation of [Gizmos.matrix](Gizmos-matrix.html).


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    Vector3[] points;    void Start()
    {
        points = new Vector3[4]
        {
            new Vector3(-100, 0, 0),
            new Vector3(100, 0, 0),
            new Vector3(-100, 100, 0),
            new Vector3(100, 100, 0)
        };
    }    void OnDrawGizmosSelected()
    {
        // Draws two parallel blue lines
        Gizmos.color = Color.blue;
        Gizmos.DrawLineList(points);
    }
}
```





Additional resources: [Gizmos.DrawLine](Gizmos.DrawLine.html), [Gizmos.DrawLineStrip](Gizmos.DrawLineStrip.html), [MonoBehaviour.OnDrawGizmos](MonoBehaviour.OnDrawGizmos.html), [MonoBehaviour.OnDrawGizmosSelected](MonoBehaviour.OnDrawGizmosSelected.html), [DrawGizmo](DrawGizmo.html), [Gizmos.color](Gizmos-color.html), [Gizmos.matrix](Gizmos-matrix.html).


            
