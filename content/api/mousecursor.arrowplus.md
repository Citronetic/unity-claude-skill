This version of Unity is unsupported.



# [MouseCursor](MouseCursor.html).ArrowPlus




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



Arrow with the plus symbol next to it.


              


```
//Create a folder and name it “Editor” if this doesn’t already exist
//Put this script in the folder//This script creates a new menu (“Examples”) and a menu item (“Mouse Cursor”). Click on this option. This displays a small window that has a color box in it.
//Hover over the colored box to cause an Arrow plus mouse cursor to appear.
using UnityEngine;
using UnityEditor;public class MouseCursorExample : EditorWindow
{
    [MenuItem("Examples/MouseCursorRect Example")]
    static void AddCursorRectExample()
    {
        MouseCursorExample window =
            EditorWindow.GetWindowWithRect<MouseCursorExample>(new Rect(0, 0, 180, 80));
        window.Show();
    }    void OnGUI()
    {
        EditorGUI.DrawRect(new Rect(10, 10, 160, 60), new Color(0.5f, 0.5f, 0.85f));
        EditorGUI.DrawRect(new Rect(20, 20, 140, 40), new Color(0.9f, 0.9f, 0.9f));
        EditorGUIUtility.AddCursorRect(new Rect(20, 20, 140, 40), MouseCursor.ArrowPlus);
    }
}
```


            
