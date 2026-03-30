This version of Unity is unsupported.

Rendering to a texture

Render a camera view to a Render Texture

# Create a Render Texture

A **Render Texture**A special type of Texture that is created and updated at runtime. To use them, first create a new Render Texture and designate one of your Cameras to render into it. Then you can use the Render Texture in a Material just like a regular Texture. [More info](class-RenderTexture.html)
See in [Glossary](Glossary.html#RenderTexture) is a type of [texture](Textures.html)An image used when rendering a GameObject, Sprite, or UI element. Textures are often applied to the surface of a mesh to give it visual detail. [More info](class-TextureImporter.html)
See in [Glossary](Glossary.html#texture) that Unity creates and updates at runtime.

You can set a **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera) to render into a Render Texture. You can then use the Render Texture as the material on a **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) so the camera view appears on the GameObject.

To create a Render Texture, select **Assets** > **Create** > **Rendering** > **Render Texture**.

Rendering to a texture

Render a camera view to a Render Texture
