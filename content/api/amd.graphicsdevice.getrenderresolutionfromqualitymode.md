This version of Unity is unsupported.



# [GraphicsDevice](AMD.GraphicsDevice.html).GetRenderResolutionFromQualityMode




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

public bool GetRenderResolutionFromQualityMode([AMD.FSR2Quality](AMD.FSR2Quality.html) qualityMode,
uint displayWidth,
uint displayHeight,
out uint renderWidth,
out uint renderHeight);






### Parameters



| Parameter | Description |
| --- | --- |
| qualityMode | The input quality mode. See FSR2Quality for the list of quality modes. |
| displayWidth | The input display resolution width. |
| displayHeight | The input display resolution height. |
| renderWidth | The output resolution width calculated. |
| renderHeight | The output resolution height calculated. |





### Returns



**bool**
        Returns true on success. False otherwise.





### Description



Queries the resolution configuration from a specified quality mode preset.


            
