This version of Unity is unsupported.



# [OverlayCanvas](Overlays.OverlayCanvas.html).Add(Overlay,bool)




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



















### Parameters



| Parameter | Description |
| --- | --- |
| overlay | The Overlay to add. |
| show | True to display the Overlay immediately, false to add without displaying. |





### Description



Add an [Overlay](Overlays.Overlay.html) to this canvas. Added Overlays will be displayed in the associated [EditorWindow](EditorWindow.html) until they are removed.





In most cases, Overlays are instantiated automatically using [OverlayAttribute](Overlays.OverlayAttribute.html). However, it is also possible to add and remove Overlays from an [OverlayCanvas](Overlays.OverlayCanvas.html) directly. This is useful for short-lived Overlays that require some context. E.g., as an extension of an Editor.

Overlays added using this method must implement [ITransientOverlay](Overlays.ITransientOverlay.html). An [Overlay](Overlays.Overlay.html) may only belong to a single [OverlayCanvas](Overlays.OverlayCanvas.html). To display an [Overlay](Overlays.Overlay.html) in multiple windows, you must instantiate an [Overlay](Overlays.Overlay.html) for each window.


              


```
using UnityEditor;
using UnityEngine;
using UnityEditor.Overlays;
using UnityEngine.UIElements;// Attach this MonoBehaviour to a GameObject to view the example Overlay in the last active Scene View
class OverlayCanvasExample : MonoBehaviour {}// An Editor for our OverlayCanvasExample MonoBehaviour. This will show and hide the example Overlay when a GameObject
// with the OverlayCanvasExample component is selected and deselected.
[CustomEditor(typeof(OverlayCanvasExample))]
class OverlayCanvasExampleEditor : UnityEditor.Editor
{
    ExampleEditorOverlay m_Overlay;    void OnEnable()
    {
        // Create a new Overlay with a label indicating the selected GameObject name.
        m_Overlay = new ExampleEditorOverlay(name);
        SceneView.lastActiveSceneView.overlayCanvas.Add(m_Overlay);
    }    void OnDisable()
    {
        // If the Overlay has not already been closed, close it when this editor is disabled. Added Overlays will
        // persist until they are closed.
        m_Overlay?.Close();
    }
}class ExampleEditorOverlay : Overlay, ITransientOverlay
{
    // Overlays added directly to the canvas must implement ITransientOverlay, meaning they control their own lifecycle.
    public bool visible => true;    string m_Message;    public ExampleEditorOverlay(string message)
    {
        m_Message = message;
    }    public override VisualElement CreatePanelContent()
    {
        var root = new VisualElement();
        root.Add(new Label(m_Message));
        root.Add(new Button(Close) { text = "Close" });
        return root;
    }
}
```


            
