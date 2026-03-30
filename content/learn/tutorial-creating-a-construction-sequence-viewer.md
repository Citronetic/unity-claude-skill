[Image: image]

# Creating a Construction Sequence Viewer

Tutorial

intermediate

+10XP

20 mins

1

Unity Technologies

[Image: Creating a Construction Sequence Viewer]Summary

The metadata from BIM models provide powerful identifying data that can be used to create custom functionality. In this tutorial, we’ll use the data from a Revit model to create a slider that shows/hides objects based on their projected completion dates.

Resources

- [ConstructionSequence_Resources.zip](https://unity-connect-prd.storage.googleapis.com/20200527/acebc2a4-59c2-4054-955d-342d160339ef/ConstructionSequence_Resources.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954250574)
- [ConstructionSequence_Complete.zip](https://unity-connect-prd.storage.googleapis.com/20200527/9327b2bd-a53e-410c-9fec-e3d252a69458/ConstructionSequence_Complete.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954250574)

Languages available:

EnglishEnglish日本語English

## 1. Introduction

Q&A (0)

The metadata from BIM models provide powerful identifying data that can be used to create custom functionality. In this tutorial, we’ll use the data from a Revit model to create a slider that shows/hides objects based on their projected completion dates.

For this tutorial, you will need:

- The Reflect Package installed via the Package Manager
- A Pro license for the Unity Editor
- The Unity custom package “CreatingConstructionSequenceViewer_Resources.unitypackage”
- A Revit installation with an activate Reflect plugin

Mark step as complete

## 2. Setting Up the Revit Project

Q&A (0)

For this sequence viewer to work, you need to prepare a Revit project by adding specific metadata to the Scene. A sample Revit model with the metadata already set up is provided in the resources files for this tutorial.

**1.**Open a Revit project you wish to use. We used the sample project that is installed with Revit (**Figure 01**).

[Image: image]

**2.** Go to the Manage Tab and select **Project Parameters** in the Settings section (**Figure 02**).

[Image: image]

**3.** Create a new project parameter called “Completion Target” and fill out the rest of the options as shown. Take care to expand all the options under the categories and make sure everything is checked (**Figure 03**).

[Image: image]

**4.** Now, the tedious part. Take your time and select all the elements in the Scene that should be part of a phase. Once all are selected, add a completion date in the properties panel in the format of month/day/year. Unity will be converting this text to a date when you run the scripts (**Figure 04**).

[Image: image]

**5.** Keep repeating this process until all the elements in the Scene have a target completion date. Tip: Hide the elements as you assign a completion date. This will make it easier to keep track of what still needs a date assigned.

**6.** When all elements have a date assigned, unhide everything and export the model again to Reflect using the **Export View** option in the Unity tab (**Figure 05**)..

[Image: image]Mark step as complete

## 3. Running the Custom Viewer in Unity

Q&A (0)

For this project, we’re going to use a custom viewer created by Brian Bare, solutions engineer at Unity. This viewer contains a slider and scripts that will search for the specified metadata, create a list of dates based on the imported dates, and then hide and show elements based on the dates assigned to them.

**1.**Install the Unity Reflect package via the Package Manager.

**2.**Download and import the “CreatingConstructionSequenceViewer_Resources” package from the Tutorial Materials tab.

**3.**Add the custom viewer to the Scene by dragging the Reflect Custom Viewer Sequencing Prefab from **Assets** > **Custom Reflect Viewer** > **Prefabs** to the Scene Hierarchy (**Figure 06**).

[Image: image]

**7.** Expand this custom viewer Prefab and select **Canvas**> **Completion Canvas** (**Figure 07**).

[Image: image]

**8.** In the Inspector, add the metadata field you will be using to retrieve the dates to the **Parameter** slot. This is the parameter that was set up in Revit. In this tutorial, we used  Completion Target (**Figure 08**).

[Image: image]

**9.** Run the project and import the Revit model you exported. Select the construction sequence button (**Figure 09**).

[Image: image]

**10.** A slider will appear. As you move the slider back and forth, it will iterate between the dates specified in the metadata and show/hide elements based on their status (**Figure** **10**).

[Image: image]Mark step as complete

## 4. Next Steps

Q&A (0)

Open and study the scripts to gain an understanding of how the metadata is passed and how it’s used to populate the slider. The scripts can be found under **Assets** > **Custom Reflect Viewer**> **Scripts**.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
