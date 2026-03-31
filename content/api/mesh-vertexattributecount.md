This version of Unity is unsupported.



# [Mesh](Mesh.html).vertexAttributeCount




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







                    public int vertexAttributeCount;






### Description



Returns the number of vertex attributes that the mesh has. (Read Only)





This property returns the number of active vertex attributes (see [VertexAttributeDescriptor](Rendering.VertexAttributeDescriptor.html)). Together with
[GetVertexAttribute](Mesh.GetVertexAttribute.html) it can be used to query information about vertex attributes that are present in the mesh,
without needing any managed allocations.


              


```
using UnityEngine;
using UnityEngine.Rendering;public class ExampleScript : MonoBehaviour
{
    void Start()
    {
        // Create a Mesh with custom vertex data layout
        var mesh = new Mesh();
        mesh.SetVertexBufferParams(10,
            new VertexAttributeDescriptor(VertexAttribute.Position, VertexAttributeFormat.Float32, 3),
            new VertexAttributeDescriptor(VertexAttribute.Normal, VertexAttributeFormat.Float32, 3),
            new VertexAttributeDescriptor(VertexAttribute.Color, VertexAttributeFormat.UNorm8, 4));        // Prints 3 (three attributes)
        Debug.Log($"Vertex stream count: {mesh.vertexAttributeCount}");        // Cleanup
        Object.DestroyImmediate(mesh);
    }
}
```





Additional resources: [GetVertexAttribute](Mesh.GetVertexAttribute.html), [GetVertexAttributes](Mesh.GetVertexAttributes.html), [VertexAttributeDescriptor](Rendering.VertexAttributeDescriptor.html).


            
