This version of Unity is unsupported.



# ISupportsOverlays





interface in
          UnityEditor.Overlays


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



Implement this interface to enable overlays in the [EditorWindow](EditorWindow.html).





When [ISupportsOverlays](Overlays.ISupportsOverlays.html) is implemented, an Overlay Canvas is automatically added to the [VisualElement](UIElements.VisualElement.html) tree for your [EditorWindow](EditorWindow.html). [OverlayAttribute](Overlays.OverlayAttribute.html) will now be able to specify this window type as a valid target for registering an [Overlay](Overlays.Overlay.html).


              


```
using System;
using UnityEditor;
using UnityEditor.Overlays;
using UnityEngine;
using UnityEngine.UIElements;

class EditorWindowOverlayExample : EditorWindow, ISupportsOverlays
{
    [MenuItem("Window/Overlay Supported Window Example")]
    static void Init() => GetWindow<EditorWindowOverlayExample>();

    void OnGUI()
    {
        GUILayout.Label("Here is some text");
        GUILayout.FlexibleSpace();
        GUILayout.Label("Plus some more text, but on the bottom of the screen.");
    }
}

[Overlay(typeof(EditorWindowOverlayExample), "Is Mouse Hovering Me?", true)]
class IsMouseHoveringMe : Overlay
{
    Label m_MouseLabel;

    public override VisualElement CreatePanelContent()
    {
        m_MouseLabel = new Label();
        m_MouseLabel.style.minHeight = 40;
        m_MouseLabel.RegisterCallback<MouseEnterEvent>(evt => m_MouseLabel.text = "Mouse is hovering this Overlay content!");
        m_MouseLabel.RegisterCallback<MouseLeaveEvent>(evt => m_MouseLabel.text = "Mouse is not hovering this Overlay content.");
        return m_MouseLabel;
    }
}
```


            
