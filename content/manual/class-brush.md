This version of Unity is unsupported.

Terrain Layers

Trees

# Brushes

When you apply a tool such as [Paint Texture](terrain-PaintTexture.html) or [Smooth Height](terrain-SmoothHeight.html) to the **Terrain**The landscape in your scene. A Terrain GameObject adds a large flat plane to your scene and you can use the Terrain’s Inspector window to create a detailed landscape. [More info](terrain-UsingTerrains.html)
See in [Glossary](Glossary.html#Terrain), Unity uses a Brush, which is a [ScriptableObject](../ScriptReference/ScriptableObject.html) in the Terrain system. The Brush defines the tool’s shape and strength of influence.

## Built-in Brushes

Unity comes with a collection of built-in Brushes. They range from simple circles for quickly sketching designs, to more randomized scatter shapes that are good for creating detail and natural-looking features.

[Image: Built-in Brushes in the Terrain Inspector]
Built-in Brushes in the Terrain Inspector

You can also select Brush Masks from the Terrain overlays. To see available Brush Masks from the Terrain overlays, select a Terrain tool that you can use to paint.

[Image: Brush Masks in Overlays]
Brush Masks in Overlays

## Custom Brushes

You can create your own custom Brushes with unique shapes or specific parameters for your needs. For example, use the **heightmap**A greyscale Texture that stores height data for an object. Each pixel stores the height difference perpendicular to the face that pixel represents.
See in [Glossary](Glossary.html#Heightmap) Texture of a specific geological feature to define a Brush, then use the [Stamp Terrain](terrain-StampTerrain.html) tool to place that feature on your Terrain.

To create a new Brush, click the **New Brush** button in the Terrain **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector) window.

[Image: New Brush button in the Terrain Inspector]
New Brush button in the Terrain Inspector

After you click **New Brush**, the **Select Texture2D** window appears. Choose a Texture to define the shape of your new Brush, then use the Brush Inspector to adjust the **Falloff** and **Radius Scale** values.

[Image: Window for selecting Brush Texture]
Window for selecting Brush Texture

Alternatively, right-click in the **Project**In Unity, you use a project to design and develop a game. A project stores all of the files that are related to a game, such as the asset and Scene files. [More info](2Dor3D.html)
See in [Glossary](Glossary.html#Project) window, and choose **Create > Brush** to create a new Brush. The default Brush shows a simple circle defined by a white **Mask Texture**, a **Falloff** curve, and a **Radius Scale** of 1. Use the Brush Inspector to change these values, or set a Texture to define the shape of the Brush. You can also use the **Remap** slider and the **Invert Remap Range** option to further modify the grayscale values of the **Brush** Texture.

[Image: Brush Inspector with default settings]
Brush Inspector with default settings

## Brush settings

| Property | Function |
| --- | --- |
| Mask Texture | Defines the shape and strength of the Brush. Select a Texture in your project, and the system creates a grayscale mask from the Texture. If the selected Texture has multiple color channels, the Brush uses the Red channel as its source. |
| Remap | Remaps the grayscale values of the Brush mask, after applying the Falloff curve. The Editor remaps black values in the Brush mask to the value you select using the left side of the slider, and remaps white values in the Brush mask to the value you select using the right side of the slider. |
| Invert Remap Range | Inverts the left and right sides of the Remap slider, which basically inverts the values of the entire mask. |
| Falloff | Defines a curve that affects the strength of the Brush in a circular fashion. Click the Falloff curve to open the Unity Curve Editor, where you can edit the curve to create effects ranging from smooth fades to sharp edges. |
| Radius Scale | Affects the scale of the falloff curve. Use this option to increase or decrease the radius of the curve. |

---

- 2019–10–22 Page amended

- Updated screenshots to match the new UI and added information about new options in the Brush Inspector.

Brush

Terrain Layers

Trees
