This version of Unity is unsupported.



# [XRSettings.StereoRenderingMode](XR.XRSettings.StereoRenderingMode.html).SinglePassMultiview




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



















### Description



This is a OpenGL optimized version of the [XRSettings.StereoRenderingMode.SinglePassInstanced](XR.XRSettings.StereoRenderingMode.SinglePassInstanced.html) mode.





The scene graph is only traversed once and a single instanced draw call is issued for each render node, thus reducing the bandwidth required to render the scene.
Scene culling and shadow map rendering is shared between both eyes.
The main render target must be an array of render targets.
Special hardware support is required for this mode to run. Depending on their graphics capabilities, certain GPUs will run this stereo rendering mode and others will run [XRSettings.StereoRenderingMode.SinglePassInstanced](XR.XRSettings.StereoRenderingMode.SinglePassInstanced.html). GPUs that support neither of those modes will fall back to [XRSettings.StereoRenderingMode.MultiPass](XR.XRSettings.StereoRenderingMode.MultiPass.html).
See the [manual](../Manual/SinglePassStereoRendering.html) for how to get the most out of instanced rendering.
Additional resources: [XRSettings.stereoRenderingMode](XR.XRSettings-stereoRenderingMode.html).


            
