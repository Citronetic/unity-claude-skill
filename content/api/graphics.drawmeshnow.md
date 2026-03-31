This version of Unity is unsupported.



# [Graphics](Graphics.html).DrawMeshNow




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

public static void DrawMeshNow([Mesh](Mesh.html) mesh,
[Vector3](Vector3.html) position,
[Quaternion](Quaternion.html) rotation);






## Declaration

public static void DrawMeshNow([Mesh](Mesh.html) mesh,
[Vector3](Vector3.html) position,
[Quaternion](Quaternion.html) rotation,
int materialIndex);






## Declaration

public static void DrawMeshNow([Mesh](Mesh.html) mesh,
[Matrix4x4](Matrix4x4.html) matrix);






## Declaration

public static void DrawMeshNow([Mesh](Mesh.html) mesh,
[Matrix4x4](Matrix4x4.html) matrix,
int materialIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| mesh | The Mesh to draw. |
| position | Position of the mesh. |
| rotation | Rotation of the mesh. |
| matrix | The transformation matrix of the mesh (combines position, rotation and other transformations). |
| materialIndex | Subset of the mesh to draw. |





### Description



Draw a mesh immediately.





This function will draw a given mesh immediately. Currently set shader and
material (see [Material.SetPass](Material.SetPass.html)) will be used.

The mesh will be just drawn once,
it won't be per-pixel lit and will not cast or receive real-time shadows. If you want
full integration with lighting and shadowing, use [Graphics.DrawMesh](Graphics.DrawMesh.html) instead.


              


```
using UnityEngine;
using System.Collections;// Attach this script to a Camera
public class ExampleClass : MonoBehaviour {
    public Mesh mesh;
    public Material mat;
    public void OnPostRender() {
        // set first shader pass of the material
        mat.SetPass(0);
        // draw mesh at the origin
        Graphics.DrawMeshNow(mesh, Vector3.zero, Quaternion.identity);
    }
}
```





Additional resources: [Graphics.DrawMesh](Graphics.DrawMesh.html), [Material.SetPass](Material.SetPass.html).


            
