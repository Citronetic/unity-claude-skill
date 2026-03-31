This version of Unity is unsupported.



# [Mesh](Mesh.html).GetVertexAttributeOffset




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

public int GetVertexAttributeOffset([Rendering.VertexAttribute](Rendering.VertexAttribute.html) attr);






### Parameters



| Parameter | Description |
| --- | --- |
| attr | The vertex data attribute to check for. |





### Returns



**int**
        The byte offset within a atream of the data attribute, or -1 if it is not present.





### Description



Get offset within a vertex buffer stream of a specific vertex data attribute on this Mesh.





Meshes usually use a single vertex buffer stream, but it is possible to set up a vertex layout where attributes
use different vertex buffers (see [SetVertexBufferParams](Mesh.SetVertexBufferParams.html)). When you use such a layout, use this function to query where a given attribute is located in a stream.

Note that this function returns the byte offset within a stream, without specifying which stream. To identify the stream that contains a given attribute, use [GetVertexAttributeStream](Mesh.GetVertexAttributeStream.html).


              


```
using UnityEngine;
using UnityEngine.Rendering;public class ExampleScript : MonoBehaviour
{
    void Start()
    {
        // Create a Mesh with custom vertex data layout:
        // position and normal go into stream 0,
        // color goes into stream 1.
        var mesh = new Mesh();
        mesh.SetVertexBufferParams(10,
            new VertexAttributeDescriptor(VertexAttribute.Position, VertexAttributeFormat.Float32, 3, stream:0),
            new VertexAttributeDescriptor(VertexAttribute.Normal, VertexAttributeFormat.Float32, 3, stream:0),
            new VertexAttributeDescriptor(VertexAttribute.Color, VertexAttributeFormat.UNorm8, 4, stream:1));        // Prints offsets: 0, 12, 0
        Debug.Log($"Position offset {mesh.GetVertexAttributeOffset(VertexAttribute.Position)}");
        Debug.Log($"Normal offset {mesh.GetVertexAttributeOffset(VertexAttribute.Normal)}");
        Debug.Log($"Color offset {mesh.GetVertexAttributeOffset(VertexAttribute.Color)}");        // Cleanup
        Object.DestroyImmediate(mesh);
    }
}
```





Additional resources: [VertexAttribute](Rendering.VertexAttribute.html), [HasVertexAttribute](Mesh.HasVertexAttribute.html), [GetVertexAttributeStream](Mesh.GetVertexAttributeStream.html), [vertexBufferCount](Mesh-vertexBufferCount.html), [GetVertexBufferStride](Mesh.GetVertexBufferStride.html).


            
