[Image: image]

# Anatomy of the Reflect Viewer

Tutorial

intermediate

+10XP

20 mins

1

Unity Technologies

[Image: Anatomy of the Reflect Viewer]Summary

The Unity Reflect Viewer Prefab comes with the Reflect package from the Unity Package Manager. This Prefab contains all of the Reflect Viewer’s UI elements and allows you to run the Viewer in the Unity Editor with the same functionality as the standalone viewer.

Languages available:

EnglishEnglish日本語English

## 1. Overview

Q&A (0)

The Unity Reflect Viewer project available from Github comes with the Reflect Viewer UI and functionality already set up for you. This project contains all of the Reflect Viewer’s UI elements and allows you to run the Viewer in the Unity Editor with the same functionality as the standalone viewer.

Mark step as complete

## 2. Introduction

Q&A (0)

The Reflect Viewer project is the “raw” version of the standalone viewer and is the project on which the standalone viewer is built. By understanding the different parts of this Unity project, you can start customizing it and building your own version. You could build, for example:

- A viewer that displays a customer’s branding
- A viewer with a different layout and functionality
- UI elements with a different visual style

For this tutorial, you will need:

- The Reflect Viewer project downloaded from [Github](https://github.com/Unity-Technologies/com.unity.reflect.viewer)
- A Pro license for the Unity Editor

Mark step as complete

## 3. The Reflect project

Q&A (0)

After downloading and opening the Unity Reflect project from GitHub you will find the Reflect scene in your project **Assets** > **Scenes** folder (**Figure 01**).

[Image: image]

When you open this scene, you will find the Reflect viewer already set up in the scene (**Figure 02**).

[Image: image]

Now we’ll explore the different parts of the Reflect Viewer.

The first thing to understand is that you are currently looking at the Reflect Viewer as a Unity project. Should you decide to build it now, you will have the exact same viewer application that clients use to look at the CAD and BIM models you export from Revit or other Reflect-compatible applications.

Play the Scene to see the viewer in action. Note that the account the Viewer uses is the same account you used to sign in to the Unity Editor. In order to see your projects, make sure they are assigned to the same account you use in the Unity Editor (**Figure 03**).

[Image: image]

Stop the program to return to the Editor. The Reflect Viewer canvas will now be visible in the Scene (**Figure 04**).

[Image: image]

Looking at the Reflect GameObject in the Scene explorer, you’ll notice there are child GameObjects in the Hierarchy (**Figure 05**).

[Image: image]Mark step as complete

## 4. Child elements of the Reflect GameObject

Q&A (0)

### **MARS Session**

This GameObject contains the scripts for integrating Unity Mars into your project. Note that you need a MARS subscription for this to be used in your project.

### **Reflect**

Contains the scripts and settings for the Reflect rendering pipeline.

### **Post-Processing Volume**

Empty GameObject that contains the post processing script and setting for the scene.

### **Managers**

This GameObject contains the scripts that manage the Reflect Viewer at runtime (**Figure 06**).

[Image: image]

### **Events system**

This is the container for all the scripts that handle events in the Reflect Viewer.

### **Root**

The Root GameObject is a bit different from the rest. This object does not house anything in edit mode. At runtime, when a project is downloaded, this object is used to contain all the geometry, Materials and metadata of the model (**Figure 07**).

[Image: image]

### **BoundingBoxRoot**

The BoundingBoxRoot is used by the application to determine where  the SpatialFilterNode will place the blue bounding boxes

### **PlacementRoot**

PlacementRoot is required in AR when you are placing your model. It serves as a way to rotate around the center of the model

### **Directional Light**

The directional light acts as the sun in the scene and is linked to/manipulated by the Sun Study tool in the application.

### **UI root**

The UI Root GameObject contains all of the canvases, buttons and other elements that make up the user interface of the application.

Mark step as complete

## 5. Next Steps

Q&A (0)

You should now have a firm grasp of the Unity Reflect Viewer GameObject  and how the different components fit together. Use that knowledge to explore how to customize the viewer user interface to your specific needs using the basic Unity canvas tools and UI workflows.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
