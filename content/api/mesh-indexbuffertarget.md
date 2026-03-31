This version of Unity is unsupported.



# [Mesh](Mesh.html).indexBufferTarget




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







                    public [GraphicsBuffer.Target](GraphicsBuffer.Target.html) indexBufferTarget;






### Description



The intended target usage of the Mesh GPU index buffer.





By default, Mesh index buffers have [GraphicsBuffer.Target.Index](GraphicsBuffer.Target.Index.html) usage target. If you want to access
the mesh index buffer from a compute shader, additional targets need to be requested, for example
[GraphicsBuffer.Target.Raw](GraphicsBuffer.Target.Raw.html).

When setting this property to a new value, Unity destroys the existing buffer, and creates a new buffer with the specified target. In order for the new buffer to be correctly populated with data, the mesh data must reside on the CPU. You can check the [Mesh.isReadable](Mesh-isReadable.html) property to determine whether the mesh data is accessible on the CPU.


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





Additional resources: [Target](GraphicsBuffer.Target.html), [GetIndexBuffer](Mesh.GetIndexBuffer.html), [vertexBufferTarget](Mesh-vertexBufferTarget.html).


            
