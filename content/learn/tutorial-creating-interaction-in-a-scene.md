[Image: image]

# Creating Interaction in a Scene

Tutorial

intermediate

+10XP

15 mins

0

Unity Technologies

[Image: Creating Interaction in a Scene]Summary

In this tutorial, we’ll explore a method for adding functionality at runtime by creating a UI that controls the lights in the Scene.

Resources

- [CreatingInteraction_Resources.zip](https://unity-connect-prd.storage.googleapis.com/20200527/247c747b-b9da-4e6c-bb8f-ba527e8358b8/CreatingInteraction_Resources.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954324376)
- [CreatingInteraction_Complete.zip](https://unity-connect-prd.storage.googleapis.com/20200527/ca9fc222-66ee-42d9-9aae-15e0350cfb80/CreatingInteraction_Complete.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954324376)

Languages available:

EnglishEnglish日本語English

## 1. Introduction

Q&A (0)

The Reflect Viewer loads a model at runtime that is not available in the Game Scene when the game is not running. This makes it difficult to add additional scripts and interactions to the model. In this tutorial, we’ll explore a method for adding functionality at runtime by creating a UI that controls the lights in the Scene.

For this tutorial, you will need:

- The Reflect Viewer project downloaded from Github [GitHub - Unity-Technologies/com.unity.reflect.viewer: Unity Reflect Viewer](https://github.com/Unity-Technologies/com.unity.reflect.viewer)
- A Pro license for the Unity Editor
- A Reflect project that contains lights
- The “CreatingInteractionintheScene_Resources.unitypackage” file that is part of this tutorial.

Mark step as complete

## 2. Setting up the Interaction

Q&A (0)

**1.** Open the Reflect project downloaded from Github and open the Reflect scene.

[Image: image]

**2.**Expand UI Root in the Hierarchy.

[Image: image]

**3.** Right-click on the UI root element and select **UI**> **Image**.

[Image: image]

**4.** Select the image element and in the Inspector, change the Source Image to “Lightbulb”.

[Image: image]

**5.**Change the name of the Image element to “LightSwitchIcon” and move it to a position on the left of the UI screen.

[Image: image]

**6.** Drag the LightControls script from **Assets** > **Scripts** onto the UI Root object.

[Image: image]

**7.** This script contains two methods, one for switching the lights off and one for switching the lights on. The script runs through all of the child objects of the object it was attached to. When it finds an object of the type specified — in this case, a light — it toggles the Enabled property on or off.

The Root object we applied the script to is a placeholder for the model that will be imported at runtime. When the runtime model is imported, it will be created as a child of this Root object, regardless of which project you open.

**8.** Select the LighSwitchIcon object and add a Button component, then add an On Click () event by selecting the **+** icon.

[Image: image]

**9.**Drag the Root object into the “None (Object)” slot

[Image: image]

**10.** Select the “No Function” dropdown menu  and then select **ReflectWorkshop. LightsControls** > **LightSwitch ()**

[Image: image]

**11.** Run the project and open any previously created project that contains lights. Select the LightSwitchIcon and lights in the project should be switched on and off every time that you click the icon.

Mark step as complete

## 3. Next Steps

Q&A (0)

One of the problems with working with Reflect Viewer runtime models is accessing the objects at runtime. Since the model is only loaded at runtime, you can’t load scripts on specific objects beforehand. Using the Root object and then using the “GetComponentsInChildren()” method, you can filter through the imported model at runtime and add functionality to specific objects. This tutorial covered the solution to that problem and will allow you to create your own custom controls.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
