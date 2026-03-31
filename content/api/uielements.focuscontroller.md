This version of Unity is unsupported.



# FocusController





class in
          UnityEngine.UIElements



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



Class in charge of managing the focus inside a Panel.





Each Panel should have an instance of this class. The instance holds the currently focused VisualElement and is responsible for changing it.


Additional resources: [IPanel](UIElements.IPanel.html)





### Properties



| Property | Description |
| --- | --- |
| focusedElement | The currently focused VisualElement. |





### Constructors



| Constructor | Description |
| --- | --- |
| FocusController | Constructor. |





### Public Methods



| Method | Description |
| --- | --- |
| IgnoreEvent | Instructs the FocusController to ignore the given event.
 This will prevent the event from changing the current focused VisualElement or triggering focus events. |


            
