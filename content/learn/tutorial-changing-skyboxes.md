[Image: image]

# Changing Skyboxes

Tutorial

intermediate

+10XP

15 mins

1

Unity Technologies

[Image: Changing Skyboxes]Summary

In this tutorial we’ll explore how to change the sky in the Scene at runtime when a button is clicked.

Resources

- [ChangingSkyboxes.zip](https://unity-connect-prd.storage.googleapis.com/20200518/b29f3ec2-a990-4a77-8564-7b47d1d05fba/ChangingSkyboxes.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952713832)
- [ChangingSkyboxesComplete.zip](https://unity-connect-prd.storage.googleapis.com/20200518/2b7ec040-339f-443b-abf3-b0215ae9bb77/ChangingSkyboxesComplete.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952713832)

Languages available:

EnglishEnglish日本語English

## 1. Introduction

Q&A (0)

The Reflect Viewer uses the standard Skybox that is defined in the game Scene. This Skybox Material can be accessed at runtime via the RenderSettings.skybox class.

For this tutorial, you will need:

- The Reflect Viewer project downloaded from Github [GitHub - Unity-Technologies/com.unity.reflect.viewer: Unity Reflect Viewer](https://github.com/Unity-Technologies/com.unity.reflect.viewer)
- A Pro license for the Unity Editor
- The Unity custom package, “ChangingSkyboxes.unitypackage”

Mark step as complete

## 2. Creating the Button

Q&A (0)

We’ll start by creating a new button that will change the sky when clicked. This button will be created under the existing Settings Canvas and will appear after the splash screen sequence.

**1.**Open the Reflect Viewer project downloaded from Github and open the project in Unity.

**2.**Open the Reflect scene (**Figure 01**).

[Image: image]

**3.**Import the ChangingSkyboxes package from the tutorial resources.

**4.** Right-click on the **UI Root** element and create a new **UI**> **Image** element. This will be the button you will use to change the sky.

**5.**Select the new image element and rename it “SkyChangeButton” (**Figure** **02**).

[Image: image]

**6.** With the SkyChangeButton element still selected, change the Source Image to **Sun** (**Figure** **03**).

[Image: image]

**7.** Click **Add Component** to add a Button component. This will make the image clickable and allow you to add interaction to the button (**Figure** **04**).

[Image: image]

**8.** Using the Move and Scale tools, change the position and size of the sun icon to fit in the top left corner (**Figure** **05**).

[Image: image]

**9.** Drag the changeSky script provided in the **Assets**>**Scripts** folder onto the new SkyChangeButton element (**Figure** **06**).

[Image: image]

**10.** Now you’ll need to link the script to the On Click () event for the button. In the Inspector, under the Button component that was added earlier, select **+** (**Figure 07**).

[Image: image]

**11.** Drag the SkyChangeButton element into the new On Click () event in the Inspector (**Figure 08**).

[Image: image]

**12.** Select the changeSky. Change On Click () function in the script (**Figure 9**).

[Image: image]

**13.** In the Inspector, on the added script component, add the CloudSkybox Material to the Skybox One slot by selecting the radio button next to it and then selecting the relevant sky (**Figure 10**).

[Image: image]

This animated Skybox is part of the imported resources for this tutorial. It’s provided by Keijirro and can be downloaded from [https://github.com/keijiro/CloudSkybox](https://github.com/keijiro/CloudSkybox).

**14.**Repeat Step 11 for the Skybox Two slot and add the Default-Skybox Material (**Figure 11**).

[Image: image]

**15.** Run the project. Clicking the SkyChangeButton should switch between the two Skyboxes that were added to the Material slots (**Figure 12**). You may change the Materials in these slots to any Skybox you wish to use.

[Image: image]Mark step as complete

## 3. Understanding the Script

Q&A (0)

The script used in this project is a very simple one that takes an On Click () event and switches between two Materials (**Figure 13**).

[Image: image]

Two Material variables are declared (**01**), which creates the two slots for the Materials in the Inspector

The ChangeOnClick (**2**) function checks if Material One is applied when the button is clicked. If it finds this to be true, it changes the sky to Material Two. If not, it switches to Material One.

Mark step as complete

## 4. Next Steps

Q&A (0)

This tutorial covered changing the Skybox Materials when a button is clicked. You should now have an understanding of how to access the Skybox Material at runtime and how to specify which Material is to be used in the script. Using these techniques, you can create your own Skybox options and even use 360 images of specific sites to show the project in context.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
