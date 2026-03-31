This version of Unity is unsupported.



# [MaterialPropertyBlock](MaterialPropertyBlock.html).SetBuffer




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
| name | The name of the property. |
| nameID | The name ID of the property retrieved by Shader.PropertyToID. |
| value | The ComputeBuffer or GraphicsBuffer to set. |





### Description



Set a buffer property.





Adds a property to the block. If a buffer property with the given name already exists, the old value is replaced.

Additional resources: [SetColor](MaterialPropertyBlock.SetColor.html), [SetVector](MaterialPropertyBlock.SetVector.html), [SetFloat](MaterialPropertyBlock.SetFloat.html), [SetTexture](MaterialPropertyBlock.SetTexture.html).


            
