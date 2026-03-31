This version of Unity is unsupported.



# Clickable





class in
          UnityEngine.UIElements



/



Inherits from:[UIElements.PointerManipulator](UIElements.PointerManipulator.html)



/



Implemented in:[UnityEngine.UIElementsModule](UnityEngine.UIElementsModule.html)


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



Manipulator that tracks pointer events on an element and callbacks when the elements is clicked.





See [Clickable.clicked](UIElements.Clickable-clicked.html) for more information on what it means for an element to be clicked
 in the context of this manipulator.





### Properties



| Property | Description |
| --- | --- |
| active | This property tracks the activation of the manipulator. Set it to true when the manipulator is activated. |
| lastMousePosition | Specifies the mouse position saved during the last mouse event on the target Element. |





### Constructors



| Constructor | Description |
| --- | --- |
| Clickable | Constructor. |





### Protected Methods



| Method | Description |
| --- | --- |
| Invoke | Invokes a click action. |
| OnPointerDown | This method is called when a PointerDownEvent is sent to the target element. |
| OnPointerMove | This method is called when a PointerMoveEvent is sent to the target element. |
| OnPointerUp | This method is called when a PointerUpEvent is sent to the target element. |
| ProcessCancelEvent | This method processes the up cancel sent to the target Element. |
| ProcessDownEvent | This method processes the down event sent to the target Element. |
| ProcessMoveEvent | This method processes the move event sent to the target Element. |
| ProcessUpEvent | This method processes the up event sent to the target Element. |
| RegisterCallbacksOnTarget | Called to register mouse event callbacks on the target element. |
| UnregisterCallbacksFromTarget | Called to unregister event callbacks from the target element. |





### Events



| Event | Description |
| --- | --- |
| clicked | Callback triggered when the target element is clicked. |
| clickedWithEventInfo | Callback triggered when the target element is clicked, including event data. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| target | VisualElement being manipulated. |
| activators | List of Activationfilters. |







### Protected Methods

| Method | Description |
| --- | --- |
| CanStartManipulation | Checks whether MouseEvent satisfies all of the ManipulatorActivationFilter requirements. |
| CanStopManipulation | Checks whether the MouseEvent is related to this Manipulator. |
| CanStartManipulation | Checks whether PointerEvent satisfies all of the ManipulatorActivationFilter requirements. |
| CanStopManipulation | Checks whether the PointerEvent is related to this Manipulator. |







            
