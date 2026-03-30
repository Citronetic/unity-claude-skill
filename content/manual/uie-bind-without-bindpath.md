This version of Unity is unsupported.

Bind with binding path in C# script

Bind with UXML and C# script

# Bind without the binding path

**Version**: 2021.3+

You can call [`BindProperty()`](../ScriptReference/UIElements.BindingExtensions.BindProperty.html) to bind an element to a `SerializedProperty` object directly, instead of with the binding path. This example demonstrates how to bind with [`BindProperty()`](../ScriptReference/UIElements.BindingExtensions.BindProperty.html).

## Example overview

This example creates a custom Editor window to change the name of a **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject).

[Image: A custom Unity Editor window which allows you to change a GameObjects name.]
A custom Unity Editor window which allows you to change a GameObject’s name.

You can find the completed files that this example creates in this [GitHub repository](https://github.com/Unity-Technologies/ui-toolkit-manual-code-examples/tree/master/bind-without-binding-path).

## Prerequisites

This guide is for developers familiar with the Unity Editor, UI Toolkit, and C# scripting. Before you start, get familiar with the following:

- [`BindProperty`](../ScriptReference/UIElements.BindingExtensions.BindProperty.html)

## Bind with `BindProperty()`

Create a custom Editor window in C# with a TextField. Find the name property of a GameObject and bind to the property directly with the [`BindProperty()`](../ScriptReference/UIElements.BindingExtensions.BindProperty.html) method.

1. In your **Project window**A window that shows the contents of your `Assets` folder (Project tab) [More info](ProjectView.html)
See in [Glossary](Glossary.html#Projectwindow), create a folder named `bind-without-binding-path` to store your file.

2. In the **bind-without-binding-path** folder, create a folder named `Editor`.

3. In the **Editor** folder, create a C# script named `SimpleBindingPropertyExample.cs` and replace its contents with the following:

```cs
using UnityEditor;
using UnityEngine;
using UnityEditor.UIElements;
using UnityEngine.UIElements;

namespace UIToolkitExamples
{
    public class SimpleBindingPropertyExample : EditorWindow
    {
        TextField m_ObjectNameBinding;

        [MenuItem("Window/UIToolkitExamples/Simple Binding Property Example")]
        public static void ShowDefaultWindow()
        {
            var wnd = GetWindow<SimpleBindingPropertyExample>();
            wnd.titleContent = new GUIContent("Simple Binding Property");
        }

        public void CreateGUI()
        {
            m_ObjectNameBinding = new TextField("Object Name Binding");
            rootVisualElement.Add(m_ObjectNameBinding);
            OnSelectionChange();
        }

        public void OnSelectionChange()
        {
            GameObject selectedObject = Selection.activeObject as GameObject;
            if (selectedObject != null)
            {
                // Create the SerializedObject from the current selection
                SerializedObject so = new SerializedObject(selectedObject);

                // Note: the "name" property of a GameObject is actually named "m_Name" in serialization.
                SerializedProperty property = so.FindProperty("m_Name");
                // Bind the property to the field directly
                m_ObjectNameBinding.BindProperty(property);
            }
            else
            {
                // Unbind any binding from the field
                m_ObjectNameBinding.Unbind();
            }
        }
    }
}
```

## Test the binding

1. In Unity, select **Window** > **UIToolkitExamples** > **Simple Binding Property Example**. A custom Editor window appears with a text field.

2. Select a GameObject in your **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene). The name of the GameObject appears in your Editor window’s text field. If you change the name of the GameObject in the text field, the name of the GameObject changes.

## Additional resources

- [SerializedObject data binding](UIE-Binding.html)

- [Bindable elements](UIE-bindable-elements.html)

- [Binding data type conversion](UIE-binding-data-type-conversion.html)

- [Implementation details](UIE-binding-implementation-details.html)

- [Binding examples](UIE-binding-examples.html)

Bind with binding path in C# script

Bind with UXML and C# script
