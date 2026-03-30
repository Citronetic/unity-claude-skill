This version of Unity is unsupported.

Apple’s privacy manifest policy requirements

Linux

# Encryption export regulations

When publishing to the App Store, you must declare if your application uses encryption in order to comply with U.S. export regulations.

To make a declaration, you must add the [ITSAppUsesNonExemptEncryption](https://developer.apple.com/documentation/bundleresources/information-property-list/itsappusesnonexemptencryption) key in your applications [Information Property List](https://developer.apple.com/documentation/bundleresources/information_property_list) file. If your application doesn’t use encryption, or uses encryption that’s exempt from U.S. export compliance, set [ITSAppUsesNonExemptEncryption](https://developer.apple.com/documentation/bundleresources/information-property-list/itsappusesnonexemptencryption) to false.

The Unity core platform doesn’t use non-exempt encryption. If you’re using the core Unity platform with the iOS module, you can set [ITSAppUsesNonExemptEncryption](https://developer.apple.com/documentation/bundleresources/information-property-list/itsappusesnonexemptencryption) to false. However, it’s your responsibility to check that any third-party components and **plug-ins**A set of code created outside of Unity that creates functionality in Unity. There are two kinds of plug-ins you can use in Unity: Managed plug-ins (managed .NET assemblies created with tools like Visual Studio) and Native plug-ins (platform-specific native code libraries). [More info](./plug-ins.html)
See in [Glossary](Glossary.html#Plug-in) included in your Unity project comply with encryption export regulations.

For more information, refer to [Complying with Encryption Export Regulations](https://developer.apple.com/documentation/security/complying-with-encryption-export-regulations).

**Note**: [`UnityWebRequest`](../ScriptReference/Networking.UnityWebRequest.html) uses [NSURLSession](https://developer.apple.com/documentation/foundation/nsurlsession) which is exempt from export compliance.

## Packages

The [Unity Mobile Notifications](https://docs.unity3d.com/Packages/com.unity.mobile.notifications@latest) package is built on top of Apple’s notification API. Any networking for notifications is handled by the operating system, not the application, and is therefore exempt.

## Additional resources

- [Information Property List](https://developer.apple.com/documentation/bundleresources/information_property_list)

- [ITSAppUsesNonExemptEncryption](https://developer.apple.com/documentation/bundleresources/information-property-list/itsappusesnonexemptencryption)

Apple’s privacy manifest policy requirements

Linux
