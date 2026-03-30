[Image: image]

# Building the Game

Exercise

Beginner

+20XP

10 mins

678

Unity Technologies

[Image: Building the Game]Summary

In this tutorial, you’ll:

- Create a build of your game for Windows or macOS
- Identify the next steps in your personal learning journey

**Note:** Linux support is currently in preview, and not fully supported. The steps to build for Linux should be broadly parallel to those for Windows; if you encounter a bug, please [report](https://unity3d.com/unity/qa/bug-reporting?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774951961330) it to the team.

Resources

- [Your_next_steps-Transcript.txt](https://unity-connect-prd.storage.googleapis.com/20200716/644cb28c-2a6b-4e1f-b53f-a7498210cfef/Your_next_steps-Transcript.txt?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774951961330)
- [Create_a_build_of_your_game - Transcript.txt](https://unity-connect-prd.storage.googleapis.com/20240924/1970db7d-2771-4883-bef8-b86395397590/Create_a_build_of_your_game%20-%20Transcript.txt?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774951961330)

Languages available:

EnglishEnglish日本語한국어English

## 1. Overview

Q&A (0)

In this final tutorial, you’ll:

- Create a build of your game for Windows or macOS
- Identify the next steps in your personal learning journey

By the end of this tutorial, your game will look something like this:

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

## 2. Create a build of your game

Q&A (0)

Follow the video or text instructions below to configure your build settings, configure your player settings, build your game, and finally play your standalone game:

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

[Download Transcript](https://unity-connect-prd.storage.googleapis.com/20240924/1970db7d-2771-4883-bef8-b86395397590/Create_a_build_of_your_game%20-%20Transcript.txt?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774951961330)

#### 1.  Configure your build settings.

- Save your scene.
- To open the **Build Settings**window, from the main menu go to**File** >**Build Profiles**. Alternatively, you can press **Shift**+**Control**+**B** (macOS: **Shift**+**Cmd**+**B**).
- Select **Windows, Mac,**or**Linux** in the **Platforms** panel
- In the **Scene List**, select**Open Scene List**, then **Add Open Scenes** to add your Roll-a-ball game to the build. You can also drag scenes from the **Project** window to this list.
- If **SampleScene** is showing in the list, disable it to exclude it from your build.

#### 2.  Configure your player settings.

- Select **Player Settings** to open a range of different configuration options for the **Game** view.
- If you want, change the **Company Name**, **Product Name**, and **Version**.
- Select **Resolution and Presentation** and change the **Fullscreen Mode** box to **Windowed**.
- By default this will have a resolution of 1024 by 768, but set the default width and height to something smaller if your screen uses a lower resolution.
- Close the **Project Settings** window and return to the Build Settings window.

#### 3.  Build your game.

- Select **Build**. This will bring up a dialog that asks you to choose a build location.
- To keep things tidy, create a new folder inside your project called “Builds” at the root of the project, alongside the **Assets** and **Library** folders.
- If you’re using macOS, you can also choose a name for your build.
- Confirm that you want to **Select Folder** (Windows) or **Save** (macOS). Unity will now build the application and save it to the **Builds** folder.

[Image: image]

#### 4.  Play your standalone game!

- Navigate to the **Builds** folder and then run the executable application.
- **Note:**When building for macOS, Unity builds an .app bundle that contains all of the relevant data and files. When building for Windows, Unity builds an .exe file and a data folder that contains all of the necessary resources.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

## 3. Your next steps

Q&A (0)

After you’ve finished your project, what will you do next? Consider some of the options below:

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

[Download Transcript](https://connect-prd-cdn.unity.com/20200716/644cb28c-2a6b-4e1f-b53f-a7498210cfef/Your_next_steps-Transcript.txt?_ga=2.77618844.943030393.1594530423-42703541.1592249374)

#### Solidify your programming fundamentals

If you are not already confident with your programming, it is recommended that you start with [Create with Code](https://learn.unity.com/course/create-with-code) or the more comprehensive [Junior Programmer Pathway](https://learn.unity.com/pathway/junior-programmer), which will take your programming skills to the next level. You can also check out the [Creator Kit: Beginner Code](https://learn.unity.com/project/creator-kit-beginner-code) project!

#### Expand your artistic design skills.

You did a bit of design in this project, but there is an entire [Creative Core pathway](https://learn.unity.com/pathway/creative-core?uv=2020.3) that will take you through the fundamentals of materials, visual effects, lighting, post-processing, audio, user interface design, and more.

#### Continue with more game development.

If you want to continue down the games path, Unity Learn has a wide range of games-based learning content, including the following:

- [2D Beginner Game: Sprite Flight](https://learn.unity.com/course/2d-beginner-game-sprite-flight)
- [2D Adventure Game: Robot Repair](https://learn.unity.com/course/2D-adventure-robot-repair)
- [3D Stealth Game: Haunted House](https://learn.unity.com/course/3d-stealth-game-haunted-house)

Mark step as complete

## 4. Submit your project

Q&A (0)

If you went above and beyond and created your own take on the Roll-a-ball game, take a screenshot or screen-recording and post it here to share what you made! To upload your project online as a WebGL build so others can play it, you can:

1. Follow the instructions to [create and build your project for WebGL.](https://learn.unity.com/tutorial/create-and-publish-webgl-builds)
2. Share a link in your submission description below so other people know where to find it.

Please also share any "behind-the-scenes" info about how you made your project!

Proud of your project? Share it to the [Unity Play showcase](https://play.unity.com/en/showcases/roll-a-ball-challenge) by December 20 for a chance to be featured on a Unity Twitch stream.

#### Please login to submit

Login

## Complete this Tutorial

Mark all steps complete

Submission Gallery

[[Image: Roll a Ball Tutorial Project]

Roll a Ball Tutorial Project

My practice take on this project tutorial.

Ddkanone9820](https://learn.unity.com/submission/69c9c2c2edbc2a0c82efcc8c)[[Image: Mini game]

Mini game

my mini game

MMefistofeles45120](https://learn.unity.com/submission/69c978bcedbc2a0bf6895082)[[Image: Roll a ball]

Roll a ball

This project opened my knowledge to more of the Game Development process, simple game mechanics with an enemy AI...

BbaahDbee251](https://learn.unity.com/submission/69c8116fedbc2a07ae0ea170)[[Image: RollaBall]

RollaBall

Roll a Ball web build by tutorial.

KKamil50](https://learn.unity.com/submission/69c7fe59edbc2a07de260b5f)[[Image: Minigame]

Minigame

It is a chasing game.

Aaggrawaltanish1860](https://learn.unity.com/submission/69c7fdeaedbc2a077d1842c4)[[Image: Roll A Ball]

Roll A Ball

timepass

Uunity_7A02DE7580182D3F529C190](https://learn.unity.com/submission/69c67427edbc2a03afd93199)Load More
