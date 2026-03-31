This version of Unity is unsupported.



# [XRSettings.StereoRenderingMode](XR.XRSettings.StereoRenderingMode.html).SinglePass




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



This is a faster rendering path for VR than [XRSettings.StereoRenderingMode.MultiPass](XR.XRSettings.StereoRenderingMode.MultiPass.html).





The speed boost is achieved by traversing the scene graph only once while issuing two draw calls for each render node.
The main render target must be a double wide render target.
Scene culling and shadow map rendering is shared between both eyes.

Additional resources: [XRSettings.stereoRenderingMode](XR.XRSettings-stereoRenderingMode.html).


            
