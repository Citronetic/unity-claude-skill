This version of Unity is unsupported.



# [Material](Material.html).HasVector




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
        Returns true if the ShaderLab file assigned to the Material has this property.





### Description



Checks if the ShaderLab file assigned to the Material has a Vector property with the given name. This also works with the Vector Array property.





Additional resources: [MaterialPropertyBlock](MaterialPropertyBlock.html), [HasProperty](Material.HasProperty.html), [HasFloat](Material.HasFloat.html), [HasTexture](Material.HasTexture.html), [HasBuffer](Material.HasBuffer.html), [HasColor](Material.HasColor.html), [HasConstantBuffer](Material.HasConstantBuffer.html), [HasInt](Material.HasInt.html), [HasMatrix](Material.HasMatrix.html).


            
