This version of Unity is unsupported.



# IMouseEvent





interface in
          UnityEngine.UIElements


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



Interface for mouse events.





Refer to the [Mouse events](../Manual/UIE-Mouse-Events.html) manual page for more information and examples.





### Properties



| Property | Description |
| --- | --- |
| actionKey | Returns true if the platform-specific action key is pressed. |
| altKey | Return true if the Alt key is pressed. |
| button | A value that indicates which mouse button was pressed or released (if any) to cause this event:
 0 is the left button, 1 is the right button, 2 is the middle button.
 A negative value indicates that no mouse button changed state during this event. |
| clickCount | The number of times a button is pressed consecutively. |
| commandKey | Return true if the Windows/Command key is pressed. |
| ctrlKey | Return true if the Ctrl key is pressed. |
| localMousePosition | The mouse position in the current target coordinate system. |
| modifiers | Flag set holding the pressed modifier keys (Alt, Ctrl, Shift, Windows/Command). |
| mouseDelta | Gets the difference between the mouse's position during the previous mouse event and its position during the
 current mouse event. |
| mousePosition | The mouse position in the panel coordinate system. |
| pressedButtons | A bitmask that describes the currently pressed buttons. |
| shiftKey | Return true if the Shift key is pressed. |


            
