This version of Unity is unsupported.



# [EditorCameraUtils](Rendering.EditorCameraUtils.html).GetRenderersHiddenResultBits




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

public static void GetRenderersHiddenResultBits(ReadOnlySpan<int> rendererIDs,
Span<ulong> resultBits);






### Parameters



| Parameter | Description |
| --- | --- |
| rendererIDs | The span of renderer instance IDs to check. |
| resultBits | The span of visibility statuses the method returns. If a bit is set to one, the corresponding renderer in the rendererIDs parameter is not visible in the scene view. The length of the span must be (rendererIDs.Length + 63) / 64. Otherwise an exception will be thrown. |





### Description



Gets the scene visibility status of renderers.





Refer to [SceneVisibility](../Manual/SceneVisibility.html) for more information about scene visibility.


            
