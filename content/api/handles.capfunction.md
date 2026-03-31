This version of Unity is unsupported.



# [Handles](Handles.html).CapFunction




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

public delegate void CapFunction(int controlID,
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
| size | The size of the handle in world-space units. |
| eventType | Event type for the handle to act upon. By design it handles EventType.Layout and EventType.Repaint events. |





### Description



The function to use for drawing the handle e.g. Handles.RectangleCap.





Custom CapFunction has two responsibilities:



          1. For [EventType.Layout](EventType.Layout.html) event, call [HandleUtility.AddControl](HandleUtility.AddControl.html) to inform Unity about the distance of the handle from mouse position.

          2. For [EventType.Repaint](EventType.Repaint.html) event, render the actual handle.




            
