This version of Unity is unsupported.



# [Shader](Shader.html).SetGlobalConstantBuffer




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




                [Switch to Manual](../Manual/class-Shader.html)










## Declaration

public static void SetGlobalConstantBuffer(string name,
[ComputeBuffer](ComputeBuffer.html) value,
int offset,
int size);






## Declaration

public static void SetGlobalConstantBuffer(int nameID,
[ComputeBuffer](ComputeBuffer.html) value,
int offset,
int size);






## Declaration

public static void SetGlobalConstantBuffer(string name,
[GraphicsBuffer](GraphicsBuffer.html) value,
int offset,
int size);






## Declaration

public static void SetGlobalConstantBuffer(int nameID,
[GraphicsBuffer](GraphicsBuffer.html) value,
int offset,
int size);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | The name ID of the constant buffer retrieved by Shader.PropertyToID. |
| name | The name of the constant buffer to override. |
| value | The buffer to override the constant buffer values with, or null to remove binding. |
| offset | Offset in bytes from the beginning of the buffer to bind. Must be a multiple of SystemInfo.constantBufferOffsetAlignment, or 0 if that value is 0. |
| size | The number of bytes to bind. |





### Description



Sets a [ComputeBuffer](ComputeBuffer.html) or [GraphicsBuffer](GraphicsBuffer.html) as a named constant buffer for all shader types.





See [Material.SetConstantBuffer](Material.SetConstantBuffer.html) for usage. If a constant buffer is bound both globally and per-material, the per-material buffer is used. However, if a constant buffer is bound globally, it overrides all shader parameters in all materials that reside in any constant buffer with the given name. Use this function with special caution, especially when you're using constant buffer names that are commonly used, as it may have unintended effects.


            
