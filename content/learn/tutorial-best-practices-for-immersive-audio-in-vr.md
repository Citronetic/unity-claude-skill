[Image: image]

# Best Practices for Immersive Audio in VR

Tutorial

intermediate

+0XP

25 mins

156

(36)

Unity Technologies

[Image: Best Practices for Immersive Audio in VR]Summary

In physical reality, the shape, layout, and physical materials of your environment affect how sound reaches your ears. In this tutorial, we'll explore how to use audio spatializer plug-ins to match your VR audio to the visual experience.

Languages available:

EnglishEnglishEnglish

## 1. Best Practices for Immersive Audio in VR

Q&A (0)

This tutorial has been verified using:

Unity 2019.4.12f1 LTS

Windows XR Plugin 2.3.0

NuGet for Unity 2.0.1

Microsoft.SpatialAudio.Spatializer.Unity 1.0.36 (NuGet package)

Oculus Integration 20.1

In physical reality, the shape, layout, and physical materials of your environment affect how sound reaches your ears. In this tutorial, we'll explore how to use audio spatializer plug-ins to match your VR audio to the visual experience.

Both Oculus and Microsoft provide spatializer plug-ins for VR in Unity. Using a spatializer plug-in will allow your physical environment (for Oculus) and the position and angle of Audio Sources, relative to the user, to affect how they sound, as in real life. We'll look at how to use these in combination with 3D Sound Settings on Audio Sources to provide high-fidelity VR audio.

Mark step as complete

## 2. Installing the Microsoft Audio Spatializer

Q&A (0)

There are two Microsoft Audio Spatializers. MS HRTF Spatializer is for projects that need to be compatible with earlier HoloLens and Windows XR headsets and projects. This is included in the Windows XR Plugin, installed via the Package Manager.

1. From the Window drop-down, select **Package Manager**.

2. In the left column, click **Windows XR Plugin**. Click **Install** in the lower-right corner (**Figure 01**).

[Image: image]

Microsoft Spatial Audio is downloaded via [NuGet](https://github.com/GlitchEnzo/NuGetForUnity/releases/latest), an add-on Package Manager for Unity, and should be used for new projects.

1. Save the [latest version of the NuGet](https://github.com/GlitchEnzo/NuGetForUnity/releases/latest) package to your computer.

2. From the Assets menu, select **Import Package** > **Custom Package** (**Figure 02**).

[Image: image]

3. Navigate to where you saved NuGet.unitypackage (the actual file will be named to reflect its version number). Click to select, and click **Open**.

4. You can also double-click on the downloaded NuGet.unitypackage with Unity open to install.

5. Leave all files selected and click **Import** (**Figure 03**).

[Image: image]

6. Once installed, click the NuGet drop-down and select **Manage NuGet Packages** (**Figure 04**).

[Image: image]

7. In the Search bar, type **Spatializer**. Click **Install** in the upper-right corner of the entry for Microsoft.SpatialAudio.Spatializer.Unity (**Figure 05**).

[Image: image]Mark step as complete

## 3. Installing the Oculus Audio Spatializer

Q&A (0)

The Oculus Audio Spatializer for Unity is available as a [standalone](https://developer.oculus.com/downloads/package/oculus-spatializer-unity/) .unitypackage, on the Oculus Developer website, or as part of the Oculus Integration Unity Asset.

1. Select **Asset Store** from the Window drop-down in the Unity Editor.

2. Search for **Oculus Integration** (**Figure 06**).

[Image: image]

3. Click **Oculus Integration**. Click the button to download, then again to import to your project (**Figure 07**).

[Image: image]

4. Click **Import** in the lower-right corner to import the Oculus Integration Package (**Figure 08**).

[Image: image]

5. If prompted to update to a newer version of the OVRPlugin, click **Yes** (**Figure 09**).

[Image: image]

6. After updating OVRPlugin, restart the Unity Editor (**Figure 10a**).

[Image: image]

7. When prompted, click **Upgrade** to use the new spatializer plug-in (**Figure 10b**).

[Image: image]

8. Finally, click to restart the Unity Editor to use the new spatializer plug-in (**Figure 10c**).

[Image: image]

9. The Unity Editor should now restart, using the newest version of the Oculus Audio Spatializer.

Mark step as complete

## 4. Assigning an Audio Spatializer to Your Project

Q&A (0)

1. From the Edit drop-down, select **Project Settings**.

2. In the left column, click **Audio**.

3. Click **Spatializer Plugin** and make your selection (**Figure 11**).

[Image: image]Mark step as complete

## 5. Adding Spatial Abilities to Audio Sources

Q&A (0)

1. If using the Oculus Audio Spatializer, set **Output** to use the Spatializer mixer.

2. Click **Spatialize** to enable spatialization and, optionally, **Spatialize Post Effects**.

3. Finally, set the **Spatial Blend** from 2D to 3D (**Figure 12**).

[Image: image]Mark step as complete

## 6. Using the Microsoft Audio Spatializers

Q&A (0)

The Microsoft Audio Spatializer automatically handles spatialization for Audio Sources that have spatialization enabled.

Mark step as complete

## 7. Using the Oculus Audio Spatializer

Q&A (0)

When targeting Oculus hardware, you can assign physical material properties to any GameObject with a Mesh Filter or Terrain component in your Scene. The GameObject needs to be static.

For each piece of level geometry that should affect audio:

1. Click to select the GameObject in the Hierarchy view.

2. Add the ONSP Propagation Geometry component.

3. Check the box labeled **File Enabled**. If applicable, also check **Include Child Meshes** (**Figure 13**).

[Image: image]

4. When you’ve attached the ONSP Propagation Geometry component to all participating Meshes and Terrains, you’re ready to build the audio geometry for your Scene(s) by using the Oculus drop-down to select either option from the Spatializer submenu (**Figures 14-15**).

[Image: image][Image: image]

5. This attaches an ONSP Propagation Material component to each GameObject with the ONSP Propagation Geometry component, allowing you to assign a physical material preset, or define a custom material to alter sound in the virtual environment (**Figure 16**).

[Image: image]

6. Each time the menu (from Step 4) is used to bake audio geometry, another ONSP Propagation Material component is added to all applicable GameObjects. Instead of baking all the Scene geometry again, you can bake newly-added geometry by clicking **Bake Mesh to File** in the Inspector (**Figure 17**).

[Image: image]Mark step as complete

## 8. Conclusion

Q&A (0)

Audio spatialization can take your VR project’s aural immersion to the next level.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
