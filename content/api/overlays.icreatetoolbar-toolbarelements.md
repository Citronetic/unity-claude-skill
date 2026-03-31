This version of Unity is unsupported.



# [ICreateToolbar](Overlays.ICreateToolbar.html).toolbarElements




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












                    public IEnumerable<string> toolbarElements;






### Description



List of [toolbarElements](Overlays.ICreateToolbar-toolbarElements.html) IDs to show when the [Overlay](Overlays.Overlay.html) is in a toolbar layout.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.Overlays;
using UnityEditor.Toolbars;
using UnityEngine;
using UnityEngine.UIElements;

[Overlay(typeof(SceneView), "My Toolbar Overlay")]
class MyOverlay : Overlay, ICreateToolbar
{
    public override VisualElement CreatePanelContent()
    {
        return new Label("I'm the content shown in panel mode!");
    }

    public IEnumerable<string> toolbarElements
    {
        get
        {
            yield return MyToolbarItem.id;
            yield return SomeOtherToolbarItem.id;
        }
    }
}

[EditorToolbarElement(id, typeof(SceneView))]
class SomeOtherToolbarItem : EditorToolbarToggle
{
    public const string id = "SomeOtherToolbarItem";

    public SomeOtherToolbarItem()
    {
        icon = EditorGUIUtility.FindTexture("CustomTool");
    }
}

// Example toolbar element with multiple controls
[EditorToolbarElement(id, typeof(SceneView))]
class MyToolbarItem : OverlayToolbar
{
    public const string id = "MyToolbarItem";

    public MyToolbarItem()
    {
        var icon = AssetDatabase.LoadAssetAtPath<Texture2D>("MyIcon");
        Add(new EditorToolbarButton(icon, () => { Debug.Log("Hello!"); }));
        Add(new EditorToolbarButton(icon, () => { Debug.Log("Hello again!"); }));
        SetupChildrenAsButtonStrip();
    }
}
```


            
