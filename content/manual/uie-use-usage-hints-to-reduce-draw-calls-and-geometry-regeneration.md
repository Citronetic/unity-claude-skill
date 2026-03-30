This version of Unity is unsupported.

Performance consideration for runtime UI

Control textures of the dynamic atlas

# Optimize performance of moving elements at runtime

When you move a large amount of elements at runtime, performance optimization is crucial, especially for applications requiring smooth and responsive interactions.

Certain CSS properties, such as top, left, width, height, or flex, can trigger layout recalculations when updated. These recalculations dirty the layout and might cascade updates across multiple elements, significantly impacting rendering performance. Use these properties sparingly and only when absolutely necessary.

## Best practices for moving elements

The most performance-efficient way to move elements is to use the [`style.translate`](UIE-Transform.html) property. This property adjusts an element’s position dynamically without recalculating the layout. Unlike other positioning methods, `style.translate` operates at the transform stage. It minimizes the computational overhead and improves rendering performance by reducing dependency on CPU-intensive processes.

## Use usage hints to reduce draw calls and geometry regeneration

To further enhance performance, leverage usage hints to optimize how elements are processed during runtime. Usage hints help:

- Reduce draw calls.

- Avoid unnecessary geometry regeneration.

If the transform of the element, such as position, rotation, or scale, changes frequently, set usage hint to `DynamicTransform`. This pushes transform updates directly to the GPU, bypassing CPU **mesh**The main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. [More info](mesh.html)
See in [Glossary](Glossary.html#Mesh) updates and improving performance.

You can set the usage hints in UI Builder, UXML, or C#. The following examples set the usage hints to `DynamicTransform`:

**UXML**:

```xml
<ui:VisualElement usage-hints="DynamicTransform" />
```

**C#**:

```cs
visualElement.usageHints = UsageHints.DynamicTransform;
```

The supported usage hints are:

- [`DynamicTransform`](../ScriptReference/UIElements.UsageHints.DynamicTransform.html)

- [`GroupTransform`](../ScriptReference/UIElements.UsageHints.GroupTransform.html)

- [`MaskContainer`](../ScriptReference/UIElements.UsageHints.MaskContainer.html)

- [`DynamicColor`](../ScriptReference/UIElements.UsageHints.DynamicColor.html)

## Flow of updating and rendering a visual element

The following diagram illustrates the flow of updating and rendering a **visual element**A node of a visual tree that instantiates or derives from the C# [`VisualElement`](../ScriptReference/UIElements.VisualElement.html) class. You can style the look, define the behaviour, and display it on screen as part of the UI. [More info](UIE-VisualTree.html)
See in [Glossary](Glossary.html#Visualelement) at runtime:

[Image: Flow of updating and rendering a visual element]
Flow of updating and rendering a visual element

For an example that optimizes rendering and updates for frequently changing elements at runtime, refer to [Move elements at runtime](UIE-move-elements-at-runtime.html).

## Additional resources

- [`usageHints`](../ScriptReference/UIElements.UsageHints.html)

- [`VisualElement.usageHints`](../ScriptReference/UIElements.VisualElement-usageHints.html)

- [Move elements at runtime](UIE-move-elements-at-runtime.html)

Performance consideration for runtime UI

Control textures of the dynamic atlas
