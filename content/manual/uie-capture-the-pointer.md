This version of Unity is unsupported.

Dispatch events

Handle event callbacks and value changes

# Capture the pointer with a manipulator

When you handle pointer input, you might want the control to capture a pointer. When a **visual element**A node of a visual tree that instantiates or derives from the C# [`VisualElement`](../ScriptReference/UIElements.VisualElement.html) class. You can style the look, define the behaviour, and display it on screen as part of the UI. [More info](UIE-VisualTree.html)
See in [Glossary](Glossary.html#Visualelement) captures a pointer, Unity sends all the events associated with the pointer to the visual element regardless of whether the pointer hovers over the visual element. For example, if you create a control that receives drag events and captures the pointer, the control still receives drag events regardless of the pointer location.

The [`Manipulator`](../ScriptReference/UIElements.Manipulator.html) class provides a convenient way to capture the pointer. The `Manipulator` class is a base class for all manipulators. A manipulator is a class that handles pointer input and sends events to a visual element. For example, the [`Clickable`](../ScriptReference/UIElements.Clickable.html) class is a manipulator that sends a [`PointerDownEvent`](../ScriptReference/UIElements.PointerDownEvent.html) when the user clicks on a visual element. After a [`PointerDownEvent`](../ScriptReference/UIElements.PointerDownEvent.html), some elements must capture the pointer position to ensure it receives all subsequent pointer events, even when the cursor is no longer hovering over the element. For example, when you click on a button, slider, or scroll bar.

To capture the pointer, call [`PointerCaptureHelper.CapturePointer`](../ScriptReference/UIElements.PointerCaptureHelper.CapturePointer.html).

To release the pointer, call [`PointerCaptureHelper.ReleasePointer`](../ScriptReference/UIElements.PointerCaptureHelper.ReleasePointer.html). If another element is already capturing the pointer when you call `CapturePointer()`, the element receives a [`PointerCaptureOutEvent`](../ScriptReference/UIElements.PointerCaptureOutEvent.html) event and loses the capture.

Only one element in the application can have the capture at any moment. While an element has the capture, it’s the target of all subsequent pointer events except mouse wheel events. This only applies to pointer events that don’t already have a set target and rely on the dispatch process to determine the target.

For more information, see the [Capture events](UIE-Capture-Events.html).

## Additional resources

- [Capture events](UIE-Capture-Events.html)

- [Create a drag-and-drop UI inside a custom Editor window](UIE-create-drag-and-drop-ui.html)

- [Manipulators](UIE-manipulators.html)

- [Events reference](UIE-Events-Reference.html)

Dispatch events

Handle event callbacks and value changes
