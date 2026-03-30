This version of Unity is unsupported.

Android Player settings

Keystore Manager window reference

# Android keystores

A keystore is a binary file that contains private keys and public key certificates. Android uses the keys in a keystore to sign an application for security reasons. For more information, see [Keystores, keys, and certificates](https://developer.android.com/studio/publish/app-signing#certificates-keystores).

## Android keystores in Unity

To interface with keystores, Unity provides the Keystore Manager and properties in **Player Settings**Settings that let you set various player-specific options for the final game built by Unity. [More info](class-PlayerSettings.html)
See in [Glossary](Glossary.html#PlayerSettings). You can use these tools to create, configure, or load **Android keystores**An Android system that lets you store cryptographic key entries for enhanced device security. [More info](class-PlayerSettingsAndroid.html#projectkeystore)
See in [Glossary](Glossary.html#AndroidKeystore) and keys.

**Note**: If you sign an application with a particular key and upload the application to an app store, you must sign future versions of the application with the same key.

| Topic | Description |
| --- | --- |
| Keystore Manager window reference | Open and use Unity’s Keystore Manager window. |
| Create a new keystore | Use the Keystore Manager window to create a new keystore file and configure its path. |
| Add keys to a keystore | Use the Keystore Manager window to add keys to a keystore. |
| Load a keystore | Use the Keystore Manager to load an existing keystore. |

## Additional resources

- [Player Settings - Publishing Settings](class-PlayerSettingsAndroid.html#Publishing)

Android Player settings

Keystore Manager window reference
