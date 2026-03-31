This version of Unity is unsupported.



# [Gizmos](Gizmos.html).DrawMesh




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

public static void DrawMesh([Mesh](Mesh.html) mesh,
[Vector3](Vector3.html) position = Vector3.zero,
[Quaternion](Quaternion.html) rotation = Quaternion.identity,
[Vector3](Vector3.html) scale = Vector3.one);






## Declaration

public static void DrawMesh([Mesh](Mesh.html) mesh,
int submeshIndex,
[Vector3](Vector3.html) position = Vector3.zero,
[Quaternion](Quaternion.html) rotation = Quaternion.identity,
[Vector3](Vector3.html) scale = Vector3.one);






### Parameters



| Parameter | Description |
| --- | --- |
| mesh | The Mesh to draw as a gizmo. Mesh objects can be created and managed, or retrieved through the MeshFilter component. |
| position | The mesh position in world space. The default position is zero. |
| rotation | The mesh orientation in world space. The default is identity quaternion. |
| scale | Mesh scale in world space (default is scale of 1). |
| submeshIndex | The submesh to draw. The default is -1, which draws the whole mesh. |





### Description



Draws a mesh gizmo at the specified transform.





The mesh gizmo is drawn with the currently set [Gizmos.color](Gizmos-color.html). Additional resources: [DrawWireMesh](Gizmos.DrawWireMesh.html).


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    Mesh mesh = null;    void OnDrawGizmosSelected()
    {
        // Draws a yellow Cube at the position of the object rotated by 45 degrees around the Y axis.
        if (mesh is null)
            mesh = Resources.GetBuiltinResource<Mesh>("Cube.fbx");
        Gizmos.color = Color.yellow;
        Gizmos.DrawMesh(mesh, transform.position, Quaternion.Euler(0f, 45f, 0f));
    }
}
```


            
