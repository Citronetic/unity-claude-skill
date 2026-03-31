This version of Unity is unsupported.



# [VFXEventAttribute](VFX.VFXEventAttribute.html).GetFloat




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

public float GetFloat(int nameID);






## Declaration

public float GetFloat(string name);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | The ID of the property. This is the same ID that Shader.PropertyToID returns. |
| name | The name of the property. |





### Returns



**float**
        The value for the float you specify. Returns `0.0f` if [VFXEventAttribute.HasFloat](VFX.VFXEventAttribute.HasFloat.html) returns `false`.





### Description



Use this method to get the value of a named float property from the VFXEventAttribute.


            
