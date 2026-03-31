This version of Unity is unsupported.



# [EditorCameraUtils](Rendering.EditorCameraUtils.html).GetRenderersFilteringResults




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

public static void GetRenderersFilteringResults(ReadOnlySpan<int> rendererIDs,
Span<bool> results);






### Parameters



| Parameter | Description |
| --- | --- |
| rendererIDs | Span containing Renderers' instance IDs. |
| results | Output Span. If an element is true, it indicates that the Renderer element of the input aray should be rendered under the current SceneView scene filtering settings. |





### Description



Returns the SceneView scene filtering results for a specified NativeArray of Renderer instance IDs.





This function retrieves the [SceneView](SceneView.html) scene filtering results for a group of [Renderer](Renderer.html)s.


            
