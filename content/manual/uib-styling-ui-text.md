This version of Unity is unsupported.

Get started with text

Style text with rich text tags

# Style text with USS

You can style text with USS text properties inline in [UXML](UIE-UXML.html), a [USS](UIE-USS.html) file, or directly in [UI Builder](UIBuilder.html). To learn more about USS text properties, refer to [Text properties](UIE-USS-SupportedProperties.html#unity-text).

## Style text in USS and UXML

[Text properties](UIE-USS-SupportedProperties.html#unity-text) are regular USS style properties. You can set text style properties on any element. Unlike most USS style properties, text style properties propagate to child elements.

The following USS example styles the `Label` text to bold and italic, and has a font size of `39px`:

```uss
Label {
    -unity-font-style: bold-and-italic;
    font-size: 39px;
}
```

The following UXML inline style example applies the same style to the `Label` text:

```xml
<ui:UXML xmlns:ui="UnityEngine.UIElements" xmlns:uie="UnityEditor.UIElements">
    <ui:VisualElement>
        <ui:Label text="Label" style="-unity-font-style: bold-and-italic; font-size: 39px;" />
    </ui:VisualElement>
</ui:UXML>
```

## Style text in UI builder

To style text in UI Builder, you can use the **Text** section in a UI control’s **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector) window to style text.

If the UI control is a text element that inherits from [TextElement](UIE-uxml-element-TextElement.html), such as [Label](UIE-uxml-element-Label.html) or [Button](UIE-uxml-element-Button.html), you can also set the following text styles directly in the **Canvas** on selected text elements:

- Horizontal text align

- Vertical text align

- Text wrap

[Image: Text styles are exposed as toggles in the Canvas on selected elements]
Text styles are exposed as toggles in the Canvas on selected elements

## Additional resources

- [Get started with text](UIE-get-started-with-text.html)

- [Text effects](UIE-text-effects.html)

- [Font assets](UIE-font-asset.html)

- [Rich text tags](UIE-rich-text-tags.html)

- [Style sheet assets](UIE-style-sheet.html)

- [Include sprites in text](UIE-sprite.html)

Get started with text

Style text with rich text tags
