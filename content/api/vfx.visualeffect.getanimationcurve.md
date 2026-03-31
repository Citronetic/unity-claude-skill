This version of Unity is unsupported.



# [VisualEffect](VFX.VisualEffect.html).GetAnimationCurve




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

public [AnimationCurve](AnimationCurve.html) GetAnimationCurve(int nameID);






## Declaration

public [AnimationCurve](AnimationCurve.html) GetAnimationCurve(string name);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | The ID of the property. This is the same ID that Shader.PropertyToID returns. |
| name | The name of the property. |





### Returns



**AnimationCurve**
        The value for the Animation Curve you specify. Returns an empty Animation Curve if [VisualEffect.HasAnimationCurve](VFX.VisualEffect.HasAnimationCurve.html) returns `false`.





### Description



Gets the value of a named Animation Curve property.


            
