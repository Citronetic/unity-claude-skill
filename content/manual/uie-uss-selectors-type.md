This version of Unity is unsupported.

USS selectors

Name selectors

# Type selectors

USS type selectors match elements based on their element types. USS type selectors are analogous to CSS type selectors that match HTML tags. For example, `Button {...}` in USS matches any [Button](UIE-uxml-element-Button.html) elements in the same way that `p {...}` in CSS matches any paragraph (`<p>`) tag.

## Syntax

The following is the syntax for a type selector:

```css
TypeName { ... }
```

When you write type selectors, specify only the concrete object type. Don’t include the namespace in the type name.

For example, this selector is valid:

```css
Button { ... }
```

This selector is invalid:

```css
UnityEngine.UIElements.Button { ... }
```

## Example

To demonstrate how simple selectors match elements, here is an example UI Document.

```xml
<UXML xmlns="UnityEngine.UIElements">
  <VisualElement name="container1">
    <VisualElement name="container2" class="yellow">
      <Button name="OK" class="yellow" text="OK" />
      <Button name="Cancel" text="Cancel" />
    </VisualElement>
  </VisualElement>
</UXML>
```

With no styles applied, the UI looks like the following:

[Image: Example buttons with margins and thin blue borders.]
Example buttons with margins and thin blue borders.

The following type selector style rule matches the two `Button` elements:

```css
Button {
  border-radius: 8px;
  width: 100px;
  }
```

The UI looks like the following when you apply the style:

[Image: Example buttons with border radius and specific width.]
Example buttons with border radius and specific width.

## Additional resources

- [Best practices for USS](UIE-USS-WritingStyleSheets.html)

USS selectors

Name selectors
