This version of Unity is unsupported.



# [ArcHandle](IMGUI.Controls.ArcHandle.html).DefaultAngleHandleDrawFunction




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

public static void DefaultAngleHandleDrawFunction(int controlID,
[Vector3](Vector3.html) position,
[Quaternion](Quaternion.html) rotation,
float size,
[EventType](EventType.html) eventType);






### Parameters



| Parameter | Description |
| --- | --- |
| controlID | The control ID for the handle. |
| position | The position of the handle in the space of Handles.matrix. |
| rotation | The rotation of the handle in the space of Handles.matrix. |
| size | The size of the handle in the space of Handles.matrix. Use HandleUtility.GetHandleSize if you want a constant screen-space size. |
| eventType | Event type for the handle to act upon. By design it handles EventType.Layout and EventType.Repaint events. |





### Description



A [CapFunction](Handles.CapFunction.html) that draws a line terminated with [Handles.CylinderHandleCap](Handles.CylinderHandleCap.html).





This method is the default value assigned to [angleHandleDrawFunction](IMGUI.Controls.ArcHandle-angleHandleDrawFunction.html) for new [ArcHandle](IMGUI.Controls.ArcHandle.html) instances, and is not intended to be called on its own.


            
