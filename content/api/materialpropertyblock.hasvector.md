This version of Unity is unsupported.



# [MaterialPropertyBlock](MaterialPropertyBlock.html).HasVector




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

public bool HasVector(string name);






## Declaration

public bool HasVector(int nameID);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The name of the property. |
| nameID | The name ID of the property. Use Shader.PropertyToID to get this ID. |





### Returns



**bool**
        Returns true if [MaterialPropertyBlock](MaterialPropertyBlock.html) has this property.





### Description



Checks if [MaterialPropertyBlock](MaterialPropertyBlock.html) has the Vector property with the given name or name ID. This also works with the Vector Array property. To set the property, use [SetVector](MaterialPropertyBlock.SetVector.html).





Additional resources: [MaterialPropertyBlock](MaterialPropertyBlock.html), [HasProperty](MaterialPropertyBlock.HasProperty.html), [HasFloat](MaterialPropertyBlock.HasFloat.html), [HasTexture](MaterialPropertyBlock.HasTexture.html), [HasBuffer](MaterialPropertyBlock.HasBuffer.html), [HasColor](MaterialPropertyBlock.HasColor.html), [HasConstantBuffer](MaterialPropertyBlock.HasConstantBuffer.html), [HasInt](MaterialPropertyBlock.HasInt.html), [HasMatrix](MaterialPropertyBlock.HasMatrix.html).


            
