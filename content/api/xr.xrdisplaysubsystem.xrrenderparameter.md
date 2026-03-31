This version of Unity is unsupported.



# XRRenderParameter





struct in
          UnityEngine.XR



/



Implemented in:[UnityEngine.XRModule](UnityEngine.XRModule.html)


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



A single viewpoint that must be rendered by the render pipeline.  Contains a target viewport and texture array slice within a corresponding [renderTarget](XR.XRDisplaySubsystem.XRRenderPass-renderTarget.html).





### Properties



| Property | Description |
| --- | --- |
| isPreviousViewValid | Determines whether XRDisplaySubsystem.XRRenderParameter.previousView is valid for use in a frame. |
| occlusionMesh | Represents the area in screen-space that is not visible on the XR Display. |
| previousView | Previous frame view matrix for use in motion vector calculation. Use XRDisplaySubsystem.XRRenderParameter.isPreviousViewValid to determine if previous view is valid for use. When late latching is enabled, previous view is also adjusted for late latching. |
| projection | The projection matrix that the render pipeline should use to render to the renderTarget. |
| textureArraySlice | The slice of the output texture array that the render pipeline should render to. |
| view | World transform that the render pipeline should use to render to the renderTarget. |
| viewport | Selects the viewport of the output texture renderTarget. |


            
