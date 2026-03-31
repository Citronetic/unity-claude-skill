This version of Unity is unsupported.



# [EditorUtility](EditorUtility.html).DisplayPopupMenu




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

public static void DisplayPopupMenu([Rect](Rect.html) position,
string menuItemPath,
[MenuCommand](MenuCommand.html) command);






### Description



Displays a popup menu.





Menu is shown at position `pos`, generated from a submenu specified by `menuItemPath` using a
[MenuCommand](MenuCommand.html) as menu context.


              


```
using UnityEditor;
using UnityEngine;
using System.Collections;// Shows the Assets menu when you right click on the contextRect Rectangle.
public class EditorUtilityDisplayPopupMenu : MonoBehaviour
{
    void OnGUI()
    {
        Event evt = Event.current;
        Rect contextRect = new Rect(10, 10, 100, 100);
        if (evt.type == EventType.ContextClick)
        {
            Vector2 mousePos = evt.mousePosition;
            if (contextRect.Contains(mousePos))
            {
                EditorUtility.DisplayPopupMenu(new Rect(mousePos.x, mousePos.y, 0, 0), "Assets/", null);
                evt.Use();
            }
        }
    }
}
```


            
