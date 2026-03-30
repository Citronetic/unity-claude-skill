This version of Unity is unsupported.

Create a default Inspector

Support for runtime UI

# View data persistence

View data persistence preserves the view data associated with **visual elements**A node of a visual tree that instantiates or derives from the C# [`VisualElement`](../ScriptReference/UIElements.VisualElement.html) class. You can style the look, define the behaviour, and display it on screen as part of the UI. [More info](UIE-VisualTree.html)
See in [Glossary](Glossary.html#Visualelement) in the UI. View data refers to the state of the user interface that’s not part of the underlying data model of the UI. For example, view data could include the scroll position of a scroll bar or the selection of a list.

View data persistence addresses the issue of UI view data not persisting during certain events in the Editor:

- Domain reloads, such as when entering Play mode or changing a script

- Window closes or reopens, such as when changing the Editor layout

- Editor restarts

**Note**: View data persistence only works in the Editor UI.

To enable view data persistence for the elements that support it, set the view data key to a unique string within the Editor window (the `EditorWindow` type). You can set it in UI Builder, UXML, or C#:

- In UI Builder, set the key to the **View Data Key** field in the **Attributes** section of the element’s **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector) panel.

- In UXML, set the key with the `view-data-key` attribute.

- In C#, set the key with the [`viewDataKey`](../ScriptReference/UIElements.VisualElement-viewDataKey.html) property.

The following elements currently support view data persistence:

- [ScrollView](UIE-uxml-element-ScrollView.html)A UI Control which displays a large set of Controls in a viewable area that you can see by using a scrollbar. [More info](UIE-uxml-element-ScrollView.html)
See in [Glossary](Glossary.html#ScrollView)

- [ListView](UIE-uxml-element-ListView.html)

- [Foldout](UIE-uxml-element-Foldout.html)

- [TreeView](UIE-uxml-element-TreeView.html)

- [MultiColumnListView](UIE-uxml-element-MultiColumnListView.html)

- [MultiColumnTreeView](UIE-uxml-element-MultiColumnTreeView.html)

- [TabView](UIE-uxml-element-TabView.html)
When you enable the view data persistence, those elements remember their internal view state:

- For ScrollView, it remembers the scroll position.

- For ListView, it remembers the selection.

- For Foldout, it remembers the expanded state.

- For TreeView, it remembers the selection.

- For MultiColumnTreeView and MultiColumnListView, it remembers the selections and columns’ order, sorting and width.

- For TabView, it remembers the selected tab.

To enable view data persistence for [a read-only element](UIB-structuring-ui-elements.html#read-only-elements), set the view data key on the parent element.

For example, a ScrollView has several read-only [Scroller](UIE-uxml-element-Scroller.html) child elements. Each Scroller is given a view data key that’s unique within the ScrollView element. If you set a view data key for the Foldout, the Foldout has its view data persisted. Although Scrollers have keys, their view data isn’t persisted. You must set a view data key for their parent ScrollView to enable persistence. The Scrollers will combine their view data keys with the parent’s view data key to create a unique global view data key.

**Note**: Currently, the API necessary to add support for view data persistence is internal, which means you can’t enable view data persistence for your [custom controls](UIE-create-custom-controls.html).

## Additional resources

- [`viewDataKey`](../ScriptReference/UIElements.VisualElement-viewDataKey.html)

Create a default Inspector

Support for runtime UI
