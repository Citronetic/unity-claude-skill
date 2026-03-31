This version of Unity is unsupported.



# [ScriptableRenderContext](Rendering.ScriptableRenderContext.html).SetupCameraProperties




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

public void SetupCameraProperties([Camera](Camera.html) camera,
bool stereoSetup);






## Declaration

public void SetupCameraProperties([Camera](Camera.html) camera,
bool stereoSetup,
int eye);






### Parameters



| Parameter | Description |
| --- | --- |
| camera | Camera to setup shader variables for. |
| stereoSetup | Set up the stereo shader variables and state. |
| eye | The current eye to be rendered. |





### Description



Schedules the setup of Camera specific global Shader variables.





This function sets up view, projection and clipping planes global shader variables.

Additionally, if `stereoSetup` is set to true, and single-pass stereo is enabled, stereo-specific shader variables and state are configured.

Additional resources: [StartMultiEye](Rendering.ScriptableRenderContext.StartMultiEye.html), [StopMultiEye](Rendering.ScriptableRenderContext.StopMultiEye.html), [StereoEndRender](Rendering.ScriptableRenderContext.StereoEndRender.html), CullingResults.GetCullingParameters.


            
