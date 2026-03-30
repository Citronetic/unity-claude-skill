[Image: image]

# Host your built content locally during development

Tutorial

intermediate

+10XP

10 mins

5

(174)

Unity Technologies

[Image: Host your built content locally during development]SummarySkills

In this tutorial, you will learn how to serve addressable assets on a local hosting service in the Unity Editor. You will also learn about remote catalogs, the catalog cache, and the AssetBundle cache.

By the end of this tutorial, you will be able to:

- Explain the purpose of hosting content locally during development, rather than using a web server
- Assign addressable assets to be hosted remotely or locally
- Set up the Addressables Hosting service to simulate remote hosting
- Explain how downloaded AssetBundles and content catalogs are cached

Resources

- [GetStarted-LoadyDungeons.zip](https://unity-connect-prd.storage.googleapis.com/20230512/db7cb906-3564-48ba-a649-f9ef172adf77/GetStarted-LoadyDungeons.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774956319305)

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

You can accomplish a lot of testing in the Unity Editor during the development of Loady Dungeons, but eventually you'll need to test your application on your target platform's devices to test all of your features. With Addressables content, you’ll also need to host your remote content on a CDN to test the loading and unloading of assets.

Building to your chosen platforms and introducing a CDN every time you want to test remote assets can introduce complexities to the development of your project, such as increased time costs. As a solution to these complexities, the Addressables system provides you with the **Addressables Hosting** window, which acts as a content server integrated into the Unity Editor.

Through this feature, the Addressables system hosts the build output the same way that a proper CDN does: it allows you to treat your Unity Editor Play mode session or a Unity Player build as a client that can connect to it in order to retrieve AssetBundles. The clients can exist on the same machine as your project or on any other machine on your local and remote networks.

Addressables Hosting lets you improve iteration times when testing your content and provides you with a clear understanding of how your application will connect to a remote server.

Mark step as complete

## 2. Configure remote assets

Q&A (0)

To simulate remote hosting with the local hosting service, let’s restructure Loady Dungeons so that it has remote assets. The **Hat** assets are a good candidate for this since they are already items that you might get as downloadable content (DLC) or seasonal/event items.

To set up Loady Dungeons for remote assets, follow these instructions:

**1.**From the main menu, select **Window** > **Asset Management** > **Addressables**>**Settings**.

**2.** In the Inspector window, in the**Catalog** section, select **Build Remote Catalog**. This option will enable your build content to create a manifest file in the build output directory named **catalog.json** that is crucial to finding all the hosted assets. This file will be discussed further in the Advanced tutorials.

**3.**In the Groups window, make sure that the **Levels**and **Hats**groups have their **Build & Load paths** property in the Content Packing & Loading schema set to **Remote**.

Applying these settings ensures that when the assets build, the application knows that Levels and Hats are remote.

Mark step as complete

## 3. Set profile Remote path to Editor hosted

Q&A (0)

To set profile Remote path to Editor hosted, follow these instructions:

**1.**Set your target platform to match the client’s platform so that you can build bundles that are compatible with that client. If the client is an Android device, switch to **Android**. If the client is the Windows Editor in Play mode, switch to **Windows Standalone**.

**2.**  From the Profiles window, set your active profile to **Default**.

**3.**In the Default profile, make sure that the **Remote**path pair’s **Bundle Locations** dropdown is set to **Editor Hosted**. This will ensure that when the Addressables content is built, the application builds remote content to the location where the Unity Editor hosts it, and the game will request from the Unity Editor as a mock CDN. Hats and Levels will be retrieved in this manner.

**4.**From the main menu, select **Edit**> **Project Settings** > **Player** > **Other Settings**, and under **Configuration,**  open the **Allow downloads over HTTP** menu and select **Allowed in development builds**.

[Image: image]

By default your game is configured to deny web requests that do not use a secure transfer protocol (HTTPS). The Hosting window does not use a secure protocol, and this will make sure that the game can load hosted content while you are developing. The version of the game in Play mode will now connect, and so will Unity Players built in Development mode.

**5.**  From the Groups window, select  **Build**> **New Build**> **Default Build Script**to rebuild your content.

**6.**  Make sure that the Play Mode script is set to **Use Existing Build**, so that the game can search for the remote AssetBundles from the host.

Your assets are now built and placed in the location that the Hosting window can deliver, and your game is configured to request from the Hosting window.

Mark step as complete

## 4. Create and start a new local Editor hosting service

Q&A (0)

The game is configured, but if you were to play it in this state, you would receive errors as it connects. This is because the server that Hosting window uses has to be started up in order to provide the AssetBundles.

To create a new local Editor host, follow these instructions:

**1.**From the main menu, select **Window** > **Asset Management** > **Addressables**> **Hosting**.

**2.**From the Addressables Hosting window, select **Create**>**Local Hosting** service. This will create a new HTTP hosting service.

[Image: image]

**3.**Rename the **Local Hosting 0**service “Local Hosting Service”.

**4.**Select **Enable**to start the **Local Hosting Service**.

[Image: image]

**Note**: In Unity versions, 2022.1 and above, HTTP downloads are disallowed by default.

**5.**Open the **MainMenu**scene and enter Play mode. The logo sprite is now loaded.

**6.**Select the **Start** button to load the **LoadingScene**, then select the **Play** button.

**7.**In the Hosting window, note that there are port listing events coming in. The first **Hat**asset is now loaded.

You can add multiple hosts to attempt to simulate the different build environments that you would see on a CDN.

Mark step as complete

## 5. The AssetBundle cache

Q&A (0)

Caching AssetBundles early leads to improved performance on any initial call, such as **Addressables.LoadAssetAsync**, which would otherwise need to download the bundles as part of their operation.

Make sure that you are aware of any caching restrictions that might apply to your target platform. For example, while mobile platforms allow you to take advantage of Unity’s AssetBundle Cache for downloaded content, this functionality is disabled by default at the Unity engine level for certain platforms, such as PlayStation 4, Nintendo Switch, and WebGL. Consider updating your base game with the new content on those platforms rather than attempting to deliver remote content from the CDN. Otherwise, you will need to create your own custom AssetBundle caching system and determine whether your solution complies with those platforms’ terms of services.

For finer control over caching, use the [Caching API](https://docs.unity3d.com/ScriptReference/Caching.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774956319305) to manipulate the AssetBundle cache directly.

**Note**: You will need to wrap any calls to the Caching API with the **ENABLE_CACHING** defined.

Mark step as complete

## 6. Next steps

Q&A (0)

Congratulations! You've learned the basics of configuring and hosting addressable assets with the Addressables system.

Put your new skills to good use as you develop more and more sophisticated games!

Mark step as complete

## Complete this Tutorial

Mark all steps complete
