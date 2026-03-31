This version of Unity is unsupported.



# DockZone





enumeration


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



DockZone describes the area of the screen that an [Overlay](Overlays.Overlay.html) is displayed in.





Use [DockZone](Overlays.DockZone.html) in an [OverlayAttribute](Overlays.OverlayAttribute.html) to set the default location for an [Overlay](Overlays.Overlay.html).


              


```
using UnityEditor;
using UnityEditor.Overlays;
using UnityEngine;
using UnityEngine.UIElements;// Use OverlayAttribute to specify that in new Scene Views, when this Overlay is first opened it will be in the
// top toolbar, aligned to the left side.
[Overlay(typeof(SceneView), "Docked Top Toolbar, Left Aligned", defaultDockZone = DockZone.TopToolbar, defaultDockPosition = DockPosition.Top)]
class MyOverlay : Overlay
{
    public override VisualElement CreatePanelContent() => new Label("Overlay Contents");
}
```





### Properties



| Property | Description |
| --- | --- |
| LeftToolbar | Overlays are displayed in the left toolbar. |
| RightToolbar | Overlays are displayed in the right toolbar. |
| TopToolbar | Overlays are displayed in the top toolbar. |
| BottomToolbar | Overlays are displayed in the bottom toolbar. |
| LeftColumn | Overlays are displayed in the left column. |
| RightColumn | Overlays are displayed in the right column. |
| Floating | Overlays are not bound to a toolbar or column. |


            
