This version of Unity is unsupported.



# [VFXExpressionValues](VFX.VFXExpressionValues.html).GetMatrix4x4




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
| nameID | The name ID of the property retrieved by Shader.PropertyToID. |
| name | The name of the property. |





### Description



Returns a Matrix4 that corresponds to the bound named expression. If this entry is not available, or the type doesn't match, an exception is thrown.


            
