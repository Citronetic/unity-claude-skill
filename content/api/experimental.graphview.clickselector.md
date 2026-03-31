This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# ClickSelector





class in
          UnityEditor.Experimental.GraphView



/



Inherits from:[UIElements.MouseManipulator](UIElements.MouseManipulator.html)


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



Selects element on single click.





### Constructors



| Constructor | Description |
| --- | --- |
| ClickSelector | Constructor for ClickSelector. |





### Protected Methods



| Method | Description |
| --- | --- |
| OnMouseDown | Called on mouse down event. |
| RegisterCallbacksOnTarget | Called to register click event callbacks on the target element. |
| UnregisterCallbacksFromTarget | Called to unregister event callbacks from the target element. |





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







            
