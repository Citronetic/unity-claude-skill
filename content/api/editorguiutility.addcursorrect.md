This version of Unity is unsupported.



# [EditorGUIUtility](EditorGUIUtility.html).AddCursorRect




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

public static void AddCursorRect([Rect](Rect.html) position,
[MouseCursor](MouseCursor.html) mouse);






## Declaration

public static void AddCursorRect([Rect](Rect.html) position,
[MouseCursor](MouseCursor.html) mouse,
int controlID);






### Parameters



| Parameter | Description |
| --- | --- |
| position | The rectangle the control should be shown within. |
| mouse | The mouse cursor to use. |
| controlID | ID of a target control. |





### Description



Add a custom mouse pointer to a control.


              


```
// Create a small window that has a color box in it.
// Hovering over it causes a Zoom mouse cursor to appear.  (The window is not
// zoomed however.)
using UnityEngine;
using UnityEditor;public class AddCursorRectExample : EditorWindow
{
    [MenuItem("Examples/AddCursorRect Example")]
    static void addCursorRectExample()
    {
        AddCursorRectExample window =
            EditorWindow.GetWindowWithRect<AddCursorRectExample>(new Rect(0, 0, 180, 80));
        window.Show();
    }    void OnGUI()
    {
        EditorGUI.DrawRect(new Rect(10, 10, 160, 60), new Color(0.5f, 0.5f, 0.85f));
        EditorGUI.DrawRect(new Rect(20, 20, 140, 40), new Color(0.9f, 0.9f, 0.9f));
        EditorGUIUtility.AddCursorRect(new Rect(20, 20, 140, 40), MouseCursor.Zoom);
    }
}
```


            
