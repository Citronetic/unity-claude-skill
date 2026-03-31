This version of Unity is unsupported.



# [Mesh](Mesh.html).RecalculateTangents




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

public void RecalculateTangents([Rendering.MeshUpdateFlags](Rendering.MeshUpdateFlags.html) flags = MeshUpdateFlags.Default);






### Parameters



| Parameter | Description |
| --- | --- |
| flags | Flags controlling the function behavior, see MeshUpdateFlags. |





### Description



Recalculates the tangents of the Mesh from the normals and texture coordinates.





After modifying the vertices and the normals of the Mesh, tangents need to be updated if the Mesh is rendered using Shaders that reference normal maps.
Unity calculates tangents using the vertex positions, normals and texture coordinates of the Mesh.

`RecalculateTangents` adds a tangent attribute to the vertex, or changes the tangent attribute to the correct format. The attribute has a dimension of 4 and uses the [VertexAttributeFormat.Float32](Rendering.VertexAttributeFormat.Float32.html) format. `RecalculateTangents` adds the attribute even if the Mesh doesn't have any vertices.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        Mesh mesh = GetComponent<MeshFilter>().mesh;
        mesh.RecalculateTangents();
    }
}
```





`RecalculateTangents` converts Mesh vertex position, normal and UV0 data to [VertexAttributeFormat.Float32](Rendering.VertexAttributeFormat.Float32.html) format, if the format is different.

If the Mesh does not have normals, texture coordinates or triangles, then the tangents are all set to a (1,0,0,1) vector.

Additional resources: [RecalculateNormals](Mesh.RecalculateNormals.html).


            
