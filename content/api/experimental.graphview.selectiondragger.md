This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# SelectionDragger





class in
          UnityEditor.Experimental.GraphView



/



Inherits from:[Experimental.GraphView.Dragger](Experimental.GraphView.Dragger.html)


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



Selection dragger manipulator.





### Constructors



| Constructor | Description |
| --- | --- |
| SelectionDragger | SelectionDragger's constructor. |





### Protected Methods



| Method | Description |
| --- | --- |
| OnMouseDown | Called on mouse down event. |
| OnMouseMove | Called on mouse move event. |
| OnMouseUp | Called on mouse up event. |
| RegisterCallbacksOnTarget | Called to register click event callbacks on the target element. |
| UnregisterCallbacksFromTarget | Called to unregister event callbacks from the target element. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| clampToParentEdges | If true, it does not allow the dragged element to exit the parent's edges. |
| panSpeed | When elements are dragged near the edges of the Graph, panning occurs. This controls the speed for said panning. |
| target | VisualElement being manipulated. |
| activators | List of Activationfilters. |







### Protected Methods

| Method | Description |
| --- | --- |
| CalculatePosition | Calculate new position of the dragged element. |
| CanStartManipulation | Checks whether MouseEvent satisfies all of the ManipulatorActivationFilter requirements. |
| CanStopManipulation | Checks whether the MouseEvent is related to this Manipulator. |







            
