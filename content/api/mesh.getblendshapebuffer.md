This version of Unity is unsupported.



# [Mesh](Mesh.html).GetBlendShapeBuffer




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

public [GraphicsBuffer](GraphicsBuffer.html) GetBlendShapeBuffer([Rendering.BlendShapeBufferLayout](Rendering.BlendShapeBufferLayout.html) layout);






## Declaration

public [GraphicsBuffer](GraphicsBuffer.html) GetBlendShapeBuffer();






### Parameters



| Parameter | Description |
| --- | --- |
| layout | Which buffer to access. The default value is BlendShapeBufferLayout.PerShape. |





### Returns



**GraphicsBuffer**
        The blend shape vertex data as a [GraphicsBuffer](GraphicsBuffer.html).





### Description



Retrieves a [GraphicsBuffer](GraphicsBuffer.html) that provides direct read and write access to GPU blend shape vertex data.





The buffer that this function returns is called the blend shape buffer. It contains blend shape vertices, which the GPU uses to deform the mesh into blend shapes.

There are two blend shape buffers that you can access. They use different layout patterns, and contain slightly different data. For more information, see [BlendShapeBufferLayout.PerShape](Rendering.BlendShapeBufferLayout.PerShape.html) and [BlendShapeBufferLayout.PerVertex](Rendering.BlendShapeBufferLayout.PerVertex.html). Compute shader support is required to access this buffer.

The version of this function that takes no parameter is equivalent to calling it with [BlendShapeBufferLayout.PerShape](Rendering.BlendShapeBufferLayout.PerShape.html) as argument.

[Mesh.isReadable](Mesh-isReadable.html) does not need to be `true` to access this data.

After using this buffer, you should dispose of it.


              


```
using UnityEngine;
using UnityEngine.Rendering;public class Example : MonoBehaviour
{
    public Mesh mesh;
    public ComputeShader computeShader;    void Start()
    {
        // Fetch GraphicsBuffer with Blend Shape data, ordered per shape, from the mesh
        var perShapeBuffer = mesh.GetBlendShapeBuffer(BlendShapeBufferLayout.PerShape);        // Fetch GraphicsBuffer with Blend Shape data, ordered per vertex, from the mesh
        var perVertexBuffer = mesh.GetBlendShapeBuffer(BlendShapeBufferLayout.PerVertex);        // Set Blend Shape data buffers to a compute shader
        computeShader.SetBuffer(0, "PerShape_BlendShapeBuffer", perShapeBuffer);
        computeShader.SetBuffer(0, "PerVertex_BlendShapeBuffer", perVertexBuffer);        // Dispatch compute shader and access Blend Shapes on the GPU, both per vertex and per shape
        computeShader.Dispatch(0, 64, 1, 1);        // Dispose buffers to avoid leaking memory
        perShapeBuffer.Dispose();
        perVertexBuffer.Dispose();
    }
}
```





Additional resources: [Blend shapes](../Manual/AnatomyofaMesh.html#blend-shapes.html), [BlendShapeBufferLayout](Rendering.BlendShapeBufferLayout.html), [Mesh.GetBoneWeightBuffer](Mesh.GetBoneWeightBuffer.html).


            
