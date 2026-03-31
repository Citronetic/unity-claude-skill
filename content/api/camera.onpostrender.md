This version of Unity is unsupported.



# [Camera](Camera.html).OnPostRender()




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














### Description



[Event function](../Manual/event-functions.html) that Unity calls after a Camera renders the scene.





In the Built-in Render Pipeline, Unity calls `OnPostRender` on MonoBehaviours that are attached to the same GameObject as an enabled Camera component, just after that Camera renders the scene. For a full description and code example, see [MonoBehaviour.OnPostRender](MonoBehaviour.OnPostRender.html).

For similar functionality that does not require the script to be on the same GameObject as a Camera component, see [Camera.onPostRender](Camera-onPostRender.html).

If you're using a Scriptable Render Pipeline, for example the Universal Render Pipeline, use [RenderPipelineManager](Rendering.RenderPipelineManager.html) instead.


            
