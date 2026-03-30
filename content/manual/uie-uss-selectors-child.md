This version of Unity is unsupported.

Descendant selectors

Multiple selectors

# Child selectors

USS child selectors match elements that are the child of another element in the [visual tree](UIE-VisualTree.html)An object graph, made of lightweight nodes, that holds all the elements in a window or panel. It defines every UI you build with the UI Toolkit.
See in [Glossary](Glossary.html#Visualtree).

## Syntax

A child selector consists of multiple simple selectors separated by `>`.

```css
selector1 > selector2 {...}
```

You can include the wildcard selector in complex selectors. For example, the following USS rule uses the wildcard selector in a [child selector](UIE-USS-Selectors-child.html). This USS rule matches buttons that are children of elements that are children of an element with the USS class `yellow` assigned to it.

```css
.yellow > * > Button{..}
```

**Note**: USS doesn’t support selecting the nth child of elements with the same name. Use [class selectors](UIE-USS-Selectors-class.html) or unique element names instead.

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

The following child selector style rule matches only the inner element. Element `#OK` with the `.yellow` class is a child of element `#container2`. `#container2` is child of element `#container1`. However, because `#OK` is not a direct descendant of `#container1`, it doesn’t match the `.yellow` selector when applied with a child selector from `#container1`.

```css
#container1 > .yellow {
  background-color: yellow;
}
```

The UI looks like the following when you apply the style:

[Image: The container2 has a yellow background color.]
The container2 has a yellow background color.

## Additional resources

- [Best practices for USS](UIE-USS-WritingStyleSheets.html)

Descendant selectors

Multiple selectors
