This version of Unity is unsupported.

Sculpt height with the Noise tool

Noise reference

# Other ways to use noise

**Note:** This tool is only available in the [Terrain Tools package](https://docs.unity3d.com/Packages/com.unity.terrain-tools@latest/).

Alongside the Noise height sculpting tool, you can use the noise mask with other brush-based tools, as a source for 2D textures and 3D assets, and as a shareable settings asset.

## Use a noise mask on brush-based tools

You can add noise as a mask to any height or texture brush to add variety without creating multiple brushes. The mask uses the same **Noise Editor** window that the Noise height sculpting tool uses, so it has the same options. For more information, refer to [Noise reference](terrain-Noise-Ref.html) and to [Brushes](class-Brush.html).

## Export noise output as 2D or 3D textures

You can also export a noise output as a texture to use as:

- A brush for any other brush-based tool from a 2D .png. For information about brush-based workflows and masks, refer to [Brushes](class-Brush.html).

- A **heightmap**A greyscale Texture that stores height data for an object. Each pixel stores the height difference perpendicular to the face that pixel represents.
See in [Glossary](Glossary.html#Heightmap) for new **Terrain**The landscape in your scene. A Terrain GameObject adds a large flat plane to your scene and you can use the Terrain’s Inspector window to create a detailed landscape. [More info](terrain-UsingTerrains.html)
See in [Glossary](Glossary.html#Terrain) tiles from a 2D .png.

- A 3D texture that you can use elsewhere in the Editor, for example to create a **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader).

To export the noise output, use the **Noise Editor** window from either:

- **Window** > **Terrain Tools** > **Noise Editor**.

- **Brush Mask** > **Noise** mask > **Edit**.

- A Terrain tile’s **Inspector** window > **Paint Terrain** tool > tool dropdown > **Sculpt** > **Noise**. can export from the **Noise Editor** window for a Noise mask, or from the **Noise** height sculpting tool.

### Export options

| Option | Description |
| --- | --- |
| Noise Settings | The settings file the Noise Editor is using as a template for exporting noise settings. You can’t change this file. |
| Texture Type | Choose between a 2D texture (exported as .png), or a 3D asset. |
| Dimensions | Specify the texture’s size, where X is width and Y is height. If you set the Texture Type to Texture 3D, you can also specify the z-axis. |
| Texture FormatA file format for handling textures during real-time rendering by 3D graphics hardware, such as a graphics card or mobile device. More infoSee in Glossary | Choose the texture format. For a list of supported formats, refer to GraphicsFormat. |

## Reuse and share noise settings

The Unity Editor always saves noise settings to a settings asset file. You can create multiple setting files to reuse or share.

You can:

- Save your noise settings to the current noise settings asset.

- Revert changes you’ve made to the noise settings.

- Save your noise settings to a new noise settings asset.

To create an asset of noise definitions, use the **Noise Editor** window from either:

- **Window** > **Terrain Tools** > **Noise Editor**.

- **Brush Mask** > **Noise** mask > **Edit**.

- A Terrain tile’s **Inspector** window > **Paint Terrain** tool > tool dropdown > **Sculpt** > **Noise**.

To go back to the default definition asset:

1. In the Noise Settings Assets field, select the **prefab**An asset type that allows you to store a GameObject complete with components and properties. The prefab acts as a template from which you can create new object instances in the scene. [More info](Prefabs.html)
See in [Glossary](Glossary.html#Prefab) picker (circle).

2. In the Select Noise Settings window, select None.

## Additional resources

- [Noise reference](terrain-Noise-Ref.html)

- [Sculpt height with the Noise tool](terrain-Sculpt-Noise-Landing.html)

- [Noise and fractal types](terrain-Noise-Types.html)

Sculpt height with the Noise tool

Noise reference
