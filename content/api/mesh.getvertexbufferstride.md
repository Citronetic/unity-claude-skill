This version of Unity is unsupported.



# [Mesh](Mesh.html).GetVertexBufferStride




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

public int GetVertexBufferStride(int stream);






### Parameters



| Parameter | Description |
| --- | --- |
| stream | Vertex data stream index to check for. |





### Returns



**int**
        Vertex data size in bytes in this stream, or zero if the stream is not present.





### Description



Get vertex buffer stream stride in bytes.





Meshes usually use a single vertex buffer stream. But it is possible to setup a vertex layout where some attributes
use different vertex buffers (see [SetVertexBufferParams](Mesh.SetVertexBufferParams.html), [VertexAttributeDescriptor](Rendering.VertexAttributeDescriptor.html)). You can use this
function to query vertex data size in bytes within the given stream.


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
            new VertexAttributeDescriptor(VertexAttribute.Color, VertexAttributeFormat.UNorm8, 4, stream:1));        // Prints 2 (two vertex streams)
        Debug.Log($"Vertex stream count: {mesh.vertexBufferCount}");
        // Next two lines print: 24 (12 bytes position + 12 bytes normal), 4 (4 bytes color)
        Debug.Log($"Steam 0 stride {mesh.GetVertexBufferStride(0)}");
        Debug.Log($"Steam 1 stride {mesh.GetVertexBufferStride(1)}");        // Cleanup
        Object.DestroyImmediate(mesh);
    }
}
```





Additional resources: [vertexBufferCount](Mesh-vertexBufferCount.html), [GetVertexAttributeOffset](Mesh.GetVertexAttributeOffset.html), [SetVertexBufferParams](Mesh.SetVertexBufferParams.html).


            
