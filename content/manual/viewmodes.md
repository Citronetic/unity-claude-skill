This version of Unity is unsupported.

Scene visibility

Gizmos and handles

# Scene view Draw Modes and View Options overlays

Use the **Draw Modes** and **View Options** overlays to change how the ****Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene)** view displays your scene.

These controls only affect the **Scene** view during development and have no effect on the built game.

## The Draw Modes overlay

Change the way meshes render in the **Scene** view.

[Image: The Draw Modes overlay with the Unlit Draw Mode selected]
The Draw Modes overlay with the Unlit Draw Mode selected

| Draw Mode |  | Description |
| --- | --- | --- |
| Shading Mode |  |  |
|  | Wireframe | Draw meshes with a wireframe representation. |
|  | Shaded Wireframe | Show meshes textured and with wireframes overlaid. |
|  | Unlit | Don’t use scene lighting. |
|  | Shaded | Show surfaces with their textures visible. |
|  | Debug | Refer to the Debug Mode options. |

### The Debug Mode options

The Debug Draw Mode has several options that help you unerstand your graphics and lighting better.

| Debug Mode option |  | Description |
| --- | --- | --- |
| Lighting |  |  |
|  | Contributors / Receivers | Show the lightmapA pre-rendered texture that contains the effects of light sources on static objects in the scene. Lightmaps are overlaid on top of scene geometry to create the effect of lighting. More infoSee in Glossary contributors and receivers for the selected GameObjectThe fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. More infoSee in Glossary. |
|  | Shadow Cascades | Show directional light [shadow cascades](shadow-cascades. |
| Realtime Global IlluminationA group of techniques that model both direct and indirect lighting to provide realistic lighting results.See in Glossary |  | Visualize aspects of the Enlighten Realtime Global Illumination system. Refer to GI Visualisations for information about each of these modes. |
| Baked Global Illumination |  | Visualize aspects of the Baked Global Illumination system. For more information about each of these modes, refer to GI Visualisations. |
| Deferred |  | View each of the elements of the G-buffer in isolation. For more information, refer to Deferred ShadingA rendering path in the Built-in Render Pipeline that places no limit on the number of Lights that can affect a GameObject. All Lights are evaluated per-pixel, which means that they all interact correctly with normal maps and so on. Additionally, all Lights can have cookies and shadows. More infoSee in Glossary. |
| Miscellaneous |  |  |
|  | Render Paths | Show the rendering pathThe technique that a render pipeline uses to render graphics. Choosing a different rendering path affects how lighting and shading are calculated. Some rendering paths are more suited to different platforms and hardware than others. More infoSee in Glossary for each GameObject using a color code: Blue indicates deferred shading Yellow indicates forward renderingA rendering path that renders each object in one or more passes, depending on lights that affect the object. Lights themselves are also treated differently by Forward Rendering, depending on their settings and intensity. More infoSee in GlossaryRed indicates vertex lit |
|  | Alpha Channel | Render colors with alpha. |
|  | Overdraw | Render GameObjects as transparent “silhouettes”. The transparent colors accumulate, making it easy to spot places where one object is drawn over another. |
|  | Mipmaps | Show ideal texture sizes using a color code: Red indicates that the texture is larger than necessary (at the current distance and resolution)Blue indicates that the texture might be larger. The ideal texture sizes depend on the resolution at which your application will run and how close the Camera can get to particular surfaces. |
|  | Texture Mipmap Streaming | Tint GameObjects green, red, or blue, depending on their status in the Texture Mipmap Streaming system. For more information, see documentation on Analyze mipmap streaming. |
|  | SpriteA 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. More infoSee in Glossary Mask | Sprite Masks are used to either hide or reveal parts of a Sprite or group of Sprites. For more information, refer to Sprite MasksA texture which defines which areas of an underlying image to reveal or hide. More infoSee in Glossary. |
| Validate Albedo and Vadlidate Metal Sepcular |  | Check whether your physically-based materials use values within the recommended ranges. For more information, refer to Physically Based Material Validator. |

## The View Options overlay

Change what the **Scene** view displays.

[Image: The View Options overlay with all effects, hidden objects, and gizmos selected]
The View Options overlay with all effects, hidden objects, and gizmos selected

| View option |  | Description |
| --- | --- | --- |
| 2D |  | View the scene in 2D or 3D. In 2D mode, the cameraA component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. More infoSee in Glossary looks towards positive z, with the x-axis pointing right and the y-axis pointing up. |
| Audio |  | Enable or disable audio. |
| Effects |  | Enable or disable rendering effects. Use the dropdown to select individual effects, or the Effects* button for all effects. |
|  | SkyboxA special type of Material used to represent skies. Usually six-sided. More infoSee in Glossary | Show a skybox texture as the scene’s background. |
|  | Clouds | Shows cloud layers and volumetric clouds. Only available when using an SRP that supports clouds. |
|  | Fog | Gradualy fade the view to a flat color with distance from the camera. |
|  | Flares | Lens flaresA component that simulates the effect of lights refracting inside a camera lens. Use a Lens Flare to represent very bright lights or add atmosphere to your scene. More infoSee in Glossary on lights. |
|  | Always Refresh | Display the animation of animated materials, such as grass waving on a TerrainThe landscape in your scene. A Terrain GameObject adds a large flat plane to your scene and you can use the Terrain’s Inspector window to create a detailed landscape. More infoSee in Glossary. |
|  | Post Processing | Show Post-processingA process that improves product visuals by applying filters and effects before the image appears on screen. You can use post-processing effects to simulate physical camera and film properties, for example Bloom and Depth of Field. More info post processing, postprocessing, postprocessSee in Glossary effects. |
|  | Particle Systems | Show Particle SystemA component that simulates fluid entities such as liquids, clouds and flames by generating and animating large numbers of small 2D images in the scene. More infoSee in Glossary effects. |
| Scene Visibility |  | Show or hide all hidden GameObjects (GameObjects marked as not visible in the Hierarchy windw). For more information, refer to Scene Visibility. " |
| Layers |  | Select which layers to display. For more information, refer to LayersLayers in Unity can be used to selectively opt groups of GameObjects in or out of certain processes or calculations. This includes camera rendering, lighting, physics collisions, or custom calculations in your own code. More infoSee in Glossary. |
| Camera Settings |  | Configure the Scene viewAn interactive view into the world you are creating. You use the Scene View to select and position scenery, characters, cameras, lights, and all other types of Game Object. More infoSee in Glossary Camera. For more information, refer to Scene view Camera. |
| GizmosA graphic overlay associated with a GameObject in a Scene, and displayed in the Scene View. Built-in scene tools such as the move tool are Gizmos, and you can create custom Gizmos using textures or scripting. Some Gizmos are only drawn when the GameObject is selected, while other Gizmos are drawn by the Editor regardless of which GameObjects are selected. More infoSee in Glossary |  | Enable or disable gizmos. Use the dropdown to select individual gizmos, or the Gizmos* button for all gizmos. For more information, refer to Gizmos Menu. |

## Additional resources

- [Overlays](overlays.html)

- [Display or hide an overlay](display-and-hide-overlay.html)

- [Layers](Layers.html)

Scene visibility

Gizmos and handles
