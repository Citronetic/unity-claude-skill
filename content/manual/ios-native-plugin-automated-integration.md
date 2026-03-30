This version of Unity is unsupported.

Callback from native code

Bonjour browser sample

# Automated plug-in integration

Unity supports automated **plug-in**A set of code created outside of Unity that creates functionality in Unity. There are two kinds of plug-ins you can use in Unity: Managed plug-ins (managed .NET assemblies created with tools like Visual Studio) and Native plug-ins (platform-specific native code libraries). [More info](./plug-ins.html)
See in [Glossary](Glossary.html#Plug-in) integration and copies files with the following extensions to the generated Xcode project: `.a`, `.m` , `.mm`, `.c`, `.cpp`, `.h`, `.swift`.

To enable automated plug-in integration, enable iOS plug-ins in the Plug-in **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector).

If you place files with these extensions in the `Assets/Plugins/iOS` folder, Unity only enables them for the iOS platform.

**Note:** Files copied to the generated Xcode project are no longer linked to their counterparts in your Unity Project. If you change these files in Xcode, you must copy them back into your Unity Project. Otherwise, Unity will overwrite them the next time you build your Project.

## Additional resources

- [Bonjour browser code sample](ios-native-plugin-bonjour-sample.html)

Callback from native code

Bonjour browser sample
