This version of Unity is unsupported.



# [Camera](Camera.html).ResetTransparencySortSettings




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




                [Switch to Manual](../Manual/class-Camera.html)










## Declaration

public void ResetTransparencySortSettings();






### Description



Resets this Camera's transparency sort settings to the default. Default transparency settings are taken from [GraphicsSettings](Rendering.GraphicsSettings.html) instead of directly from this Camera.





The rendering pipeline will, by default, take the transparency sort settings from [GraphicsSettings](Rendering.GraphicsSettings.html). This is very convenient and caters to most use cases. However, if you have the need to alter the settings per Camera, you may do so with the [Camera](Camera.html)'s APIs.

Once [Camera.transparencySortMode](Camera-transparencySortMode.html) or [Camera.transparencySortAxis](Camera-transparencySortAxis.html) are called from the script, the rendering pipeline ignores the settings in the [GraphicsSettings](Rendering.GraphicsSettings.html) and takes the settings directly from the Camera.

Calling this method causes the rendering pipeline to refer to the settings in [GraphicsSettings](Rendering.GraphicsSettings.html) instead of this Camera.

This works the same for SceneView Cameras as well.


            
