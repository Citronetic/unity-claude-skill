This version of Unity is unsupported.



# [Camera](Camera.html).stereoActiveEye




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







                    public [Camera.MonoOrStereoscopicEye](Camera.MonoOrStereoscopicEye.html) stereoActiveEye;






### Description



Returns the eye that is currently rendering.
If called when stereo is not enabled it will return [Camera.MonoOrStereoscopicEye.Mono](Camera.MonoOrStereoscopicEye.Mono.html).

If called during a camera rendering callback such as [OnRenderImage](Camera.OnRenderImage.html) it will return the currently rendering eye.

If called outside of a rendering callback and stereo is enabled, it will return the default eye which is [Camera.MonoOrStereoscopicEye.Left](Camera.MonoOrStereoscopicEye.Left.html).


            
