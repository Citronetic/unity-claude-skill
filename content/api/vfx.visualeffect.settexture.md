This version of Unity is unsupported.



# [VisualEffect](VFX.VisualEffect.html).SetTexture




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

public void SetTexture(int nameID,
[Texture](Texture.html) t);






## Declaration

public void SetTexture(string name,
[Texture](Texture.html) t);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | The ID of the property. This is the same ID that Shader.PropertyToID returns. |
| name | The name of the property. |
| t | The new texture value. |





### Description



Sets the value of a named texture property.





Automatically changes overridden state for this property to true.
If the provided texture dimension doesn't correspond to the expected dimension, this function can log an error. If that happens, this assignment is ignored.


            
