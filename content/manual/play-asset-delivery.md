This version of Unity is unsupported.

Host APK expansion files

Asset packs in Unity

# Play Asset Delivery

Play Asset Delivery (PAD) is the asset splitting solution for the [Android App Bundle](https://developer.android.com/guide/app-bundle) (AAB) publishing format. PAD uses asset packs to store additional assets such as textures, sounds, and meshes. Google hosts and serves asset packs on Google Play, which means you don’t need to create a content delivery network to send application resources to users. For more information about PAD, refer to Android documentation on [Play Asset Delivery](https://developer.android.com/guide/playcore/asset-delivery).

PAD is only available for Google Play and enables applications to be larger than the Google Play application size limit of 200MB.

**Important**: If you have a large application and want to publish it to [digital distribution services](android-distribution.html) that don’t support the AAB publishing format, you must use the **APK**The Android Package format output by Unity. An APK is automatically deployed to your device when you select File > Build & Run. [More info](android-BuildProcess.html)
See in [Glossary](Glossary.html#APK) publishing format and [APK expansion files](android-OBBsupport.html).

| Topic | Description |
| --- | --- |
| Asset packs in Unity | Learn how asset packs work in Unity. |
| Set up Play Asset Delivery | Configure your Unity project to produce an AAB that contains asset packs. |
| Create a custom asset pack | Create a custom asset pack to store additional assets for an application. |
| Manage asset packs at runtime | Download and access asset packs at runtime. |

**Notes:**

- All versions of Unity from 2021.3 support Play Asset Delivery.

- Unity doesn’t support [Play Feature Delivery](https://developer.android.com/guide/playcore/feature-delivery).

## Additional resources

- [Android application publishing format](android-BuildProcess.html#publishing-format)

Host APK expansion files

Asset packs in Unity
