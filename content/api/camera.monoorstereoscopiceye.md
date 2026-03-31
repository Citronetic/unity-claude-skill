This version of Unity is unsupported.



# MonoOrStereoscopicEye





enumeration


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














### Description



A Camera eye corresponding to the left or right human eye for stereoscopic rendering, or neither for non-stereoscopic rendering.

A single Camera can render both left and right views in a single frame. Therefore, this enum describes which eye the Camera is currently rendering when returned by [Camera.stereoActiveEye](Camera-stereoActiveEye.html) during a rendering callback (such as [Camera.OnRenderImage](Camera.OnRenderImage.html)), or which eye to act on when passed into a function.

The default value is [Camera.MonoOrStereoscopicEye.Left](Camera.MonoOrStereoscopicEye.Left.html), so [Camera.MonoOrStereoscopicEye.Left](Camera.MonoOrStereoscopicEye.Left.html) may be returned by some methods or properties when called outside of rendering if stereoscopic rendering is enabled.





### Properties



| Property | Description |
| --- | --- |
| Left | Camera eye corresponding to stereoscopic rendering of the left eye. |
| Right | Camera eye corresponding to stereoscopic rendering of the right eye. |
| Mono | Camera eye corresponding to non-stereoscopic rendering. |


            
