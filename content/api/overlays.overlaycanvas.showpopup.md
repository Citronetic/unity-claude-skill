This version of Unity is unsupported.



# [OverlayCanvas](Overlays.OverlayCanvas.html).ShowPopup




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

public void ShowPopup();






## Declaration

public void ShowPopup([Vector2](Vector2.html) position);






### Parameters



| Parameter | Description |
| --- | --- |
| position | The GUI position relative to the window. |





### Description



Displays an overlay as a pop-up in a [EditorWindow](EditorWindow.html).


              


```
using UnityEditor;
using UnityEditor.Overlays;
using UnityEditor.ShortcutManagement;
using UnityEngine;
using UnityEngine.UIElements;

class PopUpOnlyOverlay : Overlay
{
    public PopUpOnlyOverlay()
    {
        displayName = "Pop Me Up";
    }

    public override VisualElement CreatePanelContent()
    {
        return new Label("I'm a pop-up overlay!");
    }

    [Shortcut("PopUpOnlyOverlayExample/Pop Up Overlay",typeof(SceneView), KeyCode.P, ShortcutModifiers.Shift)]
    static void ShowOverlay(ShortcutArguments args)
    {
        var window = args.context as EditorWindow;
        if (window is ISupportsOverlays)
            window.overlayCanvas.ShowPopup<PopUpOnlyOverlay>();
    }
}
.
```


            
