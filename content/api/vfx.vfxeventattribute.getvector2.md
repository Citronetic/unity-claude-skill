This version of Unity is unsupported.



# [VFXEventAttribute](VFX.VFXEventAttribute.html).GetVector2




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

public [Vector2](Vector2.html) GetVector2(int nameID);






## Declaration

public [Vector2](Vector2.html) GetVector2(string name);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | The ID of the property. This is the same ID that Shader.PropertyToID returns. |
| name | The name of the property. |





### Returns



**Vector2**
        The value for the Vector2 you specify. Returns `Vector2.zero` if [VFXEventAttribute.HasVector2](VFX.VFXEventAttribute.HasVector2.html) returns `false`.





### Description



Use this method to get the value of a named Vector2 property from the VFXEventAttribute.


            
