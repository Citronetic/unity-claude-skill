This version of Unity is unsupported.



# [ContextMenuUtility](Actions.ContextMenuUtility.html).AddMenuItemsForType




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

public static void AddMenuItemsForType([UIElements.DropdownMenu](UIElements.DropdownMenu.html) menu,
IEnumerable<T> targets);






## Declaration

public static void AddMenuItemsForType([UIElements.DropdownMenu](UIElements.DropdownMenu.html) menu,
Type type,
IEnumerable<Object> targets,
string submenu);






### Parameters



| Parameter | Description |
| --- | --- |
| menu | The context menu to add all MenuItem for a specific type to. |
| targets | The target objects for the menu items. |
| type | The object type to search for when collecting context menu items. |
| submenu | Optional name of the submenu category to filter results by. |





### Description



Adds all [MenuItem](MenuItem.html) of a specific type to the Scene view context menu.


              


```
using UnityEditor;
using UnityEditor.Actions;
using UnityEditor.Overlays;
using UnityEngine;
using UnityEngine.UIElements;

[Overlay(typeof(SceneView), "Context Menu Example", defaultDisplay = true)]
class ContextMenuExample : Overlay
{
    [MenuItem("CONTEXT/Transform/Print Selected")]
    static void Init(MenuCommand cmd)
    {
        Debug.Log($"Selected transforms: {cmd.context}");
    }

    static void PopulateMenuItems(ContextualMenuPopulateEvent evt)
    {
        ContextMenuUtility.AddMenuItemsForType(evt.menu, typeof(Transform), Selection.transforms);
    }

    public override VisualElement CreatePanelContent()
    {
        var root = new VisualElement();
        ContextualMenuManipulator manipulator = new ContextualMenuManipulator(PopulateMenuItems);
        manipulator.target = root;
        const string text = "Context click here to show the context menu items for the selected Transform components.";
        root.Add(new Label(text));
        root.style.width = 256;
        root.style.height = 128;
        return root;
    }
}
```


            
