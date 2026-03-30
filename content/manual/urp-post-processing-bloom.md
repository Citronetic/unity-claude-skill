This version of Unity is unsupported.

Post-processing Volume Overrides reference for URP

Channel Mixer Volume Override reference for URP

# Bloom Volume Override reference for URP

[Image: Scene with Bloom effect turned off.]
Scene with Bloom effect turned off.

[Image: Scene with Bloom effect turned on.]
Scene with Bloom effect turned on.

The Bloom effect creates fringes of light extending from the borders of bright areas in an image. This creates the illusion of extremely bright light overwhelming the **Camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](../CamerasOverview.html)
See in [Glossary](../Glossary.html#Camera).

The Bloom effect also has a **Lens Dirt** feature, which you can use to apply a full-screen layer of smudges or dust to diffract the Bloom effect.

## Properties

### Bloom

| Property | Description |
| --- | --- |
| Threshold | Set the gamma space brightness value at which URP applies Bloom. URP does not apply Bloom to any pixelsThe smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. More infoSee in Glossary in the sceneA Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. More infoSee in Glossary that have a brightness lower than this value. The minimum value is 0, where nothing is filtered. The default value is 0.9. There is no maximum value. |
| Intensity | Set the strength of the Bloom filter, in a range from 0 to 1. The default is 0, which means that the Bloom effect is disabled. |
| Scatter | Set the radius of the bloom effect in a range from 0 to 1. Higher values give a larger radius. The default value is 0.7. |
| Tint | Use the color picker to select a color for the Bloom effect to tint to. |
| Clamp | Set the maximum intensity that Unity uses to calculate Bloom. If pixels in your scene are more intense than this, URP renders them at their current intensity, but uses this intensity value for the purposes of Bloom calculations. The default value is 65472. |
| High Quality Filtering | Enable this to use high quality sampling and bilinear filtering instead of bicubic filtering. This reduces flickering and improves the overall smoothness but is more resource-intensive and can affect performance.If you experience performance issues with Bloom, disable this property to greatly improve performance, especially on lower-end hardware and platforms. |
| Downscale | Set the initial resolution scale for the effect. The lower this value is, the fewer system resources the initial blur effect consumes.For best performance, set this value to Quarter to significantly reducde the initial resource cost of Bloom.This property is available only if you open the More (⋮) menu and select Advanced Properties. |
| Max Iterations | The size of the rendered image determines the number of iterations. Use this setting to define the maximum number of iterations. Decreasing this value reduces processing load and increases performance, especially on mobile devices with high DPI screens. The default value is 6.This property is available only if you open the More (⋮) menu and select Advanced Properties. |

### Lens Dirt

| Property | Description |
| --- | --- |
| Texture | Assign a Texture to apply the effect of dirt (such as smudges or dust) to the lens.If you have performance issues with Bloom, try a lower resolution Texture so Lens Dirt uses less memory. |
| Intensity | Set the strength of the Lens Dirt effect. |

Post-processing Volume Overrides reference for URP

Channel Mixer Volume Override reference for URP
