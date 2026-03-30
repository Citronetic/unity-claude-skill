This version of Unity is unsupported.

USS built-in variable references

Apply styles in C# scripts

# Get custom styles in C# scripts

You can use the [`VisualElement.customStyle`](../ScriptReference/UIElements.VisualElement-customStyle.html) property to get the value of a [custom style property (variables)](UIE-USS-CustomProperties.html) applied to an element. However, you can’t directly query it as you would with [`VisualElement.style`](../ScriptReference/UIElements.VisualElement-style.html) or [`VisualElement.resolvedStyle`](../ScriptReference/UIElements.VisualElement-resolvedStyle.html). Instead, do the following:

1. Register to the [`CustomStyleResolvedEvent`](../ScriptReference/UIElements.CustomStyleResolvedEvent.html) event.

2. Call the [`TryGetValues`](../ScriptReference/UIElements.ICustomStyle.TryGetValue.html) method to query the returned object of the `element.customStyle` property.

Assume you have defined a custom style property `--my-custom-color` in USS like this:

```css
.my-selector
{
    --my-custom-color: red;
}
```

The following example class shows how to get the value of `--my-custom-color` applied to an element:

```cs
public class HasCustomStyleElement : VisualElement
{
    // Custom style property definition from code indicating the type and the name of the property.
    private static readonly CustomStyleProperty<Color> s_CustomColor = new ("--my-custom-color");

    private Color customColor { get; set; }

    public HasCustomStyleElement()
    {
        RegisterCallback<CustomStyleResolvedEvent>(OnCustomStyleResolved);
    }

    private void OnCustomStyleResolved(CustomStyleResolvedEvent evt)
    {
        // If the custom style property is resolved for this element, you can query its value through the `customStyle` accessor.
        if (evt.customStyle.TryGetValue(s_CustomColor, out var value))
        {
            customColor = value;
        }
        // Otherwise, put some default value.
        else
        {
            customColor = new Color();
        }
    }
}
```

## Additional resources

- [Manage UI asset references from C# scripts](UIE-manage-asset-reference.html)

- [Apply styles with C#](UIE-apply-styles-with-csharp.html)

- [`customStyle`](../ScriptReference/UIElements.VisualElement-customStyle.html)

- [`CustomStyleResolvedEvent`](../ScriptReference/UIElements.CustomStyleResolvedEvent.html)

- [`TryGetValues`](../ScriptReference/UIElements.ICustomStyle.TryGetValue.html)

USS built-in variable references

Apply styles in C# scripts
