This version of Unity is unsupported.



# [Editor](Editor.html).OnPreviewGUI




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

public void OnPreviewGUI([Rect](Rect.html) r,
[GUIStyle](GUIStyle.html) background);






### Parameters



| Parameter | Description |
| --- | --- |
| r | The rectangle in which to draw the preview. |
| background | Background image. |





### Description



Creates a custom preview for the preview area of the Inspector, the headers of the primary Editor, and the object selector.

You must implement [Editor.HasPreviewGUI](Editor.HasPreviewGUI.html) for this method to be called.





If you implement [OnInteractivePreviewGUI](Editor.OnInteractivePreviewGUI.html), then this method is only called for non-interactive custom previews.
The overidden method should render a preview of the asset in the specified rectangle (r).
The default implementation is a no-op.

**Note:** Inspector previews are limited to the primary Editor of persistent objects, such as GameObjectInspector, MaterialEditor, and TextureInspector. A component cannot have its own Inspector preview.


              


```
using UnityEngine;
using UnityEditor;[CreateAssetMenu]
class MyObject : ScriptableObject
{
    public string text;
}// Show a preview of the text saved in MyObject.
[CustomEditor(typeof(MyObject))]
public class MyObjectEditor : Editor
{
    public override bool HasPreviewGUI() => true;    public override void OnPreviewGUI(Rect r, GUIStyle background)
    {
        GUI.Label(r, (target as MyObject).text);
    }
}
```





Additional resources: [OnInteractivePreviewGUI](Editor.OnInteractivePreviewGUI.html).


            
