This version of Unity is unsupported.



# [Material](Material.html).SetConstantBuffer




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




                [Switch to Manual](../Manual/class-Material.html)










## Declaration

public void SetConstantBuffer(string name,
[ComputeBuffer](ComputeBuffer.html) value,
int offset,
int size);






## Declaration

public void SetConstantBuffer(int nameID,
[ComputeBuffer](ComputeBuffer.html) value,
int offset,
int size);






## Declaration

public void SetConstantBuffer(string name,
[GraphicsBuffer](GraphicsBuffer.html) value,
int offset,
int size);






## Declaration

public void SetConstantBuffer(int nameID,
[GraphicsBuffer](GraphicsBuffer.html) value,
int offset,
int size);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The name of the constant buffer to override. |
| value | The ComputeBuffer to override the constant buffer values with, or null to remove binding. |
| offset | Offset in bytes from the beginning of the buffer to bind. Must be a multiple of SystemInfo.constantBufferOffsetAlignment, or 0 if that value is 0. |
| size | The number of bytes to bind. |
| nameID | The shader property ID of the constant buffer to override. |





### Description



Sets a [ComputeBuffer](ComputeBuffer.html) or [GraphicsBuffer](GraphicsBuffer.html) as a named constant buffer for the material.





You can use this method to override all of the parameters in a shader constant buffer with the contents of a [ComputeBuffer](ComputeBuffer.html) or [GraphicsBuffer](GraphicsBuffer.html).

To use this method, the following must be true:



          - The [ComputeBuffer](ComputeBuffer.html) or [GraphicsBuffer](GraphicsBuffer.html) must have been created with a corresponding [ComputeBufferType.Constant](ComputeBufferType.Constant.html) or [GraphicsBuffer.Target.Constant](GraphicsBuffer.Target.Constant.html) flag.

          - All the shader variants for this Material must use the same constant buffer layout for the given constant buffer.

          - The data layout of the constant buffer must match exactly the data provided in the buffer.





The data layout of the constant buffer may be different depending on the graphics API. This means `SetConstantBuffer` might overwrite data or set variables to the wrong values. See [Writing shaders for different graphics APIs](../Manual/SL-PlatformDifferences.html) for more information.

After this function has been called with a non-null ComputeBuffer or GraphicsBuffer, you can no longer manually set the value of a variable inside the overridden constant buffer. Calls to [Material.SetFloat](Material.SetFloat.html) and similar where the given property name ID points to a variable inside the overridden constant buffer will have no effect.


            
