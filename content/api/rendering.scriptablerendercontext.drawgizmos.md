This version of Unity is unsupported.



# [ScriptableRenderContext](Rendering.ScriptableRenderContext.html).DrawGizmos




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

public void DrawGizmos([Camera](Camera.html) camera,
[Rendering.GizmoSubset](Rendering.GizmoSubset.html) gizmoSubset);






### Parameters



| Parameter | Description |
| --- | --- |
| camera | The camera of the current view. |
| gizmoSubset | Set to GizmoSubset.PreImageEffects to draw Gizmos that should be affected by postprocessing, or GizmoSubset.PostImageEffects to draw Gizmos that should not be affected by postprocessing. See also: GizmoSubset. |





### Description



Schedules the drawing of a subset of Gizmos (before or after post-processing) for the given Camera.


            
