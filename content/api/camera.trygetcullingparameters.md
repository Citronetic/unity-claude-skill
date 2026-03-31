This version of Unity is unsupported.



# [Camera](Camera.html).TryGetCullingParameters




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

public bool TryGetCullingParameters(out [Rendering.ScriptableCullingParameters](Rendering.ScriptableCullingParameters.html) cullingParameters);






## Declaration

public bool TryGetCullingParameters(bool stereoAware,
out [Rendering.ScriptableCullingParameters](Rendering.ScriptableCullingParameters.html) cullingParameters);






### Parameters



| Parameter | Description |
| --- | --- |
| cullingParameters | Resultant culling parameters. |
| stereoAware | Generate single-pass stereo aware culling parameters. |





### Returns



**bool**
        Flag indicating whether culling parameters are valid.





### Description



Get culling parameters for a camera.





Returns false if camera is invalid to render (empty viewport rectangle, invalid clip plane setup etc.).

Both left and right stereo eyes are considered in the generated culling parameters when `stereoAware` is `true` and single-pass stereo is enabled.

Additional resources: [ScriptableRenderContext.Cull](Rendering.ScriptableRenderContext.Cull.html), [ScriptableCullingParameters](Rendering.ScriptableCullingParameters.html), [ScriptableRenderContext.SetupCameraProperties](Rendering.ScriptableRenderContext.SetupCameraProperties.html), [ScriptableRenderContext.StartMultiEye](Rendering.ScriptableRenderContext.StartMultiEye.html), [ScriptableRenderContext.StopMultiEye](Rendering.ScriptableRenderContext.StopMultiEye.html), [ScriptableRenderContext.StereoEndRender](Rendering.ScriptableRenderContext.StereoEndRender.html).


            
