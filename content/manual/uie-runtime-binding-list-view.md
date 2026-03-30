This version of Unity is unsupported.

Create a custom binding to bind USS selectors

SerializedObject data binding

# Bind ListView to a list with runtime binding

**Version**: 6000+

The ListView control is the most efficient way to create lists. This example demonstrates how to use runtime binding to bind a ListView to a list. Runtime binding supports both runtime and Editor UI. For demonstration purposes, this example displays the ListView in an Editor window.

## Example overview

The example creates a ListView and a list. To bind the ListView to the list, set the binding data source of the ListView to the property that contains the list.

You can find the completed files that this example creates in this [GitHub repository](https://github.com/Unity-Technologies/ui-toolkit-manual-code-examples/tree/2023/runtime-binding-listview).

## Prerequisites

This guide is for developers familiar with the Unity Editor, UI Toolkit, and C# scripting. Before you start, get familiar with the following:

- [UI Builder](UIBuilder.html)

- [UXML](UIE-UXML.html)

- [Runtime data binding](UIE-runtime-binding.html)

- [UXML element ListView](UIE-uxml-element-ListView.html)

## Create an object with a list

Create an example `List` object that has a list of `Item` objects. Each `Item` contains a `name` and an `enabled` property.

1. Create a Unity project with any template.

2. In your **Project** window, create a folder named `runtime-binding-listview` to store all your files.

3. In the `runtime-binding-listview` folder, create a folder named `Scripts` to store all your C# **scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](creating-scripts.html)
See in [Glossary](Glossary.html#Scripts).

4. In the `Scripts` folder, create a C# script named `ExampleItemObject.cs` with the following contents:

```cs
using System;
   using System.Collections.Generic;
   using UnityEngine;

   public class ExampleItemObject
   {
       public List<Item> items = new();

       public void Reset()
       {
           items = new List<Item>{
               new() { name = "Use Local Server", enabled = false },
               new() { name = "Show Debug Menu", enabled = false },
               new() { name = "Show FPS Counter", enabled = true },
           };
       }

       public struct Item
       {
           public bool enabled;
           public string name;
       }
   }
```

## Create the ListView item template in UI Builder

Create the template of the list item in UI Builder. Each item contains a Toggle and a TextField. Bind them to the `enabled` and `name` properties of the `Item` object.

1. In the `runtime-binding-listview` folder, create a folder named `UXML`.

2. In the `UXML` folder, create a UXML file named `ListViewItem.uxml`.

3. Double-click the `ListViewItem.uxml` file to open it in UI Builder.

4. In the **Hierarchy** panel, add a **VisualElement**.

5. Add a **Toggle** as a child of **VisualElement**.

6. Add a **TextField** as a child **VisualElement**.

7. Remove the label text for the **Toggle** and **TextField**.

8. Set the **Flex direction** of the **VisualElement** to `Row`.

9. In the ****Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector)** panel of the **Toggle**, do the following:

10. Right-click **Value** and select **Add binding**.

11. In the **Add Binding** window, set **Data Source Path** to `enabled`.

12. Set **Binding Mode** to `To Target`. This means that changes to the `enabled` property of the `Item` object update the Toggle in the UI.

13. In the **Inspector** panel of the **TextField**, do the following:

- Right-click **Value** and select **Add binding**.

- In the **Add Binding** window, set **Data Source Path** to `name`.

- Set **Binding Mode** to `To Target`. This means that changes to the `name` property of the `Item` object update the TextField in the UI.

14. Save the UXML file. The finished UXML file looks like the following:

```xml
<ui:UXML xmlns:ui="UnityEngine.UIElements">
       <ui:VisualElement name="VisualElement" style="flex-direction: row;">
           <ui:Toggle>
               <Bindings>
                   <ui:DataBinding property="value" data-source-path="enabled"  />
               </Bindings>
           </ui:Toggle>
           <ui:TextField placeholder-text="filler text">
               <Bindings>
                   <ui:DataBinding property="value" data-source-path="name"  />
               </Bindings>
           </ui:TextField>
       </ui:VisualElement>
   </ui:UXML>
```

## Create the ListView UI in UI Builder

Create the ListView UI in UI Builder, and set the item template to `ListViewItem.uxml`.

1. In the `UXML` folder, create a UXML file named `UIListView.uxml`.

2. Double-click the `UIListView.uxml` file to open it in UI Builder.

3. In the **Hierarchy** panel, add a **ListView**.

4. In the **Inspector** panel of the **ListView**, do the following:

5. Set **Item Template** to `ListViewItem.uxml`.

6. Set **Binding Source Selection Mode** to **Auto Assign**. This lets the system automatically determine the appropriate data source for binding list items.

7. Save the UXML file. The finished UXML file looks like the following:

```xml
<ui:UXML xmlns:ui="UnityEngine.UIElements">
       <ui:ListView binding-source-selection-mode="AutoAssign" item-template="ListViewItem.uxml" />
   </ui:UXML>
```

## Create a custom Editor window and set the binding

Create a custom Editor window that contains the ListView and bind it to the `items` property of `List`.

1. In the `Scripts` folder, create a folder named `Editor`.

2. In the `Editor` folder, create a C# script named `ListViewTestWindow.cs` with the following contents:

```cs
using UnityEngine;
using UnityEngine.UIElements;
using UnityEditor;
using UnityEditor.UIElements;
using System.Collections.Generic;
using Unity.Properties;

internal class ListViewTestWindow : EditorWindow
{
    // This example sets the itemTemplate and bindingSourceSelectionMode in the UXML file.
    // If you want to set them in the C# script, declare an itemLayout field of type VisualTreeAsset
    // and then set the "Item Layout" to "ListViewItem.uxml" in the Inspector window.
    //[SerializeField] private VisualTreeAsset itemLayout;
    [SerializeField] private VisualTreeAsset editorLayout;

    ExampleItemObject m_ExampleItemObject;

    [MenuItem("Window/ListViewTestWindow")]
    static void Init()
    {
        ListViewTestWindow window = EditorWindow.GetWindow<ListViewTestWindow>();
        window.Show();
    }

    void CreateGUI()
    {
        m_ExampleItemObject = new();

        editorLayout.CloneTree(rootVisualElement);
        var listView = rootVisualElement.Q<ListView>();

        // This example sets the itemTemplate and bindingSourceSelectionMode in the UXML file.
        // You can also set them in the C# script like the following:
        // listView.itemTemplate = itemLayout;
        // listView.bindingSourceSelectionMode = BindingSourceSelectionMode.AutoAssign;

        // Set the binding source to the ExampleItemObject instance.
        listView.dataSource = m_ExampleItemObject;

        // Set the itemsSource binding to the items property of the List object.
        // You can also set the itemsSource binding manually in the UXML file and comment out this line.
        // Refer to the next section for how to set binding in UXML.
        listView.SetBinding("itemsSource", new DataBinding() {dataSourcePath = new PropertyPath("items")});

        m_ExampleItemObject.Reset();
    }
}
```

3. In the **Project** window, select the `ListViewTestWindow.cs` script.

4. In the **Inspector** window, set the **Editor Layout** to `UIListView`.

5. To test the binding, from the menu, select **Window** > **ListViewTestWindow**. The Editor window displays a ListView bound to the items defined in the `ExampleItemObject.cs`. If you update the values of the `enabled` or `name` properties for the `Item` in `ExampleItemObject.cs`, the changes are automatically reflected in the ListView.

## Set the `itemsSource` binding in UXML

The previous section sets the `itemsSource` in the C# script. `iList` isn’t serializable, so [`itemsSource`](../ScriptReference/UIElements.BaseVerticalCollectionView-itemsSource.html) doesn’t appear in the **Inspector** panel for the ListView. You can’t set the binding in UI Builder. However, you can manually bind `itemsSource` in UXML. To do this, add a `<Bindings>` tag inside `<ui:ListView>`:

```xml
<ui:ListView>
   <Bindings>
      <ui:DataBinding property="itemsSource" data-source-path="items" />
   </Bindings>
</ui:ListView>
```

**Note**: In your UXML file, make sure to remove the `engine="UnityEngine.UIElements"` and `editor="UnityEditor.UIElements"` attributes from the `<ui:UXML>` tag if you have them. These attributes set the default namespace, which breaks the `<Bindings>` tag because `Bindings` isn’t a type, but a field.

## Additional resources

- [`ListView`](../ScriptReference/UIElements.ListView.html)

- [Bind to a list](UIE-bind-to-list.html)

- [Create a custom Editor window with C# script](UIE-HowTo-CreateEditorWindow.html)

- [Create custom binding to bind USS](UIE-runtime-custom-binding-bind-uss.html)

Create a custom binding to bind USS selectors

SerializedObject data binding
