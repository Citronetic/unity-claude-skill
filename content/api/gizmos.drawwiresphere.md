This version of Unity is unsupported.



# [Gizmos](Gizmos.html).DrawWireSphere




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

public static void DrawWireSphere([Vector3](Vector3.html) center,
float radius);






### Parameters



| Parameter | Description |
| --- | --- |
| center | The center point of the sphere to draw. |
| radius | The radius of the sphere to draw. Determines the size of the drawn sphere. |





### Description



Draws a wireframe sphere with `center` and `radius` in the Scene view.





`DrawWireSphere` is a method used for visual debugging in the Unity Editor. It renders a wireframe sphere in the Scene view. This method is useful for visualizing collision areas, effect ranges, or important positions within your scene.

The sphere is drawn using the current Gizmos color, which can be set using [Gizmos.color](Gizmos-color.html) before calling `DrawWireSphere`.
The sphere is drawn using the current Gizmos matrix, which can be set using [Gizmos.matrix](Gizmos-matrix.html) before calling `DrawWireSphere`.

Typically, you'd use this method within [MonoBehaviour.OnDrawGizmos](MonoBehaviour.OnDrawGizmos.html) or [MonoBehaviour.OnDrawGizmosSelected](MonoBehaviour.OnDrawGizmosSelected.html) functions in your MonoBehaviour scripts, or within a method with the [DrawGizmo](DrawGizmo.html) attribute. Like all Gizmos, it's an Editor-only tool and should not be used for game functionality. This method has no effect in the GameView or at runtime. If you want to draw similar shapes at runtime, refer to [Debug.DrawLine](Debug.DrawLine.html).

The sphere respects the 3D space and perspective of the scene, including depth and occlusion by other objects. It also respects the alpha channel of the Gizmos color, allowing for semi-transparent spheres as well as the transformation of [Gizmos.matrix](Gizmos-matrix.html).


              


```
using UnityEngine;public class SphereGizmoExample : MonoBehaviour
{
    public float radius = 1f;
    [Range(0f, 1f)]
    public float alpha = 0.5f;    private void OnDrawGizmos()
    {
        // Set the color with custom alpha
        Gizmos.color = new Color(1f, 0f, 0f, alpha); // Red with custom alpha        // Draw the sphere
        Gizmos.DrawSphere(transform.position, radius);        // Draw wire sphere outline
        Gizmos.color = Color.white;
        Gizmos.DrawWireSphere(transform.position, radius);
    }
}
```





Additional resources: [MonoBehaviour.OnDrawGizmos](MonoBehaviour.OnDrawGizmos.html), [MonoBehaviour.OnDrawGizmosSelected](MonoBehaviour.OnDrawGizmosSelected.html), [DrawGizmo](DrawGizmo.html), [Gizmos.color](Gizmos-color.html), [Gizmos.matrix](Gizmos-matrix.html).


            
