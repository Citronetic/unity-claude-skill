This version of Unity is unsupported.



# [Camera](Camera.html).OnRenderImage(RenderTexture,RenderTexture)




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














### Parameters



| Parameter | Description |
| --- | --- |
| source | A RenderTexture containing the source image. |
| destination | The RenderTexture to update with the modified image. |





### Description



[Event function](../Manual/event-functions.html) that Unity calls after a Camera has finished rendering, that allows you to modify the Camera's final image.





In the Built-in Render Pipeline, Unity calls `OnRenderImage` on MonoBehaviours that are attached to the same GameObject as an enabled [Camera](Camera.html) component, after the Camera finished rendering. You can use `OnRenderImage` to create a fullscreen post-processing effect. For a full description and code example, see [MonoBehaviour.OnRenderImage](MonoBehaviour.OnRenderImage.html).

`OnRenderImage` is not supported in the Scriptable Render Pipeline. To create custom fullscreen effects in the Universal Render Pipeline (URP), use the [ScriptableRenderPass](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@latest/index.html?subfolder=/api/UnityEngine.Rendering.Universal.ScriptableRenderPass.html) API. To create custom fullscreen effects in the High Definition Render Pipeline (HDRP), use a [Fullscreen Custom Pass](https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@latest/index.html?subfolder=/manual/Custom-Pass.html).


            
