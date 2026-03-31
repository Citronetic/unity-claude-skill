This version of Unity is unsupported.



# [CapsuleBoundsHandle](IMGUI.Controls.CapsuleBoundsHandle.html).OnHandleChanged




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

protected [Bounds](Bounds.html) OnHandleChanged([IMGUI.Controls.PrimitiveBoundsHandle.HandleDirection](IMGUI.Controls.PrimitiveBoundsHandle.HandleDirection.html) handle,
[Bounds](Bounds.html) boundsOnClick,
[Bounds](Bounds.html) newBounds);






### Parameters



| Parameter | Description |
| --- | --- |
| handle | The handle that was dragged. |
| boundsOnClick | The raw Bounds for this instance's volume at the time the control handle was clicked. |
| newBounds | The raw Bounds for this instance's volume based on the updated handle position. |





### Returns



**Bounds**
        The bounds that should be applied to this instance, with any necessary modifications applied.





### Description



A callback for when a control handle was dragged in the Scene.





This method ensures that the radius axes scale uniformly and that the [height](IMGUI.Controls.CapsuleBoundsHandle-height.html) and [radius](IMGUI.Controls.CapsuleBoundsHandle-radius.html) parameters cannot fall outside their acceptable ranges relative to one another.

The height control handles cannot be made smaller than the diameter. Enlarging the diameter handles automatically increases the height if needed. The height value at the time the control was clicked is preferred until the user releases the control handle.


            
