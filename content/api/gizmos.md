This version of Unity is unsupported.



# Gizmos





class in
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



Gizmos are used to give visual debugging or setup aids in the Scene view.





All gizmo drawing has to be done in either [MonoBehaviour.OnDrawGizmos](MonoBehaviour.OnDrawGizmos.html) or
[MonoBehaviour.OnDrawGizmosSelected](MonoBehaviour.OnDrawGizmosSelected.html) functions of the script.
[MonoBehaviour.OnDrawGizmos](MonoBehaviour.OnDrawGizmos.html) is called when the Scene view or Game view is repainted. All gizmos that render in [MonoBehaviour.OnDrawGizmos](MonoBehaviour.OnDrawGizmos.html) are pickable.
[MonoBehaviour.OnDrawGizmosSelected](MonoBehaviour.OnDrawGizmosSelected.html) is called only if the object the script is attached to is selected.

Additional resources: [GizmoUtility](GizmoUtility.html).


              


```
using UnityEngine;

public class GizmosExample : MonoBehaviour
{
    public float rotationSpeed = 50.0f;

    void OnDrawGizmosSelected()
    {
        Gizmos.color = new Color(0.75f, 0.0f, 0.0f, 0.75f);

        // Convert the local coordinate values into world
        // coordinates for the matrix transformation.
        Gizmos.matrix = transform.localToWorldMatrix;
        Gizmos.DrawCube(Vector3.zero, Vector3.one);
    }

    // Rotate the cube.
    void Update()
    {
        float zRot = rotationSpeed * Time.deltaTime;
        transform.Rotate(0.0f, 0.0f, zRot);
    }
}
```





Most of the provided Gizmo drawing methods accept additional transform parameters, like position and rotation. These transforms are applied on top of the currently set [Gizmos.matrix](Gizmos-matrix.html).





### Static Properties



| Property | Description |
| --- | --- |
| color | Sets the Color of the gizmos that are drawn next. |
| exposure | Set a texture that contains the exposure correction for LightProbe gizmos. The value is sampled from the red channel in the middle of the texture. |
| matrix | Sets the Matrix4x4 that the Unity Editor uses to draw Gizmos. |
| probeSize | Set a scale for Light Probe gizmos. This scale will be used to render the spherical harmonic preview spheres. |





### Static Methods



| Method | Description |
| --- | --- |
| CalculateLOD | Determines the appropriate level of detail for a gizmo in the Scene view at a specified position with a specified radius. |
| DrawCube | Draws a solid box at center with size in the Scene view for visualization and debugging purposes. |
| DrawFrustum | Draws a camera frustum using the currently set Gizmos.matrix for its location and rotation. |
| DrawGUITexture | Draw a texture in the Scene. |
| DrawIcon | Draw an icon at a position in the Scene view. |
| DrawLine | Draws a line between two points in the Scene view. |
| DrawLineList | Draws multiple lines between pairs of points. |
| DrawLineStrip | Draws a line between each point in the supplied span. |
| DrawMesh | Draws a mesh gizmo at the specified transform. |
| DrawRay | Draws a ray starting at a specified position from and extending in a given direction in the Scene view. |
| DrawSphere | Draws a solid color sphere with center and radius in the Scene view. |
| DrawWireCube | Draws a wireframe box at center with size in the Scene view for visualization and debugging purposes. |
| DrawWireMesh | Draws a wireframe of a mesh at the specified transform. |
| DrawWireSphere | Draws a wireframe sphere with center and radius in the Scene view. |


            
