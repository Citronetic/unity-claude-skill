This version of Unity is unsupported.



# [Mesh](Mesh.html).SetVertexBufferParams




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

public void SetVertexBufferParams(int vertexCount,
params VertexAttributeDescriptor[] attributes);






## Declaration

public void SetVertexBufferParams(int vertexCount,
NativeArray<VertexAttributeDescriptor> attributes);






### Parameters



| Parameter | Description |
| --- | --- |
| vertexCount | The number of vertices in the Mesh. |
| attributes | Layout of the vertex data -- which attributes are present, their data types and so on. |





### Description



Sets the vertex buffer size and layout.





Note: This method is designed for advanced users aiming for maximum performance because it operates on the underlying mesh data structures that primarily work on raw index buffers, vertex buffers and mesh subset data. Using this method, Unity performs very little data validation, so you must ensure your data is valid.

                In particular, you must ensure that the index buffer does not contain out-of-bounds indices, and that the SubMesh index range and bounds are
updated via [SetSubMesh](Mesh.SetSubMesh.html).

For information about the difference between the simpler and more advanced methods of assigning data to a Mesh from script, see the notes on the [Mesh](Mesh.html) page.

For details on how to specify a mesh attribute layout, see [VertexAttributeDescriptor](Rendering.VertexAttributeDescriptor.html).


              


```
using UnityEngine;
using UnityEngine.Rendering;public class Example : MonoBehaviour
{
    void Start()
    {
        var mesh = new Mesh();
        // specify vertex layout with:
        // - floating point positions,
        // - half-precision (FP16) normals with two components,
        // - low precision (UNorm8) tangents
        var layout = new[]
        {
            new VertexAttributeDescriptor(VertexAttribute.Position, VertexAttributeFormat.Float32, 3),
            new VertexAttributeDescriptor(VertexAttribute.Normal, VertexAttributeFormat.Float16, 2),
            new VertexAttributeDescriptor(VertexAttribute.Tangent, VertexAttributeFormat.UNorm8, 4),
        };
        var vertexCount = 10;
        mesh.SetVertexBufferParams(vertexCount, layout);        // ...later on SetVertexBufferData would be used to set the actual vertex data
    }
}
```





If the vertex buffer size exceeds the maximum buffer size that the device supports, the method raises an exception. For more information, see [SystemInfo.maxGraphicsBufferSize](SystemInfo-maxGraphicsBufferSize.html).

Additional resources: [SetVertexBufferData](Mesh.SetVertexBufferData.html), [VertexAttributeDescriptor](Rendering.VertexAttributeDescriptor.html), [GetVertexAttributes](Mesh.GetVertexAttributes.html).


            
