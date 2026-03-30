This version of Unity is unsupported.

Precalculating indirect light with Light Probes

Light Probes and moving GameObjects

# Light Probes

**Light Probes** provide a way to capture and use information about light that is passing through the empty space in your **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene).

Similar to **lightmaps**A pre-rendered texture that contains the effects of light sources on static objects in the scene. Lightmaps are overlaid on top of scene geometry to create the effect of lighting. [More info](Lightmapping.html)
See in [Glossary](Glossary.html#Lightmap), light probes store “baked” information about lighting in your scene. The difference is that while lightmaps store lighting information about light hitting the *surfaces* in your scene, light probes store information about light passing through *empty space* in your scene.

Light Probes are positions in the scene where the light is measured (probed) during the bake. At runtime, the indirect light that hits dynamic **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) is approximated using the values from the nearest Light Probes to that object.

[Image: An extremely simple scene showing light probes placed around two cubes]
An extremely simple scene showing light probes placed around two cubes

Light Probes have two main uses:

The primary use of light probes is to provide high quality lighting (including indirect bounced light) on moving objects in your scene.

The secondary use of light probes is to provide the lighting information for static scenery when that scenery is using Unity’s **LOD system**.

When using light probes for either of these two distinct purposes, many of the techniques you need to use are the same. It’s important to understand how light probes work so that you can choose where to place your probes in the scene.

## Additional resources

- [Adaptive Probe Volumes (APV) in URP](urp/probevolumes.html)

Precalculating indirect light with Light Probes

Light Probes and moving GameObjects
