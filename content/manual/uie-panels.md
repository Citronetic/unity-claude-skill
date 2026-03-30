This version of Unity is unsupported.

Introduction to visual elements and the visual tree

Draw order

# Panels

The panel is the parent object of a [visual tree](UIE-VisualTree.html)An object graph, made of lightweight nodes, that holds all the elements in a window or panel. It defines every UI you build with the UI Toolkit.
See in [Glossary](Glossary.html#Visualtree). It owns the `rootVisualElement` but itself isn’t a **visual element**A node of a visual tree that instantiates or derives from the C# [`VisualElement`](../ScriptReference/UIElements.VisualElement.html) class. You can style the look, define the behaviour, and display it on screen as part of the UI. [More info](UIE-VisualTree.html)
See in [Glossary](Glossary.html#Visualelement). A visual tree must connect to a panel for the visual elements inside a tree to render. All panels belong to either an [Editor Window](../ScriptReference/EditorWindow.html) or a runtime [UIDocument](../ScriptReference/UIElements.UIDocument.html). The panel also handles focus control and event dispatching for the visual tree.

Every element in a visual tree holds a direct reference to the panel that holds the visual tree. To verify the connection of a [`VisualElement`](../ScriptReference/UIElements.VisualElement.html) to a panel, you can test the [`panel`](../ScriptReference/UIElements.VisualElement-panel.html) property of this element. When the visual element isn’t connected, the test returns `null`.

## Additional resources

- [Dispatch events](UIE-Events-Dispatching.html)

- [The visual tree](UIE-VisualTree.html)

- [The Panel Settings asset](UIE-Runtime-Panel-Settings.html)

- [Relative and absolute positioning C# example](UIE-relative-absolute-positioning-example.html)

Introduction to visual elements and the visual tree

Draw order
