This version of Unity is unsupported.



# [MaterialPropertyBlock](MaterialPropertyBlock.html).GetMatrix




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

public [Matrix4x4](Matrix4x4.html) GetMatrix(string name);






## Declaration

public [Matrix4x4](Matrix4x4.html) GetMatrix(int nameID);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | The name ID of the property retrieved by Shader.PropertyToID. |
| name | The name of the property. |





### Description



Get a matrix from the property block.





Returns identity matrix if not found.


            
