This version of Unity is unsupported.



# CapsuleBoundsHandle





class in
          UnityEditor.IMGUI.Controls



/



Inherits from:[IMGUI.Controls.PrimitiveBoundsHandle](IMGUI.Controls.PrimitiveBoundsHandle.html)


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



A compound handle to edit a capsule-shaped bounding volume in the Scene view.





A capsule volume is defined by two parameters. The [height](IMGUI.Controls.CapsuleBoundsHandle-height.html) specifies the upper and lower bounds along the [heightAxis](IMGUI.Controls.CapsuleBoundsHandle-heightAxis.html), while the [radius](IMGUI.Controls.CapsuleBoundsHandle-radius.html) specifies the radius of the capsule's cross section between the upper and lower points on its height axis.

[Image: image]
*2D and 3D CapsuleBoundsHandle in the Scene View.*

Additional resources: [PrimitiveBoundsHandle](IMGUI.Controls.PrimitiveBoundsHandle.html).





### Properties



| Property | Description |
| --- | --- |
| height | Returns or specifies the height of the capsule bounding volume. |
| heightAxis | Returns or specifies the axis in the handle's space to which height maps. The radius maps to the remaining axes. |
| radius | Returns or specifies the radius of the capsule bounding volume. |





### Constructors



| Constructor | Description |
| --- | --- |
| CapsuleBoundsHandle | Create a new instance of the CapsuleBoundsHandle class. |





### Protected Methods



| Method | Description |
| --- | --- |
| DrawWireframe | Draw a wireframe capsule for this instance. |
| OnHandleChanged | A callback for when a control handle was dragged in the Scene. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| axes | Flags specifying which axes should display control handles. |
| center | Returns or specifies the center of the bounding volume for the handle. |
| handleColor | Returns or specifies the color of the control handles. |
| midpointHandleDrawFunction | An optional CapFunction to use when displaying the control handles. Defaults to Handles.DotHandleCap if no value is specified. |
| midpointHandleSizeFunction | The SizeFunction to specify how large the midpoint control handles should be. |
| wireframeColor | Returns or specifies the color of the wireframe shape. |






### Public Methods

| Method | Description |
| --- | --- |
| DrawHandle | A function to display this instance in the current handle camera using its current configuration. |
| SetColor | Sets handleColor and wireframeColor to the same value. |



### Protected Methods

| Method | Description |
| --- | --- |
| GetSize | Gets the current size of the bounding volume for this instance. |
| IsAxisEnabled | Gets a value indicating whether the specified axis is enabled for the current instance. |
| SetSize | Sets the current size of the bounding volume for this instance. |



### Static Methods

| Method | Description |
| --- | --- |
| DefaultMidpointHandleSizeFunction | A SizeFunction that returns a fixed screen-space size. |






            
