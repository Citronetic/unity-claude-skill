This version of Unity is unsupported.

Create a custom control

Define UXML attributes for built-in types

# Customize the custom control UXML tag name

By default, the tag name in UXML for your custom control is the C# class name. While it’s not recommended to use a different tag name, you can customize it if needed.

To customize a UXML tag name, add a [`name`](../../ScriptReference/UIElements.UxmlElementAttribute-name.html) argument to the [`UxmlElement`](../../ScriptReference/UIElements.UxmlElementAttribute.html) attribute.

**Note**: The tag name must be unique and you must reference the classes’ namespace in UXML.

For example, if you create the following custom button:

```cs
using UnityEngine.UIElements;

namespace MyNamespace
{
    [UxmlElement("MyButton")]
    public partial class CustomButtonElement : Button
    {
    }
}
```

You can then reference the custom button in UXML with the custom name or the C# class name:

```xml
<ui:UXML xmlns:ui="UnityEngine.UIElements">
    <MyNamespace.MyButton />
    <MyNamespace.CustomButtonElement />
</ui:UXML>
```

## Additional resources

- [Create custom controls](../UIE-create-custom-controls.html)

Create a custom control

Define UXML attributes for built-in types
