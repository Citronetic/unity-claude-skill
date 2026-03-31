This version of Unity is unsupported.



# [VFXEventAttribute](VFX.VFXEventAttribute.html).GetMatrix4x4




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

public [Matrix4x4](Matrix4x4.html) GetMatrix4x4(int nameID);






## Declaration

public [Matrix4x4](Matrix4x4.html) GetMatrix4x4(string name);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | The ID of the property. This is the same ID that Shader.PropertyToID returns. |
| name | The name of the property. |





### Returns



**Matrix4x4**
        The value for the Matrix4x4 you specify. Returns `Matrix4x4.identity` if [VFXEventAttribute.HasMatrix4x4](VFX.VFXEventAttribute.HasMatrix4x4.html) returns `false`.





### Description



Use this method to get the value of a named Matrix4x4 property from the VFXEventAttribute.


            
