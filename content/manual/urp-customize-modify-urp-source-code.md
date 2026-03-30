This version of Unity is unsupported.

Injection points reference for URP

Compatibility Mode in URP

# Modify URP source code

For advanced customizations, it might not be enough to extend or override APIs defined in URP. You might need to modify URP source code to change certain methods.

To prepare URP source code for modifications:

1. In the root folder of your project, go to `Library/PackageCache`.

2. Copy the following folders into the `Packages` folder at the root of your project:

```xml
com.unity.render-pipelines.universal
com.unity.render-pipelines.universal-config
```

Now Unity uses the URP source code from the `Packages` folder of your project, and you can make changes to that code.

**Note:** After you copy the package source code into the `Packages` folder, this package code becomes embedded in your project and is no longer part of a Unity install. If you upgrade the Unity version later, Unity doesn’t update the **embedded package**An *embedded* package is a mutable package that you store under the `Packages` directory at the root of a Unity project. This differs from most packages which you download from a package server and are immutable. [More info](../../upm-concepts.html#Embedded)
See in [Glossary](../../Glossary.html#Embeddedpackage) source automatically. You need to apply the changes to the source code manually. For more information about embedded packages, refer to [Embedded dependencies](../../upm-embed.html).

## Document changes to embedded package

To make it easier to upgrade to future Unity versions, document all the changes you make to the embedded URP package code.

## Additional resources

- [Custom lighting in URP](../lighting/custom-lighting-landing.html)

Injection points reference for URP

Compatibility Mode in URP
