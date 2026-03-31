This version of Unity is unsupported.



# [Mesh](Mesh.html).GetIndexBuffer




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

public [GraphicsBuffer](GraphicsBuffer.html) GetIndexBuffer();






### Returns



**GraphicsBuffer**
        The mesh index buffer as a [GraphicsBuffer](GraphicsBuffer.html).





### Description



Retrieves a [GraphicsBuffer](GraphicsBuffer.html) to the GPU index buffer.





Most of the `Mesh` methods work on a CPU copy of the mesh data, which Unity then uploads to the GPU. For
example, [SetIndexBufferData](Mesh.SetIndexBufferData.html) modifies CPU copy of the data, and [UploadMeshData](Mesh.UploadMeshData.html) sends the CPU copy of the data to the GPU.

You can access the GPU copy of the index buffer directly using `GetIndexBuffer`. This allows more direct manipulation of the mesh index data on the GPU, which can potentially improve performance. However, any modifications that you make to the index data this way will not be reflected in the CPU copy of the mesh data.

You can also use this method to make the index buffer available for reading or writing in a [ComputeShader](ComputeShader.html). To do that, first request an appropriate buffer binding target via [indexBufferTarget](Mesh-indexBufferTarget.html), then get the mesh data using `GetIndexBuffer`, and then set it up as a parameter for your shaders using ComputeBuffer.SetBuffer, [Material.SetBuffer](Material.SetBuffer.html) and similar methods.

If you modify the CPU copy of the data, this can cause the GPU index buffer to be re-created; in that case, you must call `GetIndexBuffer` again.


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    public Mesh mesh;
    public ComputeShader computeShader;
    void Start()
    {
        // Mark the index buffer as needing "Raw"
        // (ByteAddressBuffer, RWByteAddressBuffer in HLSL shaders)
        // access.
        mesh.indexBufferTarget |= GraphicsBuffer.Target.Raw;
        // Get the index buffer of the Mesh, and set it up
        // as a buffer parameter to a compute shader.
        var indexBuffer = mesh.GetIndexBuffer();
        computeShader.SetBuffer(0, "MeshIndexBuffer", indexBuffer);
        indexBuffer.Dispose();
    }
}
```





Additional resources: [GetVertexBuffer](Mesh.GetVertexBuffer.html), [indexBufferTarget](Mesh-indexBufferTarget.html).


            
