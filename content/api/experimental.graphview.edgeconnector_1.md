This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# EdgeConnector<T0>





class in
          UnityEditor.Experimental.GraphView



/



Inherits from:[Experimental.GraphView.EdgeConnector](Experimental.GraphView.EdgeConnector.html)


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



Manipulator for creating new edges.





### Properties



| Property | Description |
| --- | --- |
| edgeDragHelper | Reference to the edge drag helper. |





### Constructors



| Constructor | Description |
| --- | --- |
| EdgeConnector_1 | EdgeConnector's constructor. |





### Protected Methods



| Method | Description |
| --- | --- |
| Abort | Called when an edge creation is cancelled. |
| OnMouseDown | Called on mouse down event. |
| OnMouseMove | Called on mouse move event. |
| OnMouseUp | Called on mouse up event. |
| OnPointerDown | Called when a pointer down event occurs on the target element. |
| OnPointerMove | Called when a pointer move event occurs on the target element. |
| OnPointerUp | Called when a pointer up event occurs on the target element. |
| RegisterCallbacksOnTarget | Called to register click event callbacks on the target element. |
| UnregisterCallbacksFromTarget | Called to unregister event callbacks from the target element. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| edgeDragHelper | Reference to the edge drag helper. |
| target | VisualElement being manipulated. |
| activators | List of Activationfilters. |







### Protected Methods

| Method | Description |
| --- | --- |
| CanStartManipulation | Checks whether MouseEvent satisfies all of the ManipulatorActivationFilter requirements. |
| CanStopManipulation | Checks whether the MouseEvent is related to this Manipulator. |
| CanStartManipulation | Checks whether PointerEvent satisfies all of the ManipulatorActivationFilter requirements. |
| CanStopManipulation | Checks whether the PointerEvent is related to this Manipulator. |







            
