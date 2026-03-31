This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).SetGlobalConstantBuffer




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

public void SetGlobalConstantBuffer([ComputeBuffer](ComputeBuffer.html) buffer,
string name,
int offset,
int size);






## Declaration

public void SetGlobalConstantBuffer([ComputeBuffer](ComputeBuffer.html) buffer,
int nameID,
int offset,
int size);






## Declaration

public void SetGlobalConstantBuffer([GraphicsBuffer](GraphicsBuffer.html) buffer,
string name,
int offset,
int size);






## Declaration

public void SetGlobalConstantBuffer([GraphicsBuffer](GraphicsBuffer.html) buffer,
int nameID,
int offset,
int size);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | The name ID of the constant buffer retrieved by Shader.PropertyToID. |
| name | The name of the constant buffer to override. |
| buffer | The buffer to bind. |
| offset | Offset from the start of the buffer in bytes. |
| size | Size in bytes of the area to bind. |





### Description



Add a command to bind a global constant buffer.





See [Shader.SetGlobalConstantBuffer](Shader.SetGlobalConstantBuffer.html) for usage.


            
