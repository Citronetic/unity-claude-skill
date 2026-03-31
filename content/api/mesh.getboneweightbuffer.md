This version of Unity is unsupported.



# [Mesh](Mesh.html).GetBoneWeightBuffer




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

public [GraphicsBuffer](GraphicsBuffer.html) GetBoneWeightBuffer([SkinWeights](SkinWeights.html) layout);






### Parameters



| Parameter | Description |
| --- | --- |
| layout | Which buffer to access, based on maximum bones per vertex. |





### Returns



**GraphicsBuffer**
        The bone weight data as a [GraphicsBuffer](GraphicsBuffer.html).





### Description



Retrieves a [GraphicsBuffer](GraphicsBuffer.html) that provides direct read and write access to GPU bone weight data.





The buffer that this function returns is called the bone weight buffer. It contains indices and weights to use for skinning.

To know which buffer the mesh is using, call [skinWeightBufferLayout](Mesh-skinWeightBufferLayout.html).

It is possible to access the buffer with a lower SkinWeigts setting, for instance a mesh with [SkinWeights.Unlimited](SkinWeights.Unlimited.html) can be accessed with [SkinWeights.FourBones](SkinWeights.FourBones.html) and [SkinWeights.TwoBones](SkinWeights.TwoBones.html). However, a mesh with [SkinWeights.FourBones](SkinWeights.FourBones.html) can not be accessed using [SkinWeights.Unlimited](SkinWeights.Unlimited.html).

[Mesh.isReadable](Mesh-isReadable.html) does not need to be `true` to access this data.

After using this buffer, you should dispose of it.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    public Mesh mesh;
    public ComputeShader computeShader;    void Start()
    {
        // Fetch GraphicsBuffer with Bone Weight data
        var boneWeightBuffer = mesh.GetBoneWeightBuffer(mesh.skinWeightBufferLayout);        // Set Bone Weight data to a compute shader
        computeShader.SetBuffer(0, "BoneWeightBuffer", boneWeightBuffer);        // Dispatch compute shader and access Bone Weight data on the GPU
        computeShader.Dispatch(0, 64, 1, 1);        // Dispose of GraphicsBuffer to avoid leaking memory
        boneWeightBuffer .Dispose();
    }}
```





Additional resources: Mesh.skinWeightsBufferLayout, [Mesh.GetBlendShapeBuffer](Mesh.GetBlendShapeBuffer.html)


            
