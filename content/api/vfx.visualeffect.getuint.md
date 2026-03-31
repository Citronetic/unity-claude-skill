This version of Unity is unsupported.



# [VisualEffect](VFX.VisualEffect.html).GetUInt




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

public uint GetUInt(int nameID);






## Declaration

public uint GetUInt(string name);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | The ID of the property. This is the same ID that Shader.PropertyToID returns. |
| name | The name of the property. |





### Returns



**uint**
        The value for the unsigned integer you specify. Returns `0` if [VisualEffect.HasUInt](VFX.VisualEffect.HasUInt.html) returns `false`.





### Description



Gets the value of a named unsigned integer property.


            
