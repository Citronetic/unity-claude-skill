This version of Unity is unsupported.



# [EditorWindow](EditorWindow.html).position




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












                    public [Rect](Rect.html) position;






### Description



The desired position of the window in screen space.





Setting this value will undock the window if it is docked.

[Image: image]

*Create an undocked editor window with position.*


              


```
// The position of the window is displayed when it is
// external from Unity.

using UnityEngine;
using UnityEditor;
using UnityEngine.UIElements;

public class PositionExample : EditorWindow
{
    Vector2Int p1;
    bool showButton = true;

    [MenuItem("Examples/Window Position")]
    static void Init()
    {
        GetWindow<PositionExample>("position");
    }

    void CreateGUI()
    {
        Rect r = position;
        var label = new Label("Position: " + r.x + "x" + r.y);
        rootVisualElement.Add(label);

        var field = new Vector2IntField("Set the position:");
        rootVisualElement.Add(field);
        if (showButton)
        {
            var button = new Button(() => {
                r.x = field.value.x;
                r.y = field.value.y;

                position = r;
            });
            button.text = "Accept new position";
            rootVisualElement.Add(button);
        }
    }
}
```


            
