This version of Unity is unsupported.

Load UXML and USS C# scripts

Find visual elements with UQuery

# Instantiate UXML from C# scripts

To build UI from a UXML file, you must first [load the file into a `VisualTreeAsset`](UIE-manage-asset-reference.html), and then use the [`Instantiate()`](../ScriptReference/UIElements.VisualTreeAsset.Instantiate.html) to instantiate without a parent, which creates a new `TemplateContainer`, or [`CloneTree(parent)`](../ScriptReference/UIElements.VisualTreeAsset.CloneTree.html)) to clone inside a parent.

Once the UXML is instantiated, you can retrieve specific elements from the **visual tree**An object graph, made of lightweight nodes, that holds all the elements in a window or panel. It defines every UI you build with the UI Toolkit.
See in [Glossary](Glossary.html#Visualtree) with [UQuery](UIE-UQuery.html).

The following example creates a custom Editor window and loads a UXML file as its content:

```cs
using UnityEditor;
using UnityEngine;
using UnityEngine.UIElements;
using UnityEditor.UIElements;

public class MyWindow : EditorWindow  {
    [MenuItem ("Window/My Window")]
    public static void  ShowWindow () {
        EditorWindow w = EditorWindow.GetWindow(typeof(MyWindow));

        VisualTreeAsset uiAsset = AssetDatabase.LoadAssetAtPath<VisualTreeAsset>("Assets/MyWindow.uxml");
        VisualElement ui = uiAsset.Instantiate();

        w.rootVisualElement.Add(ui);
    }
}
```

## Additional resources

- [Load UXML and USS from C# scripts](UIE-manage-asset-reference.html)

- [UQuery](UIE-UQuery.html)

Load UXML and USS C# scripts

Find visual elements with UQuery
