This version of Unity is unsupported.



# GUIUtility





class in
          UnityEngine



/



Implemented in:[UnityEngine.IMGUIModule](UnityEngine.IMGUIModule.html)


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



Utility class for making new GUI controls.





Unless you are creating your own GUI controls from scratch, you should not use these functions.





### Static Properties



| Property | Description |
| --- | --- |
| hasModalWindow | A global property, which is true if a ModalWindow is being displayed, false otherwise. |
| hotControl | The controlID of the current hot control. |
| keyboardControl | The controlID of the control that has keyboard focus. |
| systemCopyBuffer | Get access to the system-wide clipboard. |





### Static Methods



| Method | Description |
| --- | --- |
| AlignRectToDevice | Align a local space rectangle to the pixel grid. |
| ExitGUI | Puts the GUI in a state that will prevent all subsequent immediate mode GUI functions from evaluating for the remainder of the GUI loop by throwing an ExitGUIException. |
| GetControlID | Get a unique ID for a control. |
| GetStateObject | Get a state object from a controlID. |
| GUIToScreenPoint | Convert a point from GUI position to screen space. |
| GUIToScreenRect | Convert a rect from GUI position to screen space. |
| QueryStateObject | Get an existing state object from a controlID. |
| RotateAroundPivot | Helper function to rotate the GUI around a point. |
| ScaleAroundPivot | Helper function to scale the GUI around a point. |
| ScreenToGUIPoint | Convert a point from screen space to GUI position. |
| ScreenToGUIRect | Convert a rect from screen space to GUI position. |


            
