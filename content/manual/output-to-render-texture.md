This version of Unity is unsupported.

Create a Render Texture

Drawing to textures with shaders via Custom Render Textures

# Render a camera view to a Render Texture

To create a live **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene) **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera) in your game, follow these steps:

1. To create a Render Texture, go to **Assets** > **Create** > **Rendering** > **Render Texture**.

2. Select **GameObject** > **Camera** to create a second camera.

3. Assign the **Render Texture**A special type of Texture that is created and updated at runtime. To use them, first create a new Render Texture and designate one of your Cameras to render into it. Then you can use the Render Texture in a Material just like a regular Texture. [More info](class-RenderTexture.html)
See in [Glossary](Glossary.html#RenderTexture) to the **Target Texture** property in the second camera’s ****Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector)** window.

4. Select **GameObject** > **3D Object** > **Quad** to create a quad.

5. Drag the Render Texture onto the **quad**A primitive object that resembles a plane but its edges are only one unit long, it uses only 4 vertices, and the surface is oriented in the XY plane of the local coordinate space. [More info](PrimitiveObjects.html)
See in [Glossary](Glossary.html#Quad). Unity automatically creates and assigns a material that uses the Render Texture.

6. Enter Play mode. The quad displays the camera view, which updates in real time.

[Image: The result of the previous steps. The quad in the sky displays the view from the Secondary Camera.]

The result of the previous steps. The quad in the sky displays the live view from the **Secondary Camera**.

## Additional resources

- [Render Texture Inspector window reference](class-RenderTexture.html)

- [Render a camera’s output to a Render Texture in URP](urp/rendering-to-a-render-texture.html)

Create a Render Texture

Drawing to textures with shaders via Custom Render Textures
