This version of Unity is unsupported.



# [RenderPipeline](Rendering.RenderPipeline.html).IsPreviewSupported




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

protected bool IsPreviewSupported([Camera](Camera.html) camera,
out string reason);






### Parameters



| Parameter | Description |
| --- | --- |
| camera | The camera to check if it is compatible with preview. |
| reason | The reason why it is not compatible. This message will be displayed instead of the preview in the Preview widget in the scene. |





### Returns



**bool**
        If false, the preview is forbidden for this camera.





### Description



Allow to specify if a camera can be previewed or not.





Preview are done with the SceneView's preview widget. When selecting a camera to preview, this method will be called to determine if the camera is previewable or not.
The default implementation of this method consider every camera is previewable, but it may not be the case for the custom RenderPipeline you write on your own. If it is the case, override this method.


            
