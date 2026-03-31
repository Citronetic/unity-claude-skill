This version of Unity is unsupported.



# [Material](Material.html).HasBuffer




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

public bool HasBuffer(string name);






## Declaration

public bool HasBuffer(int nameID);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The name of the property. |
| nameID | The name ID of the property. Use Shader.PropertyToID to get this ID. |





### Returns



**bool**
        Returns true if the ShaderLab file assigned to the Material has this property.





### Description



Checks if the ShaderLab file assigned to the Material has a ComputeBuffer property with the given name.





Additional resources: [MaterialPropertyBlock](MaterialPropertyBlock.html), [HasProperty](Material.HasProperty.html), [HasFloat](Material.HasFloat.html), [HasTexture](Material.HasTexture.html), [HasColor](Material.HasColor.html), [HasConstantBuffer](Material.HasConstantBuffer.html), [HasInt](Material.HasInt.html), [HasMatrix](Material.HasMatrix.html), [HasVector](Material.HasVector.html).


            
