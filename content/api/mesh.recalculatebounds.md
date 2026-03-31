This version of Unity is unsupported.



# [Mesh](Mesh.html).RecalculateBounds




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




                [Switch to Manual](../Manual/class-Mesh.html)










## Declaration

public void RecalculateBounds([Rendering.MeshUpdateFlags](Rendering.MeshUpdateFlags.html) flags = MeshUpdateFlags.Default);






### Parameters



| Parameter | Description |
| --- | --- |
| flags | Flags controlling the function behavior, see MeshUpdateFlags. |





### Description



Recalculate the bounding volume of the Mesh and all of its sub-meshes with the vertex data.





After modifying vertices you should call this function to ensure the bounding volume is correct.
Assigning [triangles](Mesh-triangles.html) automatically recalculates the bounding volume.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        Mesh mesh = GetComponent<MeshFilter>().mesh;
        mesh.RecalculateBounds();
    }
}
```





Unity can only recalculate the bounding volume for Meshes that use the default [VertexAttributeFormat.Float32](Rendering.VertexAttributeFormat.Float32.html) vertex position format. If your Mesh uses a non-standard vertex position data format, you must assign the [bounds](Mesh-bounds.html) manually.

The bounds of a [SkinnedMeshRenderer](SkinnedMeshRenderer.html) cannot be recalculated, and can only be changed by setting the SkinnedMeshRenderer.localBounds manually.

Additional resources: [bounds](Mesh-bounds.html).


            
