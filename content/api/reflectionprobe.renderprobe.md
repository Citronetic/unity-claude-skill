This version of Unity is unsupported.



# [ReflectionProbe](ReflectionProbe.html).RenderProbe




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

public int RenderProbe([RenderTexture](RenderTexture.html) targetTexture = null);






### Parameters



| Parameter | Description |
| --- | --- |
| targetTexture | Target RenderTexture in which rendering should be done. Specifying null will update the probe's default texture. |





### Returns



**int**

          An integer representing a RenderID which can subsequently be used to check if the probe has finished rendering while rendering in time-slice mode.

          Additional resources: [IsFinishedRendering](ReflectionProbe.IsFinishedRendering.html)
          Additional resources: [timeSlicingMode](ReflectionProbe-timeSlicingMode.html)





### Description



Refreshes the probe's cubemap.


            
