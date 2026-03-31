This version of Unity is unsupported.



# ITextSelection





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



Interface to access a TextElement selection and cursor information
 This interface is not meant to be implemented explicitly
 as its declaration might change in the future.





### Properties



| Property | Description |
| --- | --- |
| cursorIndex | This is the cursor index in the text presented. |
| cursorPosition | The position of the text cursor inside the element. |
| doubleClickSelectsWord | Controls whether double-clicking selects the word under the mouse pointer. |
| isSelectable | Returns true if the field is selectable. |
| selectAllOnFocus | Controls whether the element's content is selected upon receiving focus. |
| selectAllOnMouseUp | Controls whether the element's content is selected when you mouse up for the first time. |
| selectIndex | This is the selection index in the text presented. |
| tripleClickSelectsLine | Controls whether triple-clicking selects the entire line under the mouse pointer. |





### Public Methods



| Method | Description |
| --- | --- |
| HasSelection | Return true is the TextElement has a selection. |
| SelectAll | Selects all the text contained in the field. |
| SelectNone | Remove selection |
| SelectRange | Select text between cursorIndex and selectIndex. |


            
