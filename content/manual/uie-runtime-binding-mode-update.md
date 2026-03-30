This version of Unity is unsupported.

Define a data source for runtime binding

Convert data types

# Define binding mode and update trigger

To define how changes are replicated between the data source and the UI, you can set the binding mode and update triggers for a binding object. You can set the binding mode and update triggers in UI Builder, UXML, or C#.

## Define binding modes

[Binding modes](../ScriptReference/UIElements.BindingMode.html) configure how changes are replicated between the data source and the UI. The following binding modes are available:

- **TwoWay**: Changes are replicated from the data source to the UI and from the UI to the data source. This is the default binding mode.

- **ToTarget**: Changes are replicated from the data source to the UI only.

- **ToSource**: Changes are replicated from the UI to the data source only.

- **ToTargetOnce**: Changes are replicated from the data source to the UI only once, unless it’s [marked as dirty](../ScriptReference/UIElements.Binding.MarkDirty.html).

**Tip**: Ensure that you set the appropriate binding mode based on your needs. For example, to prevent changes in the UI from being reflected in the source or if the UI is read-only, set the `bindingMode` to `BindingMode.ToTarget`.

## Define update triggers

You can update binding objects on every frame or when a change occurs in the data source. The following update triggers are available:

- Every frame

- On change detection or every frame if change detection is impossible. Refer to [Define data sources](UIE-runtime-binding-define-data-source.html) for more details.

- When explicitly marked as [`dirty`](../ScriptReference/UIElements.Binding-isDirty.html)

To define update triggers, use the following properties:

- [`MarkDirty`](../ScriptReference/UIElements.Binding.MarkDirty.html): Sets the binding object as [`dirty`](../ScriptReference/UIElements.Binding-isDirty.html), so that it gets updated during the next cycle.

- [`updateTrigger`](../ScriptReference/UIElements.Binding-updateTrigger.html): Updates a binding object on every frame, regardless of the data source version.

**Note**: Don’t keep binding types per-element state. You can use a binding instance across multiple elements and properties simultaneously. During updates and callbacks, the binding system passes in a context object that contains the target element, binding ID, and relevant data. You can use this context object to store the per-element state.

## Additional resources

- [Runtime data binding](UIE-runtime-binding.html)

- [Create runtime data binding](UIE-runtime-binding-types.html)

- [Define a data source](UIE-runtime-binding-define-data-source.html)

- [Convert data types](UIE-runtime-binding-data-type-conversion.html)

- [Define logging levels](UIE-runtime-binding-logging-levels.html)

- [Create custom binding types](UIE-runtime-binding-custom-types.html)

Define a data source for runtime binding

Convert data types
