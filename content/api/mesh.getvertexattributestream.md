This version of Unity is unsupported.



# [Mesh](Mesh.html).GetVertexAttributeStream




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

public int GetVertexAttributeStream([Rendering.VertexAttribute](Rendering.VertexAttribute.html) attr);






### Parameters



| Parameter | Description |
| --- | --- |
| attr | The vertex data attribute to check for. |





### Returns



**int**
        Stream index of the data attribute, or -1 if it is not present.





### Description



Gets the vertex buffer stream index of a specific vertex data attribute on this Mesh.





Meshes usually use a single vertex buffer stream, but it is possible to set up a vertex layout where attributes
use different vertex buffers (see [SetVertexBufferParams](Mesh.SetVertexBufferParams.html)). When you use such a layout, use this function to query which vertex buffer stream a given attribute is part of.

Note that this function returns the index of the stream, without specifying where the attribute is within the stream. To identify the location of a given attribute in the stream, use [GetVertexAttributeOffset](Mesh.GetVertexAttributeOffset.html).


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
            new VertexAttributeDescriptor(VertexAttribute.Color, VertexAttributeFormat.UNorm8, 4, stream:1));        // Prints stream indices: 0, 0, 1
        Debug.Log($"Position stream {mesh.GetVertexAttributeStream(VertexAttribute.Position)}");
        Debug.Log($"Normal stream {mesh.GetVertexAttributeStream(VertexAttribute.Normal)}");
        Debug.Log($"Color stream {mesh.GetVertexAttributeStream(VertexAttribute.Color)}");        // Cleanup
        Object.DestroyImmediate(mesh);
    }
}
```





Additional resources: [VertexAttribute](Rendering.VertexAttribute.html), [HasVertexAttribute](Mesh.HasVertexAttribute.html), [GetVertexAttributeOffset](Mesh.GetVertexAttributeOffset.html), [vertexBufferCount](Mesh-vertexBufferCount.html), [GetVertexBufferStride](Mesh.GetVertexBufferStride.html).


            
