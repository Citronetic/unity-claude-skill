This version of Unity is unsupported.



# ContextualMenuManipulator





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



Manipulator that displays a contextual menu when the user clicks the right mouse button or presses the menu key on the keyboard.





### Constructors



| Constructor | Description |
| --- | --- |
| ContextualMenuManipulator | Constructor. |





### Protected Methods



| Method | Description |
| --- | --- |
| IsOSXContextualMenuPlatform | Check whether the handling of contextual menu events needs to be adapted for OSX. |
| RegisterCallbacksOnTarget | Register the event callbacks on the manipulator target. |
| UnregisterCallbacksFromTarget | Unregister the event callbacks from the manipulator target. |





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







            
