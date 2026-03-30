This version of Unity is unsupported.

Get started with 2D game development

2D game creation workflow

# Set up a project for 2D games

**Note**: For this guide, Unity recommends and assumes that you choose the [Universal Render Pipeline (URP)](universal-render-pipeline.html) and not the [Built-in Render Pipeline](built-in-render-pipeline.html).

1. Install Unity version 2019 LTS or a later version; see [Installing Unity](GettingStartedInstallingUnity.html).

2. Create a new project with the [2D template](https://docs.unity3d.com/hub/manual/Templates.html).

3. In the Package Manager, install the latest [URP package](urp/urp-introduction.html) version; see [Installing the Universal Render Pipeline into an existing Project](urp/InstallURPIntoAProject.html).

4. Install any optional packages you need; see [Installing packages](#InstallingPackages).

## Installing packages

Most packages you need to make a 2D game in Unity are included in the Unity Editor. The following table lists the packages included by default when you choose the [2D template](https://docs.unity3d.com/hub/manual/Templates.html):

| Package | Description |
| --- | --- |
| 2D Animation | 2D Animation provides the necessary tooling and runtime components for applying skeletal animation to your SpritesA 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. More infoSee in Glossary. |
| 2D Pixel Perfect | The 2D PixelThe smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. More infoSee in Glossary Perfect package contains the Pixel Perfect CameraA component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. More infoSee in Glossary component, which ensures your pixel art remains crisp and clear at different resolutions, and stable in motion. A standalone 2D Pixel Perfect package that doesn’t require the URP is available if you want to use this package in a project using the Built-in Render Pipeline instead. |
| 2D PSD Importer | The 2D PSD Importer package allows you to import multilayered PSD files from Photoshop. You can use this for your Sprites, or to rig your characters. |
| 2D Sprite | The Sprite Editor provides an in-Editor environment to create and edit Sprite assets. Sprite Editor lets you add custom behavior for editing Sprite-related data. |
| 2D SpriteShape | 2D Sprite Shape allows you to create organic shapes and terrainsThe landscape in your scene. A Terrain GameObject adds a large flat plane to your scene and you can use the Terrain’s Inspector window to create a detailed landscape. More infoSee in Glossary, similar to a vector drawing tool. For example, you can choose the fill texture and border Sprites. |
| 2D Tilemap Editor | 2D TilemapA GameObject that allows you to quickly create 2D levels using tiles and a grid overlay. More infoSee in Glossary Editor allows you to create grid-based worlds with square, hexagonal or isometric tiles. Add your Tiles to the Tile Palette, and paint and fill Tile Grids using different settings and brushes. Extra tools let you add smart drawing, randomization or animation to the Tile assets. |

The following table lists some optional packages you can install that might be particularly useful for 2D game development:

| Package | Description |
| --- | --- |
| Shader Graph | ShaderA program that runs on the GPU. More infoSee in Glossary Graph lets you build your shaders visually. |
| Cinemachine | The Cinemachine package is a suite of modules that provide advanced functionality for operating the Unity Camera. |
| 2D Tilemap Extras | The 2D Tilemap Extras package contains reusable 2D and Tilemap Editor scriptsA piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. More infoSee in Glossary that you can use for your own Projects. |

Get started with 2D game development

2D game creation workflow
