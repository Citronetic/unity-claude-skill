This version of Unity is unsupported.

Layout events

Input events

# Focus events

Focus events occur when an element gains or loses focus.

Focus events are useful when you need to change focus to and away from **visual elements**A node of a visual tree that instantiates or derives from the C# [`VisualElement`](../ScriptReference/UIElements.VisualElement.html) class. You can style the look, define the behaviour, and display it on screen as part of the UI. [More info](UIE-VisualTree.html)
See in [Glossary](Glossary.html#Visualelement). Controls often use focus events to change their contents, depending on the focus state. For example, a text field can display placeholder text while it isn’t in focus, or it can react to the `FocusInEvent` to clear the placeholder text.

Focus can change on a visual element from user interactions, such as tabbing or clicking, or using C# **scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](creating-scripts.html)
See in [Glossary](Glossary.html#Scripts) with `element.Focus()`.

Focus events separate into two distinct types:

- `FocusOutEvent` and `FocusInEvent` are sent along the propagation path just before a focus change occurs.

- `FocusEvent` and `BlurEvent` are sent to the event target, immediately after the change in focus.

The base class for all focus events is [FocusEventBase](../ScriptReference/UIElements.FocusEventBase_1.html).

| Event | Description | Trickles down | Bubbles up | Cancellable |
| --- | --- | --- | --- | --- |
| FocusOutEvent | Sent before an element loses focus. | ✔ | ✔ |  |
| FocusInEvent | Sent before an element gains focus. | ✔ | ✔ |  |
| BlurEvent | Sent after an element has lost focus. | ✔ |  |  |
| FocusEvent | Sent after an element has gained focus. | ✔ |  |  |

## Unique properties

The following section explains relevant properties unique to focus events. This isn’t a complete list of all properties within the focus event family. For a full list, refer to [FocusEventBase](../ScriptReference/UIElements.FocusEventBase_1.html).

**`relatedTarget`**: Contains the visual element that’s the secondary target of an event. For `FocusOut` and `Blur` events, it contains the element that gains focus. For `FocusIn` and `Focus` events, it contains the element that loses focus.

| Event | target | relatedTarget |
| --- | --- | --- |
| Blur | The element that loses focus. | The element that gains focus. |
| Focus | The element that gains focus. | The element that loses focus. |
| focusIn | The element that gains focus. | The element that loses focus. |
| focusOut | The element that loses focus. | The element that gains focus. |

## Event list

### FocusOutEvent

The `FocusOutEvent` is sent when an element is about to lose focus.

**`target`**: The element that will lose focus.

**`relatedTarget`**: The element that will gain focus.

### FocusInEvent

The `FocusInEvent` is sent when an element is about to gain focus.

**`target`**: The element that will gain focus.

**`relatedTarget`**: The element that will lose focus.

### BlurEvent

The `BlurEvent` is sent after an element lost focus.

**`target`**: The element that lost focus.

**`relatedTarget`**: The element that gained focus.

### FocusEvent

The `FocusEvent` is sent after an element gained focus.

**`target`**: The element that gained focus.

**`relatedTarget`**: The element that lost focus.

## Examples

The following example shows how to use placeholder text in a text field. When the text field is in focus, `FocusInEvent` fires and clears the placeholder text. `FocusOutEvent` toggles the placeholder mode based on the text field contents.

```cs
using UnityEditor;
using UnityEngine;
using UnityEngine.UIElements;

public class PlaceHolderExample : EditorWindow
{
    [MenuItem("Window/UI Toolkit/PlaceHolderExample")]
    public static void ShowExample()
    {
        PlaceHolderExample wnd = GetWindow<PlaceHolderExample>();
        wnd.titleContent = new GUIContent("PlaceHolderExample");
    }

    // Tracks whether the placeholder text is currently shown.
    private bool placeHolderMode = true;
    // The placeholder text to display when the field is empty.
    private const string placeHolderText = "Write here";

    public void CreateGUI()
    {
        // Create a new TextField and set its value to the placeholder text.
        TextField textField = new TextField();
        textField.value = placeHolderText;
        rootVisualElement.Add(textField);

        // Register callbacks for focus in and out events to manage placeholder behavior.
        textField.RegisterCallback<FocusInEvent>(OnFocusInTextField);
        textField.RegisterCallback<FocusOutEvent>(OnFocusOutTextField);
    }

    // Called when the TextField receives focus.
    private void OnFocusInTextField(FocusInEvent evt)
    {
        // If the placeholder is active, clear the text so the user can start typing.
        if (placeHolderMode)
        {
            var textField = evt.target as TextField;
            if (textField != null)
            {
                textField.value = "";
            }
        }
    }

    // Called when the TextField loses focus.
    private void OnFocusOutTextField(FocusOutEvent evt)
    {
        // If the field is empty after losing focus, restore the placeholder text.
        var textField = evt.currentTarget as TextField;
        if (textField != null)
        {
            placeHolderMode = string.IsNullOrEmpty(textField.value);
            if (placeHolderMode)
                textField.value = placeHolderText;
        }
    }
}
```

## Additional resources

- [Focus system in UI Toolkit](UIE-focus-order.html)

Layout events

Input events
