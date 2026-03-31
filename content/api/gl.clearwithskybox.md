This version of Unity is unsupported.



# [GL](GL.html).ClearWithSkybox




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

public static void ClearWithSkybox(bool clearDepth,
[Camera](Camera.html) camera);






### Parameters



| Parameter | Description |
| --- | --- |
| clearDepth | Should the depth buffer be cleared? |
| camera | Camera to get projection parameters and skybox from. |





### Description



Clear the current render buffer with camera's skybox.





This draws skybox into the screen or the active [RenderTexture](RenderTexture.html).
If the passed camera does not have custom [Skybox](Skybox.html) component,
the global skybox from [RenderSettings](RenderSettings.html) will be used.

Additional resources: [GL.Clear](GL.Clear.html).


            
