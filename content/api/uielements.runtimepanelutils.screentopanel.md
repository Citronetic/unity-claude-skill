This version of Unity is unsupported.



# [RuntimePanelUtils](UIElements.RuntimePanelUtils.html).ScreenToPanel




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

public static [Vector2](Vector2.html) ScreenToPanel([UIElements.IPanel](UIElements.IPanel.html) panel,
[Vector2](Vector2.html) screenPosition);






### Parameters



| Parameter | Description |
| --- | --- |
| panel | The local coordinates reference panel. |
| screenPosition | The screen position to transform. |





### Returns



**Vector2**
        A position in panel coordinates that corresponds to the provided screen position.





### Description



Transforms a screen absolute position to its equivalent local coordinate on given panel.





The following example converts the mouse position from screen coordinates to UI Toolkit panel coordinates:


              


```
using UnityEngine;
using UnityEngine.UIElements;public class ScreenToPanelConverter : MonoBehaviour
{
    private UIDocument uiDocument;    void Awake()
    {
        uiDocument = GetComponent<UIDocument>();
    }    void Update()
    {
        if (uiDocument == null || uiDocument.rootVisualElement == null)
        {
            return;
        }        // 1. Get the mouse position in screen pixel coordinates (origin is bottom-left).
        Vector2 screenPosition = Input.mousePosition;        // 2. Invert the Y-axis to match UI Toolkit's top-left origin.
        screenPosition.y = Screen.height - screenPosition.y;        // 3. Use the panel's utility function to convert from screen space to panel space.
        // This correctly handles any scaling applied by the panel (for example, Scale with Screen Size).
        IPanel panel = uiDocument.rootVisualElement.panel;
        Vector2 panelPosition = RuntimePanelUtils.ScreenToPanel(panel, screenPosition);        Debug.Log($"Screen Position: {Input.mousePosition}, Panel Position: {panelPosition}");
    }
}
```


            
