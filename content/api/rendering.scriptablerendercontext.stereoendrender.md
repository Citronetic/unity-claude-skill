This version of Unity is unsupported.



# [ScriptableRenderContext](Rendering.ScriptableRenderContext.html).StereoEndRender




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

public void StereoEndRender([Camera](Camera.html) camera);






## Declaration

public void StereoEndRender([Camera](Camera.html) camera,
int eye);






## Declaration

public void StereoEndRender([Camera](Camera.html) camera,
int eye,
bool isFinalPass);






### Parameters



| Parameter | Description |
| --- | --- |
| camera | Camera to indicate completion of stereo rendering. |
| eye | The current eye to be rendered. |





### Description



Schedule notification of completion of stereo rendering on a single frame.





Notify clients that stereo rendering has completed so they can begin any post-render work.

Additionally, this API will reset properties on the `camera` that had been affected by stereo rendering.

Additional resources: [SetupCameraProperties](Rendering.ScriptableRenderContext.SetupCameraProperties.html), [StartMultiEye](Rendering.ScriptableRenderContext.StartMultiEye.html), [StopMultiEye](Rendering.ScriptableRenderContext.StopMultiEye.html), [Camera.TryGetCullingParameters](Camera.TryGetCullingParameters.html).


            
