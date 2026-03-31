This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).SetRandomWriteTarget




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















## Declaration

public void SetRandomWriteTarget(int index,
[Rendering.RenderTargetIdentifier](Rendering.RenderTargetIdentifier.html) rt);






## Declaration

public void SetRandomWriteTarget(int index,
[ComputeBuffer](ComputeBuffer.html) buffer,
bool preserveCounterValue);






## Declaration

public void SetRandomWriteTarget(int index,
[ComputeBuffer](ComputeBuffer.html) buffer);






## Declaration

public void SetRandomWriteTarget(int index,
[GraphicsBuffer](GraphicsBuffer.html) buffer,
bool preserveCounterValue);






## Declaration

public void SetRandomWriteTarget(int index,
[GraphicsBuffer](GraphicsBuffer.html) buffer);






### Parameters



| Parameter | Description |
| --- | --- |
| index | Index of the random write target in the shader. |
| buffer | Buffer to set as the write target. |
| preserveCounterValue | Whether to leave the append/consume counter value unchanged. |
| rt | RenderTargetIdentifier to set as the write target. |





### Description



Set random write target for [Shader Model 4.5](../Manual/SL-ShaderCompileTargets.html) level pixel shaders.





This is the CommandBuffer equivalent of [Graphics.SetRandomWriteTarget](Graphics.SetRandomWriteTarget.html). The same limitations and exceptions apply to this call as to [Graphics.SetRandomWriteTarget](Graphics.SetRandomWriteTarget.html).


            
