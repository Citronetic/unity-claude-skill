[Image: image]

# Unity Build Automation: Quick start guide

Tutorial

Beginner

+0XP

10 mins

166

(108)

Unity Technologies

[Image: Unity Build Automation: Quick start guide]Summary

This tutorial is designed to be a quick overview of the Unity Build Automation with short, simple steps to get started.

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

Unity Build Automation (UBA) is a continuous integration/continuous delivery/deployment (CI/CD) service designed to empower creators to build in the cloud. Unity Build Automation allows you to keep developing while your builds compile in the cloud, across multiple platforms. This frees up your time to try more ideas, test more frequently, find bugs faster, and deliver high-quality games and applications to market.

Mark step as complete

## 2. Sign in to the Unity Cloud Dashboard

Q&A (0)

To begin, create a Unity account or login to the [Unity Dashboard](https://cloud.unity.com/) with your existing Unity ID.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%0:00Remaining Time -0:001xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

Mark step as complete

## 3. Navigate to the DevOps gaming services page

Q&A (0)

From the [DevOps gaming service](https://cloud.unity.com/home/organizations/default/devops/about) page, select **Product** > **DevOps** > **Launch**.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%0:00Remaining Time -0:001xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

Mark step as complete

## 4. Connect to your preferred source control provider

Q&A (0)

Under **Build Automation**> **Settings**, select the [**Source control**](https://cloud.unity.com/home/organizations/default/projects/default/cloud-build/settings/source-control) tab, then select your preferred source control system to host your project. Finally, select the **Save** button.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%0:00Remaining Time -0:001xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

Mark step as complete

## 5. Set up build target configurations

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%0:00Remaining Time -0:001xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

Under **Build Automation** > **Configurations**, select **Quick target setup** for basic configurations or **Target setup** for more advanced settings for your [build target](https://cloud.unity.com/home/organizations/default/projects/default/cloud-build/config). You’ll then be prompted to select the target platform you want to build your game for. Build Automation currently supports building for iOS, macOS, Windows, Linux, Android, WebGL, UWP, and Xbox (currently in Alpha). Once you have chosen the platform you’ll need to fill out the following settings:

- **Basic info:** Some fields will populate based on your project. Verify and fill out required fields.
- **Builder configurations:** Operating system and machine specifications for your build.
- **Scheduling:** Gives you the option to set up auto-build triggers or recurring builds (this is optional).

**Note:**  Select platforms may have additional required fields to fill out.

Select the **Save configuration** button to continue.

Mark step as complete

## 6. Build your project

Q&A (0)

Under **Build Automation** > **Build history**, locate your newly created build configuration and select the **Build** button to the right of the configuration. Select **Build** again to initiate the process. After you trigger a build, you’ll get a notification when the build is complete.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%0:00Remaining Time -0:001xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

Under **Build Automation** > **Build history**, you can check out the status of your build. For successful builds, you can download the artifacts and share them. For failed builds, you can view and troubleshoot issues in the generated Log.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%0:00Remaining Time -0:001xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

Mark step as complete

## 7. Getting started with Unity Build Automation

Q&A (0)

If you want to learn more about build automation in Unity, make sure to check out this video tutorial. You’ll learn how to streamline the process of building for multiple platforms as well as how to move your local build pipeline to the Unity Cloud so you can automate builds with every update.

[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 4:50Loaded: 0.00%0:00Remaining Time -4:501xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

If you want to ensure your team collaboration is smooth and efficient, make sure to check out the: [Best practices for project organization and version control guide (Unity 6 edition)](https://unity.com/resources/best-practices-version-control-unity-6).

Mark step as complete

## 8. Next steps

Q&A (0)

Great job! Now you’re ready to build across multiple platforms in the cloud.

If you need more help getting started, check out the [Unity Build Automation documentation](https://docs.unity.com/ugs/en-us/manual/devops/manual/unity-build-automation). Want to see UBA in action? [Read how](https://unity.com/case-study/marvel-snap) Second Dinner pushed 30+ multi platform builds a day using UBA while developing Marvel Snap.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
