This version of Unity is unsupported.



# [EditorWindow](EditorWindow.html).GetWindowWithRect




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

public static [EditorWindow](EditorWindow.html) GetWindowWithRect(Type windowType,
[Rect](Rect.html) rect,
bool utility = false,
string title = null);






### Parameters



| Parameter | Description |
| --- | --- |
| windowType | The type of the window. Must derive from EditorWindow. |
| rect | The position on the screen where a newly created window will show. |
| utility | Set this to true, to create a floating utility window, false to create a normal window. |
| title | If GetWindow creates a new window, it will get this title. If this value is null, use the class name as title. |





### Description



Returns the first EditorWindow of type `t` which is currently on the screen.





If there is none, creates and shows new window at the position `rect` and returns the instance of it.

[Image: image]

*Create an empty 100x150px window at the upper left corner of the screen.*


              


```
using UnityEngine;
using UnityEditor;

// Create a dockable empty window at the top left corner of the screen
// with 100px width and 150px height.

public class EditorWindowTestRect : EditorWindow
{
    [MenuItem("Examples/Display simple sized Window")]
    static void Initialize()
    {
        EditorWindowTestRect window = (EditorWindowTestRect)EditorWindow.GetWindowWithRect(typeof(EditorWindowTestRect), new Rect(0, 0, 100, 150));
    }
}
```




---








## Declaration

public static T GetWindowWithRect([Rect](Rect.html) rect);






## Declaration

public static T GetWindowWithRect([Rect](Rect.html) rect,
bool utility);






## Declaration

public static T GetWindowWithRect([Rect](Rect.html) rect,
bool utility,
string title);






## Declaration

public static T GetWindowWithRect([Rect](Rect.html) rect,
bool utility,
string title,
bool focus);






### Parameters



| Parameter | Description |
| --- | --- |
| T | The type of the window. Must derive from EditorWindow. |
| rect | The position on the screen where a newly created window will show. |
| utility | Set this to true, to create a floating utility window, false to create a normal window. |
| title | If GetWindow creates a new window, it will get this title. If this value is null, use the class name as title. |
| focus | Whether to give the window focus, if it already exists. (If GetWindow creates a new window, it will always get focus). |





### Returns



**T**
        An EditorWindow instance of type `T`.





### Description



Returns the first EditorWindow of type `t` which is currently on the screen.





If there is none, creates and shows new window at the position `rect` and returns the instance of it.


            
