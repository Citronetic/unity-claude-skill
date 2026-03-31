This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# SelectionDropper





class in
          UnityEditor.Experimental.GraphView



/



Inherits from:[UIElements.Manipulator](UIElements.Manipulator.html)


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



Selection drag&drop manipulator.





### Properties



| Property | Description |
| --- | --- |
| activateButton | Mouse button used to activate the manipulator. |
| clampToParentEdges | Clamp element being dragged to the parent's (usually the graph) edges. |
| panSpeed | When elements are dragged near the edges of the Graph, panning occurs. This controls the speed for said panning. |





### Constructors



| Constructor | Description |
| --- | --- |
| SelectionDropper | SelectionDropper's constructor. |





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
| target | VisualElement being manipulated. |












            
