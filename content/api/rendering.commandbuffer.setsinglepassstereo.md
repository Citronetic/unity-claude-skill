This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).SetSinglePassStereo




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

public void SetSinglePassStereo(floatPassStereoMode mode);






### Parameters



| Parameter | Description |
| --- | --- |
| mode | Single-pass stereo mode for the camera. |





### Description



Add a command to set single-pass stereo mode for the camera.





This property is only used when Virtual Reality is enabled. The values passed to mode are found in the [SinglePassStereoMode](Rendering.SinglePassStereoMode.html) enum. This can be paired with set shader keyword (i.e. UNITY_SINGLE_PASS_STEREO) to temporarily disable stereo rendering for fullscreen effects. Note: changing single-pass stereo mode can cause rendering artifacts when stereo is enabled.


            
