This version of Unity is unsupported.



# [GraphicsDevice](NVIDIA.GraphicsDevice.html).GetOptimalSettings




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

public bool GetOptimalSettings(uint targetWidth,
uint targetHeight,
[NVIDIA.DLSSQuality](NVIDIA.DLSSQuality.html) quality,
out [NVIDIA.OptimalDLSSSettingsData](NVIDIA.OptimalDLSSSettingsData.html) optimalSettings);






### Parameters



| Parameter | Description |
| --- | --- |
| targetWidth | Target width in pixels. |
| targetHeight | Target height in pixels. |
| quality | Current quality setting. |
| optimalSettings | Output structure, which will be filled with the recommended optimal settings data. |





### Returns



**bool**
        True if the function has successfully populated optimalSettings. False if it failed.





### Description



Returns a structure containing the optimal settings for a specific target resolution and quality.


            
