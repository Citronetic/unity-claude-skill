[Image: image]

# Creating Volumetric Fog

Tutorial

intermediate

+10XP

20 mins

195

(97)

Unity Technologies

[Image: Creating Volumetric Fog]Summary

Volumetric Fog is a powerful tool in an environment artist's kit. Volumetric Fog is a wonderful addition to any scene that could use a sense of space, whether it be a dusty town, a gloomy cemetery, or a grand throne room. Most implementations of fog, such as exponential or linear fog, are computed at an object’s surface by the Shader that the surface uses. At most, this is once per pixel. Volumetric fog, on the other hand, is computed at intervals in the empty space in front of the camera, independent of any surface. In this tutorial, you will learn to create and adjust Volumetric Fog.

Languages available:

日本語English日本語日本語

## 1. Creating Volumetric Fog

Q&A (0)

This tutorial has been verified using Unity 2019.4.12f1 LTS - [https://learn.unity.com/tutorial/creating-volumetric-fog-2019-3](https://learn.unity.com/tutorial/creating-volumetric-fog-2019-3)

Most implementations of fog, such as exponential or linear fog, are computed at an object’s surface by its Shader. At most, this is once per pixel. Volumetric Fog, on the other hand, is computed at intervals in the empty space in front of the camera, independent of any surface. As a result, the fog can interact with light and shadow through space in a more realistic way. This effect can be used to pull a Scene together or draw the viewer’s eye to a particular spot. For example, in **Figure 01**, the fog draws the eye to the light shaft.

[Image: image]

With the Exponential Fog, note that:

- The sky is not tinted by fog. (There is no surface that implements fog.)
- There are no shafts of light. (Exponential fog, by its surface-dependent nature, can’t accept shading.)

**Note**: In Unity 2018 and newer versions, volumetric fog is available only in the High Definition Render Pipeline (HDRP). You’ll need to either create or upgrade a project with the HDRP template, or use Unity 2017 or older.

ステップを完了としてマーク

## 2. If Using Unity 2018 or Newer:

Q&A (0)

To start a new project with HDRP enabled, do the following:

1. Open the Unity Editor and click the**New Project** button.
2. In the Template drop-down menu, select **High-Definition RP *(Preview)****.*
3. Click **Create** **Project**.

To upgrade an existing project, you must first download HDRP using the Package Manager.

1. Go to the Window drop-down and select **Package Manager** to open the Packages window.
2. Find **High Definition RP** in the list and select it.
3. Click **Install**.

After the package has been installed from the Package Manager, you need to add the HDRP Asset to the Scriptable Render Pipeline Graphics settings field.

1. Go to the Edit drop-down and select**Project Settings** > **Graphics**.
2. Create a new HDRenderPipelineAsset by going to the Assets drop-down and selecting **Create**> **Rendering**> **High Definition Render Pipeline Asset**.
3. In the Graphics Inspector, drag and drop **HDRenderPipelineAsset** into the Scriptable Render Pipeline field*.*

You’re now ready to add volumetric fog to your project.

ステップを完了としてマーク

## 3. Adding Volumetric Fog

Q&A (0)

To add Volumetric Fog to a Scene, you’ll need to add a global settings volume. A global settings volume is a GameObject that exists in the Scene and overrides certain Scene settings. If your Scene does not already have a global settings volume, add a new one. From the top bar, navigate to **GameObject**> **Volume**> **Sky and Fog Volume** (**Figure 02**).

This will create a new object and a new settings profile with some default settings you’ll be able to configure to use Volumetric Fog.

[Image: image]

This new settings profile is, by default, configured to use Volumetric Fog. At this point, we should have a nice light orange sky with some fog (**Figure 03**).

[Image: image]

At this point, Volumetric Fog is being rendered, but with little to no density, meaning nothing is visible. Volumetric Fog density is determined globally by the Base Fog Distance value of the Volumetric Fog module, and locally by the Fog Distance value of density volumes throughout the Scene. Fog Distance represents how far you can see through the fog. By default, the Base Fog Distance is set to 1 million meters. As a result, the fog is effectively negligible. Note that this value does not affect fog render distance, just density.

To define atmospheric density, you can either change Base Fog Distance in the Volumetric Fog module or create a new Density Volume (**Figure 04**). For now, leave the global settings at their default.

1. Create a new empty Density Volume by selecting **Rendering**> **Density Volume** under the GameObject drop-down.

2. Move the volume and adjust the size property so that it covers the entire area that you want affected by fog.

a. You may want to cover additional space to allow room to use the Blend Distance property.

[Image: image]

Density Volumes are additive and do not override one another. Therefore, the global settings should reflect the least amount of fog that will exist in your Scene. Lower values — shorter distances — result in denser fog. A value of 50 is a decent starting point for thick fog (**Figure 05**).

Single Scattering Albedo determines the tint and absorption ratio. The color you choose depends on your Scene. A misty haze might be white or off-white. Dense smoke or smog would be darker. Sand would be a light shade of orange (**Figure 05**).

[Image: image]

You may want to define a shape or pattern for your fog. A Density Volume can take a 32x32x32 Alpha8 Texture3D and provides tiling parameters. You may assign an existing 3D Texture by clicking the Texture socket in the Density Mask Texture section of the Inspector (**Figure 06**).

[Image: image]

The Anisotropy setting in the Volumetric Fog module of the global settings volume influences how light scatters through the fog in your Scene. Negative values favor light bouncing away from the source. Positive values favor light bouncing back toward the source. If light shafts are what you’re after, an Anisotropy value between -0.25 and 0.125 produces the best result.

Global Light Probe Dimmer controls how much light is absorbed by fog density globally.

Max Fog Distance represents the farthest that fog is rendered, including Distant Fog. Generally, this should be equal to or greater than the Camera’s Far Clipping Plane distance.

ステップを完了としてマーク

## 4. Conclusion

Q&A (0)

New to Unity with HDRP, Volumetric Fog is a powerful tool in an environment artist’s kit. It’s a wonderful addition to any Scene that could use a sense of space, whether it be a dusty town, a gloomy cemetery, or a grand throne room.

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
