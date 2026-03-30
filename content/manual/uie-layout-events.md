This version of Unity is unsupported.

Drag-and-drop events

Focus events

# Layout events

[`GeometryChangedEvent`](../ScriptReference/UIElements.GeometryChangedEvent.html) is currently the only layout event.

The base class for `GeometryChangedEvent` is the [EventBase](../ScriptReference/UIElements.EventBase.html) class.

| Event | Description | Trickles down | Bubbles up | Cancellable |
| --- | --- | --- | --- | --- |
| GeometryChangedEvent | Sent when the position or the dimensions of an element changes. |  |  |  |

## Unique properties

**`oldRect`**: The former position and dimensions of the element.

**`newRect`**: The new position and dimensions of the element.

## GeometryChangedEvent

The `GeometryChangedEvent` is sent when either the position or the dimensions of an element changes. Events of this type are only sent to the event target.

It’s important to unregister from the `GeometryChangedEvent` event after you receive your callback, as additional layout changes will trigger the callback again.

**`target`**: The element with a new geometry.

Drag-and-drop events

Focus events
