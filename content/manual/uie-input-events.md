This version of Unity is unsupported.

Focus events

Keyboard events

# Input events

The `InputEvent` is sent when the user submits text into a text field. This event updates when there is a change in focus, such as a `PointerCaptureOutEvent` that on a touch screen.

For default keyboard inputs, the `inputEvent` fires for each keystroke. `InputEvent` doesn’t fire when the TextField populates from an indirect source, such as an automated script.

| Event | Description | Trickles down | Bubbles up | Cancellable |
| --- | --- | --- | --- | --- |
| InputEvent | Sent when data is input to a visual elementA node of a visual tree that instantiates or derives from the C# VisualElement class. You can style the look, define the behaviour, and display it on screen as part of the UI. More infoSee in Glossary, typically a control. |  |  |  |

## Unique properties

**`previousData`**: The former data.

**`newData`**: The new data.

## Event list

### InputEvent

Event sent when data is input to visual elements that implement [TextInputBaseField](../ScriptReference/UIElements.TextInputBaseField_1.html). This event differs from `ChangeEvent` in that it’s sent for every input event in the control, even if the value of the control hasn’t changed.

**`target`**: The element where the input occurred.

Focus events

Keyboard events
