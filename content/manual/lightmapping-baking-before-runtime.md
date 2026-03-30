This version of Unity is unsupported.

Global illumination

Introduction to lightmaps and baking

# Baking lightmaps before runtime

Resources for precalculating the lit colors of **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) and storing them in textures called **lightmaps**A pre-rendered texture that contains the effects of light sources on static objects in the scene. Lightmaps are overlaid on top of scene geometry to create the effect of lighting. [More info](Lightmapping.html)
See in [Glossary](Glossary.html#Lightmap).

| Page | Description |
| --- | --- |
| Lightmaps and baking | Learn about precalculating the color and brightness of surfaces in a sceneA Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. More infoSee in Glossary, then storing the result in a texture called a lightmap for later use. |
| Set up your scene and lights for baking | Set up meshes and GameObjects so that they store precalculated color in lightmaps. |
| Preview baked lighting | Edit a scene and preview changes to lightmaps and lighting without affecting the baked lightmaps. |
| Bake lighting | Generate lightmaps for your scene. |
| Configuring baking lightmaps | Resources for selecting CPU or GPU lightmapping, and changing how GameObjects store lighting in lightmaps. |
| Troubleshooting baked lightmaps | Solve common issues with baked lightmaps, such as hard edges or light bleeding. |
| Optimize baked lightmaps | Speed up baking time by configuring baking settings or selecting different GPUs for rendering and baking. |
| Lightmapping settings in the Lighting Settings Asset reference | Explore the properties and settings in the Lighting Settings Asset window to customize baking lightmaps. |

## Additional resources

- [Configure lightmapping with a Lighting Settings Asset](global-illumination-configure.html)

- [Lighting Settings Asset Inspector window reference](class-LightingSettings.html)

Global illumination

Introduction to lightmaps and baking
