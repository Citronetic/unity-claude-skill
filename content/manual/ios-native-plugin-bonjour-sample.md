This version of Unity is unsupported.

Automated plug-in integration

Integrating Unity into native iOS applications

# Bonjour browser sample

For a simple example of how to use a native **plug-in**A set of code created outside of Unity that creates functionality in Unity. There are two kinds of plug-ins you can use in Unity: Managed plug-ins (managed .NET assemblies created with tools like Visual Studio) and Native plug-ins (platform-specific native code libraries). [More info](./plug-ins.html)
See in [Glossary](Glossary.html#Plug-in), download the [Bonjour Browser Sample](../uploads/Examples/iPhoneNativeCodeSample.zip).

This example demonstrates how you can invoke Objective-C code from a Unity iOS application. This application implements a simple Bonjour client and consists of:

- A Unity iOS Project where `Plugins\Bonjour.cs` is the C# interface to the native code, and `BonjourTest.cs` is the script that implements the application logic.

- Native code (located in `Assets/Plugins/iOS`) that will be added to the built Xcode project as described in [Automated plug-in integration](ios-native-plugin-automated-integration.html).

Automated plug-in integration

Integrating Unity into native iOS applications
