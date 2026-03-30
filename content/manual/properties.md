This version of Unity is unsupported.

Web request low-level API reference

Property bags

# Adding functionality to objects at runtime

You can use the Unity Properties API to visit .Net objects at runtime. The Properties API is in the `Unity.Properties` namespace and it uses a [visitor design pattern](https://en.wikipedia.org/wiki/Visitor_pattern) to visit .Net objects at runtime. The visitor pattern is a design pattern that allows you to add new operations to an existing object structure without modifying the structure itself. You can build various functionalities on top of the visitor pattern, such as serialization, data migration, deep data comparisons, and data binding.

Unity Properties allows you to use visitors on any given type. You can use the Properties API to do the following:

- Create data types compatible with the Properties API

- Develop new property visitors and adapters for domain-specific use cases

| Topic | Description |
| --- | --- |
| Property bags | Understand the concept and performance considerations about property bags. |
| Property visitors | Understand the concept and performance considerations about property visitors. |
| Property paths | Understand the concept and performance considerations about property paths. |
| Use PropertyVisitor to create a property visitor | Learn how to use the PropertyVisitor base class to create a property visitor from an example. |
| Use low-level APIs to create a property visitor | Learn how to use the IPropertyBagVisitor and IPropertyVisitor interfaces to create a property visitor from an example. |

## Additional resources

- [Serialization](https://docs.unity3d.com/Packages/com.unity.serialization@latest)

- [Runtime data binding](UIE-runtime-binding.html)

Web request low-level API reference

Property bags
