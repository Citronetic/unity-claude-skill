This version of Unity is unsupported.



# [ComputeShader](ComputeShader.html).SetTextureFromGlobal




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




                [Switch to Manual](../Manual/class-ComputeShader.html)










## Declaration

public void SetTextureFromGlobal(int kernelIndex,
string name,
string globalTextureName);






## Declaration

public void SetTextureFromGlobal(int kernelIndex,
int nameID,
int globalTextureNameID);






### Parameters



| Parameter | Description |
| --- | --- |
| kernelIndex | For which kernel the texture is being set. See FindKernel. |
| nameID | Property name ID, use Shader.PropertyToID to get it. |
| name | Name of the buffer variable in shader code. |
| globalTextureName | Global texture property to assign to shader. |
| globalTextureNameID | Property name ID, use Shader.PropertyToID to get it. |





### Description



Set a texture parameter from a global texture property.





This function can either set a regular texture that is read in the
compute shader, or an output texture that is written into by the shader.
For an output texture, it has to be a [RenderTexture](RenderTexture.html) with random write
flag enabled, see [RenderTexture.enableRandomWrite](RenderTexture-enableRandomWrite.html).

Buffers and textures are set per-kernel. Use [FindKernel](ComputeShader.FindKernel.html) to find kernel index by function name.

Additional resources: [FindKernel](ComputeShader.FindKernel.html), [SetBuffer](ComputeShader.SetBuffer.html), [SetTexture](ComputeShader.SetTexture.html), [Shader.SetGlobalTexture](Shader.SetGlobalTexture.html).


              


```
// Assign the CameraMotionVectorsTexture global texture to a compute texture
using System;
using UnityEngine;public class SampleBehaviour : MonoBehaviour
{
    public int renderTargetWidth;
    public int renderTargetHeight;
    ComputeShader myComputeShader;    void ComputeUsingMotionVector()
    {
        int kKernelIndex = 0;        myComputeShader.SetTextureFromGlobal(kKernelIndex, "computeTexture", "_CameraMotionVectorsTexture");
        myComputeShader.Dispatch(kKernelIndex, renderTargetWidth, renderTargetHeight, 1);
    }
}
```


            
