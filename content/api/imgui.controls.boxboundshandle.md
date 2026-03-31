This version of Unity is unsupported.



# BoxBoundsHandle





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



A compound handle to edit a box-shaped bounding volume in the Scene view.





[Image: image]
*2D and 3D BoxBoundsHandle in the Scene View.*

Additional resources: [PrimitiveBoundsHandle](IMGUI.Controls.PrimitiveBoundsHandle.html).





### Properties



| Property | Description |
| --- | --- |
| size | Returns or specifies the size of the bounding box. |





### Constructors



| Constructor | Description |
| --- | --- |
| BoxBoundsHandle | Create a new instance of the BoxBoundsHandle class. |





### Protected Methods



| Method | Description |
| --- | --- |
| DrawWireframe | Draw a wireframe box for this instance. |





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
| OnHandleChanged | A callback for when a control handle was dragged in the Scene. |
| SetSize | Sets the current size of the bounding volume for this instance. |



### Static Methods

| Method | Description |
| --- | --- |
| DefaultMidpointHandleSizeFunction | A SizeFunction that returns a fixed screen-space size. |






            
