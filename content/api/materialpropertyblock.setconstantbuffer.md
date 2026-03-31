This version of Unity is unsupported.



# [MaterialPropertyBlock](MaterialPropertyBlock.html).SetConstantBuffer




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
| value | The buffer to override the constant buffer values with. |
| offset | Offset in bytes from the beginning of the buffer to bind. Must be a multiple of SystemInfo.constantBufferOffsetAlignment, or 0 if that value is 0. |
| size | The number of bytes to bind. |
| nameID | The shader property ID of the constant buffer to override. |





### Description



Sets a [ComputeBuffer](ComputeBuffer.html) or [GraphicsBuffer](GraphicsBuffer.html) as a named constant buffer for the MaterialPropertyBlock.





Additional resources: [Material.SetConstantBuffer](Material.SetConstantBuffer.html).


            
