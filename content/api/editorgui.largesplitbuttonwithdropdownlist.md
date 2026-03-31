This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).LargeSplitButtonWithDropdownList




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















## Declaration

public static bool LargeSplitButtonWithDropdownList([GUIContent](GUIContent.html) content,
string[] buttonNames,
[GenericMenu.MenuFunction2](GenericMenu.MenuFunction2.html) callback,
bool disableMainButton);






### Parameters



| Parameter | Description |
| --- | --- |
| content | Text, image and tooltip the button displays. |
| buttonNames | The list of options in the dropdown menu. |
| callback | The callback to fire when a dropdown menu item is selected. |
| disableMainButton | Whether to disable the button. The default value is `false`. |





### Returns



**bool**

          `true` when the user clicks the button.





### Description



Creates a large button that contains a regular button section and an arrow to open a dropdown menu.





When the user selects the button section the method returns true. When the user selects the dropdown arrow a dropdown menu appears. When the user selects an item in the dropdown menu, `callback` is fired with the selected menu item as input.


            
