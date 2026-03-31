This version of Unity is unsupported.



# [XRDisplaySubsystem](XR.XRDisplaySubsystem.html).ScaledTextureWidth




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

public int ScaledTextureWidth([RenderTexture](RenderTexture.html) renderTexture);






### Parameters



| Parameter | Description |
| --- | --- |
| renderTexture | A scalable XR eye texture. |





### Returns



**int**
        The width after dynamic scaling. If the texture was not created with both the [DynamicallyScalable](RenderTextureCreationFlags.DynamicallyScalable.html) and [EyeTexture](RenderTextureCreationFlags.EyeTexture.html)  flags, or dynamic resolution is not enabled, the original width is returned.





### Description



Provides the current, scaled width of a render texture.





Render textures created with both the [DynamicallyScalable](RenderTextureCreationFlags.DynamicallyScalable.html) and [EyeTexture](RenderTextureCreationFlags.EyeTexture.html) flags are subject to scaling when dynamic resolution is active. This function returns the effective, scaled width for the current frame.

If you pass in a texture that is not affected by dynamic resolution, this method returns the original width.

The scaled width can be useful when you need to know the exact size of an eye texture when XR dynamic resolution is enabled.
For example, you might need the size for post-processing effects in custom shaders that use screen-space texture coordinates, to program custom XR render passes, or to create custom render pipelines.


            
