This version of Unity is unsupported.

Binding system implementation details

Bind with binding path in C# script

# Binding examples

Learn Editor data binding from examples.

## Basic Editor binding examples

| Topics | Description |
| --- | --- |
| Bind with binding path in C# script | Use bindingPath to create a binding that changes the name of a GameObjectThe fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. More infoSee in Glossary in a custom Editor window. |
| Bind without the binding path | Use BindProperty() to create a binding that changes the name of a GameObject in a custom Editor window. |
| Bind with UXML and C# | Create a binding and set the binding path in UXML, and bind with Bind() in C#. |
| Create a binding with the Inspector | Create a binding that binds among a custom InspectorA Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. More infoSee in Glossary, a custom Editor, and serialized objects. |
| Bind to nested properties | Use the binding-path attribute of a BindableElement in UXML to bind fields to nested properties of a SerializedObject |
| Bind to a UXML template | Create a binding and set binding paths with UXML templates. |
| Receive callbacks when a bound property changes | Creates a custom Editor window with a TextField that binds to the name of a GameObject in a sceneA Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. More infoSee in Glossary. |
| Receive callbacks when any bound properties change | Create a custom Inspector with two fields that warns the user if the values of the fields fall outside certain ranges. |

## Advanced Editor binding examples

| Topics | Description |
| --- | --- |
| Bind to a list with ListView | Create a list of toggles and binds the list to an underlying list of objects. |
| Bind to a list without ListView | Create a binding that binds to a list with array instead of ListView. |
| Bind a custom control | Create a custom control and bind it to a native Unity type. |
| Bind a custom control to custom data type | Create a custom control and bind it to a custom data type. |

## Additional resources

- [Create a bindable custom control](UIE-create-bindable-custom-control.html)

Binding system implementation details

Bind with binding path in C# script
