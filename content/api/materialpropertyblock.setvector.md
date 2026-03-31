This version of Unity is unsupported.



# [MaterialPropertyBlock](MaterialPropertyBlock.html).SetVector




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

public void SetVector(string name,
[Vector4](Vector4.html) value);






## Declaration

public void SetVector(int nameID,
[Vector4](Vector4.html) value);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The name of the property. |
| nameID | The name ID of the property retrieved by Shader.PropertyToID. |
| value | The Vector4 value to set. |





### Description



Set a vector property.





Adds a property to the block. If a vector property with the given name already exists, the old value is replaced. If the property is previously added using [SetColor](MaterialPropertyBlock.SetColor.html), the value is automatically converted to active color space as if ::SetColor is called.

Additional resources: [SetColor](MaterialPropertyBlock.SetColor.html), [SetMatrix](MaterialPropertyBlock.SetMatrix.html), [SetFloat](MaterialPropertyBlock.SetFloat.html), [SetTexture](MaterialPropertyBlock.SetTexture.html).


            
