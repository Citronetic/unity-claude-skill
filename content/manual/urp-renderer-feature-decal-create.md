This version of Unity is unsupported.

Introduction to decals in URP

Create a decal via a Decal Projector in URP

# Create a decal via a Decal Renderer Feature in URP

To add decals to your **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../CreatingScenes.html)
See in [Glossary](../Glossary.html#Scene):

1. [Add the Decal Renderer Feature](urp-renderer-feature.html) to the URP Renderer.

2. Create a Material, and assign it the `Shader Graphs/Decal` **shader**A program that runs on the GPU. [More info](../Shaders.html)
See in [Glossary](../Glossary.html#Shader). In the Material, select the Base Map and the **Normal Map**A type of Bump Map texture that allows you to add surface detail such as bumps, grooves, and scratches to a model which catch the light as if they are represented by real geometry.
See in [Glossary](../Glossary.html#Normalmap).

[Image: Example decal Material]
Example decal Material

3. Create a new Decal Projector **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](../class-GameObject.html)
See in [Glossary](../Glossary.html#GameObject), or add a [Decal Projector component](renderer-feature-decal.html#decal-projector) to an existing GameObject.

The following illustration shows a Decal Projector in the scene.

[Image: Decal Projector in the scene.]
Decal Projector in the scene.

For more information, refer to the [Decal Projector component](renderer-feature-decal.html#decal-projector).

An alternative way to add decals to a scene:

1. Create a **Quad**A primitive object that resembles a plane but its edges are only one unit long, it uses only 4 vertices, and the surface is oriented in the XY plane of the local coordinate space. [More info](../PrimitiveObjects.html)
See in [Glossary](../Glossary.html#Quad) GameObject.

2. Assign a Decal Material to the GameObject.

3. Position the Quad on the surface where you want the decal to be. If necessary, adjust the [mesh bias](prebuilt-shader-graphs-urp-decal.html) value to prevent z-fighting.

Introduction to decals in URP

Create a decal via a Decal Projector in URP
