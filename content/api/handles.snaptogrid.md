This version of Unity is unsupported.



# [Handles](Handles.html).SnapToGrid




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

public static void SnapToGrid(Transform[] transforms,
[SnapAxis](SnapAxis.html) axis);






## Declaration

public static void SnapToGrid(Vector3[] positions,
[SnapAxis](SnapAxis.html) axis);






### Parameters



| Parameter | Description |
| --- | --- |
| transforms | The transforms to snap. |
| positions | The positions to snap. |
| axis | The axes on which to apply snapping. |





### Description



Rounds each [Transform.position](Transform-position.html) or [Vector3](Vector3.html) to the closest multiple of [EditorSnapSettings.gridSize](EditorSnapSettings-gridSize.html).


            
