This version of Unity is unsupported.

Activity requirements and compatibility

Create a custom activity

# Extend the default Unity activity

The `UnityPlayerActivity` of a Unity Android application is responsible for basic interactions between the Android operating system and the application. You can use **plug-ins**A set of code created outside of Unity that creates functionality in Unity. There are two kinds of plug-ins you can use in Unity: Managed plug-ins (managed .NET assemblies created with tools like Visual Studio) and Native plug-ins (platform-specific native code libraries). [More info](./plug-ins.html)
See in [Glossary](Glossary.html#Plug-in) to create your own [Activity](https://developer.android.com/reference/android/app/Activity.html) that extends and overrides Unity’s default `UnityPlayerActivity`.

**Note**: If you’re creating a custom activity with GameActivity application entry point, you need to extend the `UnityPlayerGameActivity` class.

| Topic | Description |
| --- | --- |
| Create a custom activity | Extend the default Unity activity to control interactions between Unity and Android. |
| Specify Android Player command-line arguments | Specify startup command-line arguments to pass to Unity. |

## Additional resources

- [Android plug-ins](PluginsForAndroid.html)

Activity requirements and compatibility

Create a custom activity
