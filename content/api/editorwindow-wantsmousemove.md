This version of Unity is unsupported.



# [EditorWindow](EditorWindow.html).wantsMouseMove




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












                    public bool wantsMouseMove;






### Description



Checks whether MouseMove events are received in the GUI in this Editor window.





[Image: image]


*Editor Window that detects mouse moves when the toggle button is activated and the mouse is over the window.*


              


```
// Editor Script that shows the mouse movement events captured.
// "Mouse Position" shows where the mouse is outside of the window.

using UnityEditor;
using UnityEngine;
using System.Collections;
using UnityEngine.UIElements;

public class PointerMove : EditorWindow
{
    [MenuItem("Examples/Mouse Move Example")]
    static void InitWindow()
    {
        PointerMove window = (PointerMove)GetWindowWithRect(typeof(PointerMove), new Rect(0, 0, 300, 100));
        window.Show();
    }

    Label m_PointerPosition;

    void CreateGUI()
    {
        rootVisualElement.pickingMode = PickingMode.Position;

        // Create a toggle button that toggles the value of wantsMouseMove
        var toggle = new Toggle
        {
            text = "Receive Movement"
        };
        wantsMouseMove = toggle.value;
        rootVisualElement.Add(toggle);

        m_PointerPosition = new Label();
        rootVisualElement.Add(m_PointerPosition);

        toggle.RegisterValueChangedCallback((evt) =>
        {
            if (evt.newValue)
                rootVisualElement.RegisterCallback<PointerMoveEvent>(LogPointerMoved);
            else
                rootVisualElement.UnregisterCallback<PointerMoveEvent>(LogPointerMoved);
        });
    }

    void LogPointerMoved(PointerMoveEvent evt)
    {
        m_PointerPosition.text = $"Pointer Position: {evt.position}";
    }
}
```


            
