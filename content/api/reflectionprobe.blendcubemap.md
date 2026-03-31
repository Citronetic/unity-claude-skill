This version of Unity is unsupported.



# [ReflectionProbe](ReflectionProbe.html).BlendCubemap




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




                [Switch to Manual](../Manual/class-ReflectionProbe.html)










## Declaration

public static bool BlendCubemap([Texture](Texture.html) src,
[Texture](Texture.html) dst,
float blend,
[RenderTexture](RenderTexture.html) target);






### Parameters



| Parameter | Description |
| --- | --- |
| src | Cubemap to blend from. |
| dst | Cubemap to blend to. |
| blend | Blend weight. |
| target | RenderTexture which will hold the result of the blend. |





### Returns



**bool**
        Returns trues if cubemaps were blended, false otherwise.





### Description



Utility method to blend 2 cubemaps into a target render texture.


            
