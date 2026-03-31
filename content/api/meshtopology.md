This version of Unity is unsupported.



# MeshTopology





enumeration


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



Specifies how the indices in a mesh's index buffer are used to construct geometry.





Depending on the topology type, the combination of indices and vertices form shapes such as triangles, quads, lines, or points.

The most commonly used topology is [MeshTopology.Triangles](MeshTopology.Triangles.html), as most hardware is optimized to render triangles efficiently. In meshes with multiple sub-meshes, the topology can be individually set for each sub-mesh.

This enum is commonly used in scripts to define geometry or create procedural meshes.


              


```
// This example demonstrates how to create a mesh with two sub-meshes, each using a distinct topology.
Mesh mesh = new Mesh();
mesh.vertices = new Vector3[]
{
    new Vector3(0, 0, 0),
    new Vector3(1, 0, 0),
    new Vector3(0, 1, 0),
    new Vector3(1, 1, 0),
};
mesh.subMeshCount = 2;
mesh.SetIndices(new int[] { 0, 2, 1 }, MeshTopology.Triangles, 1);
mesh.SetIndices(new int[] { 0, 2, 3, 1, 0 }, MeshTopology.LineStrip, 0);
mesh.RecalculateNormals();
```





Additional resources:  [Mesh](Mesh.html), [SubMeshDescriptor](Rendering.SubMeshDescriptor.html), [Mesh.SetIndices](Mesh.SetIndices.html).





### Properties



| Property | Description |
| --- | --- |
| Triangles | Connects indices in groups of three to form triangular faces. |
| Quads | Connects indices in groups of four to form quadrilateral faces. |
| Lines | Connects pairs of indices to form individual line segments. |
| LineStrip | Connects indices consecutively to form a single continuous line. |
| Points | Interprets indices as individual points without forming connected geometry. |


            
