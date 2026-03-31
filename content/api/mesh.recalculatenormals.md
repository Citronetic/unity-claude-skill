This version of Unity is unsupported.



# [Mesh](Mesh.html).RecalculateNormals




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

public void RecalculateNormals([Rendering.MeshUpdateFlags](Rendering.MeshUpdateFlags.html) flags = MeshUpdateFlags.Default);






### Parameters



| Parameter | Description |
| --- | --- |
| flags | Flags controlling the function behavior, see MeshUpdateFlags. |





### Description



Recalculates the normals of the Mesh from the triangles and vertices.





After modifying the vertices it is often useful to update the normals to reflect the change. Normals are calculated from all shared vertices.

Imported Meshes sometimes don't share all vertices. For example, a vertex at a UV seam is split into two vertices, so the RecalculateNormals function creates normals that are not smooth at the UV seam.

Note that RecalculateNormals does not generate tangents automatically, to do that use [RecalculateTangents](Mesh.RecalculateTangents.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        Mesh mesh = GetComponent<MeshFilter>().mesh;
        mesh.RecalculateNormals();
    }
}
```





`RecalculateNormals` converts Mesh vertex position data to [VertexAttributeFormat.Float32](Rendering.VertexAttributeFormat.Float32.html) format, if the format is different.

Additional resources: [RecalculateTangents](Mesh.RecalculateTangents.html).


            
