[Image: image]

# Getting Started with CAD Models in Unity with PiXYZ

Tutorial

Beginner

+10XP

30 mins

1

(11)

Unity Technologies

[Image: Getting Started with CAD Models in Unity with PiXYZ]Summary

In this tutorial we’ll introduce the PiXYZ Plugin for Unity, a tool used for importing Computer Aided Design (CAD) models into your Unity projects.

Languages available:

EnglishEnglishEnglish

## 1. Why PiXYZ?

Q&A (0)

In this module we’ll introduce the PiXYZ Plugin for Unity, a tool used for importing Computer Aided Design (CAD) models into your Unity projects.

[Image: image]

Using CAD data in 3D engines is traditionally a very difficult process, but PiXYZ simplifies things by streamlining that process. The PiXYZ Plugin cannot offer all of the options that PiXYZ Studio can; however, we’ll go into more detail on that in the Intermediate module.

**What you will learn:**

By the end of this module, you’ll be able to:

- Import a small CAD model with the PiXYZ Plugin (v2018.1.2)
- Make data adjustments from the import dialog

See an example of the before and after that you will create using PiXYZ Studio:

[Image: image][Image: image]Mark step as complete

## 2. Overview

Q&A (0)

Time to learn the essentials needed to unlock your CAD data with Unity and PiXYZ. Use the PiXYZ tools to simplify and import CAD models into your Unity project.

[Image: image]

In short, PiXYZ Studio and PiXYZ Unity Plugin, allow the use of complicated engineering model formats in Unity, previously almost impossible to use. In the case of AEC, that means full vehicle CAD files of types such as .STEP, .JT, and .CATIA model files but also forthcoming Revit format as well.

**What Will You Do?**

In this tutorial you’ll be using a Brake model; however, in the Challenge you’ll work with a full car in .wire format.

- Setup your Unity Project with PiXYZ.
- Import a CAD model using PiXYZ Plugin

This exercise will teach you how to navigate PiXYZ Plugin.

**What is PiXYZ Software?**

PiXYZ Software, namely Studio and Plugin for Unity, enables engineering models and accompanying data to be used in Unity real-time with VR and AR.

For more information on the acceptable file types check [the PiXYZ website](https://www.pixyz-software.com/plugin/?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774956207785).

Mark step as complete

## 3. Setup your Unity Project with PiXYZ Plugin

Q&A (0)

Download PiXYZ-DEMO-BRAKES-v2017 from the PiXYZ website.

[Image: image]

Import PiXYZ plugin for Unity into your Unity Project

[Image: image]

Activate a 7 day trial and configure the License manager

[Image: image]

**Step by Step**

1. First navigate to the PiXYZ [website](https://www.pixyz-software.com/download/?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774956207785) and download the file titled [SAMPLE]-PiXYZ-DEMO-BRAKES-v2017

2. Visit the PiXYZ [website](https://www.pixyz-software.com/download/?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774956207785) and download the plugin and activate a 7-day trial (for compatibility with Unity 2017.4.10 download a version prior)

[Image: image]

3. Import PiXYZ Plugin for Unity from the Assets > Import Package > Custom Package

4. Select the recently downloaded PiXYZ Unity Package in the Explorer and click on the Open button on *PiXYZ4Unity-2018.1.2.6*

5. You’ll need to properly setup your License Manager. The best way to do this will be to login using the Online tab and after you’ve done that you’ll get a list of your licenses to choose from. Login and choose your license trial version (which you’ll need to request from the [PiXYZ website](https://www.pixyz-software.com/download/?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774956207785))

[Image: image][Image: image][Image: image]Mark step as complete

## 4. Import CAD using PiXYZ Plugin

Q&A (0)

Use PiXYZ>Import CAD and then select the wheel model that you’ve downloaded.

[Image: image]

Check the Game Window, and check the Stats window and review the Tri Count and Vertsmetrics.

[Image: image]

**What is Tri Count?**

Tri Count means the number of triangles, which act as a polygon surface representation unit. Remember that we can approximate many types of surfaces by linking large sums of triangles together.

**What are Verts?**

Verts means vertices. Think of a triangle for a concrete idea of what this refers to.

[Image: image]

The computer discerns how to display graphics based on the processing of groups of vertices in a triangular representation.

**What is Scale?**

This sets the scale of the imported model, model scale is usually

[Image: image]

**What is Right-handed?**

Use this setting to mirror model from a right-handed coordinate system to a left-handed one

**What is Z-up?**

Use this setting to rotate a model from a coordinate system that has the z-axis pointing up to one that has the y-axis pointing up (Unity is a Y-up coordinate system)

**What is “Merge all objects by material”?**

All objects contained in the original model that share the same material will be merged together

**What is LODs Mesh Quality?**

As your scenes in Unity get larger, performance becomes a bigger consideration. One of the ways to manage this is to have meshes with different levels of detail depending on how far the camera is from the object. To learn more visit Unity’s documentation about [Level of Detail Groups](https://docs.unity3d.com/Manual/class-LODGroup.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774956207785).

**How do we access and use MetaData in our workflow?**

The PiXYZ PLUGIN for Unity has the ability to import Metadata from CAD software, such as types, manufacturers, physical properties, ownership, timestamps, and more.

To import a CAD model with its metadata, you must enable Metadata in the import menu.

[Image: image]

When a model is imported with the plugin with the Metadata option, nodes holding metadata information will be transposed in Unity with GameObjects with a Metadata component attached. This means that we can identify individual objects, and in turn perform actions on these objects based on their respective metadata.

[Image: image]

Importing metadata unlocks another level of control over your CAD models, enabling you to perform actions over specific objects at once.

Common uses of metadata include disabling and enabling objects at particular times, changing a large group of objects’ materials or textures, adding Rigidbodies, and other component modifications at scale.

Note:  Not all GameObjects imported with PiXYZ PLUGIN for Unity contain Metadata. Only nodes that have metadata in the original CAD file.

**Step by Step**

1. Use PiXYZ>Import CAD and then select the wheel model that you’ve downloaded

2. When prompted select the PiXYZ-DEMO-BRAKES.CATProduct.Then click Import.

3. For the best results with the PiXYZ plugin use the following settings. Each is visited in a dropdown below.

[Image: image]

PiXYZ is faster than normal import for models since it’s multi-threaded.

[Image: image]Mark step as complete

## Complete this Tutorial

Mark all steps complete
