This version of Unity is unsupported.

Panels

Coordinate and position systems

# Draw order

The draw order of elements in the **visual tree**An object graph, made of lightweight nodes, that holds all the elements in a window or panel. It defines every UI you build with the UI Toolkit.
See in [Glossary](Glossary.html#Visualtree) follows a depth-first search. Child **visual elements**A node of a visual tree that instantiates or derives from the C# [`VisualElement`](../ScriptReference/UIElements.VisualElement.html) class. You can style the look, define the behaviour, and display it on screen as part of the UI. [More info](UIE-VisualTree.html)
See in [Glossary](Glossary.html#Visualelement) appear on top of parent elements. UI Toolkit draws child elements in the order of the sibling list. The draw order is the following:

1. The top visual element.

2. The first child element of that visual element.

3. The child elements of the descendant element.

The diagram below shows the draw order of a visual tree:

[Image: Visual element draw order]
Visual element draw order

To change the draw order of visual elements in C#, use the following functions:

- [BringToFront()](../ScriptReference/UIElements.VisualElement.BringToFront.html)

- [SendToBack()](../ScriptReference/UIElements.VisualElement.SendToBack.html)

To change the draw order of sibling visual elements, use the following functions:

- [PlaceBehind()](../ScriptReference/UIElements.VisualElement.PlaceBehind.html)

- [PlaceInFront()](../ScriptReference/UIElements.VisualElement.PlaceInFront.html)

Panels

Coordinate and position systems
