[Image: image]

# Build content using Addressables

Tutorial

intermediate

+10XP

10 mins

4

(316)

Unity Technologies

[Image: Build content using Addressables]SummarySkills

In this tutorial, you will learn how to build Addressables content, which is loaded into your game from a remote location, using the Default Build Script.

By the end of this tutorial you will be able to:

- Explain how a Play mode script affects loading addressable assets in the Unity Editor
- Construct AssetBundles with a build script
- Explain how to manage the Scriptable Build Pipeline cache

Resources

- [GetStarted-LoadyDungeons.zip](https://unity-connect-prd.storage.googleapis.com/20230512/60ae4ce3-791d-4760-a291-28994ee3bce1/GetStarted-LoadyDungeons.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774951908142)

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

When you're in the production and testing phases of developing your game, you'll want to make many builds to test your configurations of addressable assets. This tutorial will guide you through setting up your player builds and the Unity Editor's Play mode so that you can test your entire game along with your addressable asset configurations as efficiently as possible.

When you make a build while using the Addressables system, you generate two sets of files:

- A **player build**, which is similar to the application file you would build without using the Addressables system, except that it also contains your local Addressables content.
- **Addressables content**, which includes AssetBundles, runtime settings, a content catalog, and other files that will either be stored locally, with the player build, or uploaded to your content delivery network (CDN) or other hosting services.

When you build your full application, the default workflow is to build your Addressables content first and then make a player build, but you have some control over this workflow through build scripts.

You also have some control over the way your project compiles for the Unity Editor's Play mode. Using a Play Mode script, you can either compile your project normally or test your addressable assets, and you can save time by only building Addressables content for Play mode when you need to.

In this tutorial, you'll learn about all of these options so that you can effectively test and stage your application using the Addressables system.

Mark step as complete

## 2. What is a Play Mode script?

Q&A (0)

When you're developing your game, you enter Play mode many times to test your changes. The Addressables system builds and uses AssetBundles, which can take time to build, especially in a large project with a lot of addressable assets. This could slow down Play mode iteration and burden your development process.

A **Play Mode script** is an Editor-only feature of the Addressables system that allows you to control how the system will deliver assets during Play mode. You can use a Play Mode script to bypass Addressable content builds, allowing you to iterate your work at the quick pace that Play mode allows.

You'll mainly be using these Play Mode scripts:

- **Use Asset Database (formerly known as Fast Mode)**: this option allows you to use Play mode without building Addressables content. It mocks up built Addressables content by locating and loading assets through the Editor asset database.
- **Use Existing Build**: loads assets from AssetBundles created by an earlier build. Before you use this option, you must run a full build to create a set of Addressables content.

A third script, **Simulate Groups**, is for advanced use and may be deprecated in the future.

By default, the Play Mode script is set to **Use Asset Database** for the convenience of development iteration. This is the mode that you've been using up to this point as you've modified Loady Dungeons.

You can use the Play Mode Script dropdown to test loading assets using the asset database or an existing build.

To change the Play Mode script to **Use Existing Build** in the Addressable Groups window, follow these instructions:

**1.**From the top of the Addressables Groups window, open the **Play Mode Script** dropdown and select **Use Existing Build** menu item.

[Image: image]

**2.**In the Project window, navigate to **Assets**> **Scenes** and open the **MainMenu**scene.

**3.**  Enter Play mode. Check the Console window for any output.

**4.** Exit Play mode.

If you receive an error message in the Console window, then you have not yet built the Addressables content necessary to use as an existing build. Let’s do that next.

Mark step as complete

## 3. Build Addressables content using the Default Build script

Q&A (0)

When you build an application that uses the Addressables system, the general workflow is to build Addressables content as a separate step first before building the Unity Player application so that the application can use the AssetBundles. The Addressables system provides its own standard build scripts for building content, but you can also write your own build script if you need to customize your content build pipeline.

When you first introduce the Addressables system into your project, it is configured to use the Default Build script. In addition to building the content, the location for where the content files are built depends on several factors such as whether the addressable assets are configured to be local or remote.

To build your content using the Default Build script with your local build path, follow these instructions:

**1.**From the toolbar of the Addressables Groups window, open the **Play Mode Script** dropdown and make sure that the **Use Existing Build** menu item is selected.

**2.**In the same window, select **Build**> **New Build** > **Default Build Script**.  You may see a dialog appear asking if you want to turn on Debug Build Layout. Decline it for now.

[Image: image]

**3.** Make sure that the **MainMenu**scene is active in Editor and enter Play mode. You'll see that there are no Console window errors, and that the correct addressable assets are loaded and visible, such as the main menu logo.

**4.**  Exit Play mode.

**Note**: In most cases when you modify a setting (for example, Profile, Groups, the Addressables system settings) and you use the Use Existing Build option, you need to build your Addressables content to apply the changes. Otherwise, you will still see the outdated content in your build.

You can find the Default Build script in **Packages**> **Addressables**> **Editor**> **Build**> **DataBuilders**> **BuildScriptPackedMode.cs**.

Mark step as complete

## 4. Clear the Play Mode script build cache

Q&A (0)

The **build cache** is the local set of Addressables content that's used when you select Use Existing Build. To clear this content, follow these instructions:

**1.**From the toolbar of the Addressables Groups window, open the **Play Mode Script** dropdown and make sure that the **Use Existing Build** menu item is selected.

**2.**In the same window, select **Build**> **Clear Build Cache** > **Content Builders** > **Default Build Script**.

[Image: image]

**3.**  Make sure that the **MainMenu**scene is active in the Editor, and enter Play mode. You'll see an error message in the Console window again because you destroyed the built content necessary to use an existing build.

**4.** Exit Play mode.

Mark step as complete

## 5. Clear the Scriptable Build Pipeline cache

Q&A (0)

The Addressables system uses the Scriptable Build Pipeline (SBP) to build AssetBundles. The SBP is more robust than the legacy AssetBundle build pipeline.

When you build your content, the SBP creates .info files that speed up subsequent builds. The SBP reads data from these .info files instead of regenerating data that hasn't changed. These files are cached in the **Library/BuildCache** folder of your project.

To clear the SBP's build cache, follow these instructions:

**1.** **On Windows**from the main menu, select  **Edit**> **Preferences**>**Scriptable Build** **Pipeline** > **Build Cache**, and on Mac selecting from the main toolbar **Unity > Settings** which opens **Preferences**>**Scriptable Build** **Pipeline** > **Build Cache**.

**2.**  Make note of the current cache size.

**3.**Select **Purge Cache**.

**4.**In the Purge Build Cache dialog pops up, select **Yes**.

[Image: image]

**5.**  Make note that the current cache size has changed to 0 B.

**6.**  Make sure that the **MainMenu**scene is active in Editor and enter Play mode. Note that you are receiving an error message in the Console window because you destroyed the built content necessary to use as an existing build.

**7.** Exit Play mode.

**Note**: You can also clear the cache from the Addressables Groups window. First, make sure that you are using the existing build (**Play Mode Script** dropdown). Then, from the toolbar of the Addressables Groups window, select **Build**> **Clear Build Cache** > **All**from the dropdown**.**

Mark step as complete

## 6. Next steps

Q&A (0)

You’ve now converted Loady Dungeons to use the Addressables system. However, there are aspects of how it builds and loads addressable content that can be improved. To implement these improvements, the second half of this course covers ways you can influence the memory layout of addressable content builds.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
