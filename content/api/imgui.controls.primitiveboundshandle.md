This version of Unity is unsupported.



# PrimitiveBoundsHandle





class in
          UnityEditor.IMGUI.Controls


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



















### Description



Base class for a compound handle to edit a bounding volume in the Scene view.





This class allows you to display a shape with up to six control handles for simultaneously editing the size and center of a bounding volume. Dragging on any one control handle will expand the volume along the control handle's axis. All classes that inherit from this class also gain the following modifier keys while a control handle is being dragged:

• **Alt**: Pin the [center](IMGUI.Controls.PrimitiveBoundsHandle-center.html) of the volume to its location at the time the control handle was clicked and grow the size in both directions along the control handle's axis of movement.

• **Shift**: Uniformly scale the volume along all enabled [axes](IMGUI.Controls.PrimitiveBoundsHandle-axes.html) in proportion to its size at the time the control handle was clicked.

The handle rendered by this class's [DrawHandle](IMGUI.Controls.PrimitiveBoundsHandle.DrawHandle.html) method is affected by global state in the [Handles](Handles.html) class, such as [Handles.matrix](Handles-matrix.html) and [Handles.color](Handles-color.html).

Additional resources: [Editor.OnSceneGUI](Editor.OnSceneGUI.html), [Handles.SetCamera](Handles.SetCamera.html).





### Properties



| Property | Description |
| --- | --- |
| axes | Flags specifying which axes should display control handles. |
| center | Returns or specifies the center of the bounding volume for the handle. |
| handleColor | Returns or specifies the color of the control handles. |
| midpointHandleDrawFunction | An optional CapFunction to use when displaying the control handles. Defaults to Handles.DotHandleCap if no value is specified. |
| midpointHandleSizeFunction | The SizeFunction to specify how large the midpoint control handles should be. |
| wireframeColor | Returns or specifies the color of the wireframe shape. |





### Constructors



| Constructor | Description |
| --- | --- |
| PrimitiveBoundsHandle | Create a new instance of the PrimitiveBoundsHandle class. |





### Public Methods



| Method | Description |
| --- | --- |
| DrawHandle | A function to display this instance in the current handle camera using its current configuration. |
| SetColor | Sets handleColor and wireframeColor to the same value. |





### Protected Methods



| Method | Description |
| --- | --- |
| DrawWireframe | Draw a wireframe shape for this instance. Subclasses must implement this method. |
| GetSize | Gets the current size of the bounding volume for this instance. |
| IsAxisEnabled | Gets a value indicating whether the specified axis is enabled for the current instance. |
| OnHandleChanged | A callback for when a control handle was dragged in the Scene. |
| SetSize | Sets the current size of the bounding volume for this instance. |





### Static Methods



| Method | Description |
| --- | --- |
| DefaultMidpointHandleSizeFunction | A SizeFunction that returns a fixed screen-space size. |


            
