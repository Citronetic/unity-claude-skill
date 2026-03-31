This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).DrawOcclusionMesh




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

public void DrawOcclusionMesh([RectInt](RectInt.html) normalizedCamViewport);






### Parameters



| Parameter | Description |
| --- | --- |
| normalizedCamViewport | The viewport of the camera currently being rendered. |





### Description



Adds a command onto the commandbuffer to draw the VR Device's occlusion mesh to the current render target.





Commands in the rendering command buffer are lower-level graphics operations that can be sequenced in scripting. This command in particular is used to render an occlusion mesh provided by the active VR Device.
Call this method before other rendering methods to prevent rendering of objects that are outside the VR device's visible regions.

Additional resources: [XRSettings.useOcclusionMesh](XR.XRSettings-useOcclusionMesh.html) and [XRSettings.occlusionMaskScale](XR.XRSettings-occlusionMaskScale.html)


            
