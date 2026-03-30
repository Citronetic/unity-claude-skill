This version of Unity is unsupported.

Create shadows with Shadow Caster 2D in URP

Light a VFX Graph asset with 2D lights in URP

# Create 2D lit shader with Shader Graph

Create a **shader**A program that runs on the GPU. [More info](../Shaders.html)
See in [Glossary](../Glossary.html#Shader) graph that enables 2D sprites to react to lighting, and provides support for lighting features like normal mapping and **sprite**A 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. [More info](../sprite/sprite-landing.html)
See in [Glossary](../Glossary.html#Sprite) masking. Without this shader, light sources do not affect sprites.

To create and set up a 2D sprite lit shader graph, follow these steps:

1. In the **Assets** menu, go to **Create** > **Shader Graph** > **URP** > **Sprite Lit Shader Graph**.

2. Open the newly created shader graph asset.

3. Add three **Sample Texture 2D** nodes to the shader graph.

4. Set the **Type** of one of the new nodes to **Normal**.

5. Connect the nodes’ **RGBA** outputs to the following **Fragment** context input slots:

- First **Default** type node: **Base Color**.

- Second **Default** type node: ****Sprite Mask**A texture which defines which areas of an underlying image to reveal or hide. [More info](../sprite/mask/mask-landing.html)
See in [Glossary](../Glossary.html#SpriteMask)**.

- **Normal** type node: **Normal (Tangent Space)**.

6. Create three **Texture 2D** properties by selecting the **+** on the [Blackboard](http://docs.unity3d.com/Packages/com.unity.shadergraph@latest/index.html?subfolder=/manual/Blackboard.html), then choosing **Texture 2D**:

- **Main Texture** `MainTex`: Defines the base color and transparency (alpha) of the sprite.

- **Mask Texture** `MaskTex`: Determines areas of the sprite that should be visible or hidden using a custom mask.

- ****Normal Map**A type of Bump Map texture that allows you to add surface detail such as bumps, grooves, and scratches to a model which catch the light as if they are represented by real geometry.
See in [Glossary](../Glossary.html#Normalmap)** `NormalMap`: Adds surface details by simulating bumps and grooves, enhancing lighting effects on the sprite.

7. Drag each property into the shader graph workspace and connect them to the **Texture** input slots in the corresponding **Sample Texture 2D** nodes.

8. Drag the **NormalMap** property into the shader graph workspace and attach it to the **Texture** input slot of the **Normal** type **Sample Texture 2D** node.

9. Select **Save Asset** to save the shader.

[Image: A shader graph that enables 2D sprites to react to lighting]
A shader graph that enables 2D sprites to react to lighting

You can now apply the shader graph to a material and use it on sprites in a **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../CreatingScenes.html)
See in [Glossary](../Glossary.html#Scene), allowing sprites to interact with 2D lights.

## Additional resources

- [Create and assign a material](../create-material.html)

- [Unity Shader Graph documentation](https://docs.unity3d.com/Packages/com.unity.shadergraph@latest/index.html)

- [Blackboard in Shader Graph](https://docs.unity3d.com/Packages/com.unity.shadergraph@latest/index.html?subfolder=/manual/Blackboard.html)

Create shadows with Shadow Caster 2D in URP

Light a VFX Graph asset with 2D lights in URP
