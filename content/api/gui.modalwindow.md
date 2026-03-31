This version of Unity is unsupported.



# [GUI](GUI.html).ModalWindow




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

public static [Rect](Rect.html) ModalWindow(int id,
[Rect](Rect.html) clientRect,
[GUI.WindowFunction](GUI.WindowFunction.html) func,
string text);






## Declaration

public static [Rect](Rect.html) ModalWindow(int id,
[Rect](Rect.html) clientRect,
[GUI.WindowFunction](GUI.WindowFunction.html) func,
[Texture](Texture.html) image);






## Declaration

public static [Rect](Rect.html) ModalWindow(int id,
[Rect](Rect.html) clientRect,
[GUI.WindowFunction](GUI.WindowFunction.html) func,
[GUIContent](GUIContent.html) content);






## Declaration

public static [Rect](Rect.html) ModalWindow(int id,
[Rect](Rect.html) clientRect,
[GUI.WindowFunction](GUI.WindowFunction.html) func,
string text,
[GUIStyle](GUIStyle.html) style);






## Declaration

public static [Rect](Rect.html) ModalWindow(int id,
[Rect](Rect.html) clientRect,
[GUI.WindowFunction](GUI.WindowFunction.html) func,
[Texture](Texture.html) image,
[GUIStyle](GUIStyle.html) style);






## Declaration

public static [Rect](Rect.html) ModalWindow(int id,
[Rect](Rect.html) clientRect,
[GUI.WindowFunction](GUI.WindowFunction.html) func,
[GUIContent](GUIContent.html) content,
[GUIStyle](GUIStyle.html) style);














### Parameters



| Parameter | Description |
| --- | --- |
| id | A unique id number. |
| clientRect | Position and size of the window. |
| func | A function which contains the immediate mode GUI code to draw the contents of your window. |
| text | Text to appear in the title-bar area of the window, if any. |
| image | An image to appear in the title bar of the window, if any. |
| content | GUIContent to appear in the title bar of the window, if any. |
| style | Style to apply to the window. |





### Description



Show a Modal Window.





Similar to [GUI.Window](GUI.Window.html), however the window will always be on top of all other GUI, and while displayed, is guaranteed to be sole recipient of all GUI input and events. While a ModalWindow is being displayed, other controls will not be processing input. Note that only one ModalWindow can be displayed at a time.


            
