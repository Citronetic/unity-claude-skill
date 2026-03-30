This version of Unity is unsupported.

Sculpt the terrain with a brush

Smooth the terrain's height

# Paint holes in the terrain

To simulate cave openings and overhanging formations, such as cliffs, use the Paint Holes tool to hide a part of the **terrain**The landscape in your scene. A Terrain GameObject adds a large flat plane to your scene and you can use the Terrain’s Inspector window to create a detailed landscape. [More info](terrain-UsingTerrains.html)
See in [Glossary](Glossary.html#Terrain). Then use other Editor tools, such as ProBuilder, to create the cave or overhang geometry.

## Access the tool

To paint a hole, in the Terrain tile’s **Inspector** window, select the **Paint Terrain** tool > tool dropdown > **Paint Holes**.

**Note**: If your project uses the Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline) (URP), enable **Terrain Holes** in the [URP Asset](urp/universalrp-asset.html). Otherwise, terrain holes disappear when you build your application.

## Tool options

The Paint Holes tool is brush-based. To learn about working with brushes, refer to [Brushes](class-Brush.html).

## Hide or smooth aliased edges

The Paint Holes tool is texture-based, so it can create aliased edges around holes. You can:

- Hide the aliased edges with geometry, such as rock meshes.

- Increase the **Heightmap**A greyscale Texture that stores height data for an object. Each pixel stores the height difference perpendicular to the face that pixel represents.
See in [Glossary](Glossary.html#Heightmap) Resolution to add more texels. This increases performance requirements.

**Note:** When you change resolutions, the Editor copies higher resolution texture data into lower resolution texture data. In other words, it downscales. However, it doesn’t upscale.

To try a higher resolution:

1. Erease the parts of the hole you want to redraw with the Paint Holes tool.

2. In **Terrain Settings**, increase the Heightmap Resolution.

3. Draw the hole again.

For more information, refer to [Terrain Settings reference](terrain-OtherSettings.html).

## Hole collision

A hole in the terrain is automatically excluded from the Terrain **Collider**An invisible shape that is used to handle physical collisions for an object. A collider doesn’t need to be exactly the same shape as the object’s mesh - a rough approximation is often more efficient and indistinguishable in gameplay. [More info](CollidersOverview.html)
See in [Glossary](Glossary.html#Collider), so that characters and objects can fall through it. You don’t need to manually adjust the **Terrain Collider**A terrain-shaped collider component that handles collisions for collision surface with the same shape as the Terrain object it is attached to. [More info](class-TerrainCollider.html)
See in [Glossary](Glossary.html#TerrainCollider).

If you are creating holes in a script-based workflow, ensure that the resolution of the hole’s mask texture is equal to the resolution of the Terrain’s heightmap minus 1 (`-1`). For example, if the Terrain’s heightmap resolution is `1025x1025`, the hole’s mask texture needs to be `1024x1024`. For more information, refer to [TerrainData-holesResolution](../ScriptReference/TerrainData-holesResolution.html).

## Using a custom material

The holes functionality depends on the **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader). To allow holes in a custom Terrain material, you can either:

- Use the Terrain shader the Editor provides.

- Use your own shader with the following code snippet in the fragment shader:

```
#ifdef _ALPHATEST_ON
      ClipHoles(IN.uvMainAndLM.xy);
  #endif
```

## Additional resources

- [Digging into Terrain Paint Holes in Unity 2019.3](https://blogs.unity3d.com/2020/01/31/digging-into-terrain-paint-holes-in-unity-2019-3/)

- [Primary sculpting tools](terrain-Basic-Sculpting.html)

- [Advanced sculpting tools](terrain-Sculpt.html)

- [Change existing height with effects](terrain-Effects.html)

- [Transform terrain features](terrain-Transform.html)

- [Erode the terrain](terrain-Erosion.html)

Sculpt the terrain with a brush

Smooth the terrain's height
