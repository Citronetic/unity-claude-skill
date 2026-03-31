This version of Unity is unsupported.



# [Material](Material.html).SetBuffer




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

public void SetBuffer(string name,
[ComputeBuffer](ComputeBuffer.html) value);






## Declaration

public void SetBuffer(int nameID,
[ComputeBuffer](ComputeBuffer.html) value);






## Declaration

public void SetBuffer(string name,
[GraphicsBuffer](GraphicsBuffer.html) value);






## Declaration

public void SetBuffer(int nameID,
[GraphicsBuffer](GraphicsBuffer.html) value);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | Property name ID, use Shader.PropertyToID to get it. |
| name | Property name. |
| value | The ComputeBuffer or GraphicsBuffer value to set. |





### Description



Sets a named buffer value.





Additional resources: [ComputeShader](ComputeShader.html), [ComputeBuffer](ComputeBuffer.html), [GraphicsBuffer](GraphicsBuffer.html).


            
