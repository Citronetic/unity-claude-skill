This version of Unity is unsupported.

Write a render pass using the render graph system in URP

Create a texture in the render graph system in URP

# Textures in the Render Graph system in URP

How to access and use textures in a custom render pass in the Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../render-pipelines.html)
See in [Glossary](../Glossary.html#Renderpipeline) (URP).

| Page | Description |
| --- | --- |
| Create a texture in the render graph system | Create a texture in a render graph system render pass. |
| Import a texture into the render graph system | To create or use a render textureA special type of Texture that is created and updated at runtime. To use them, first create a new Render Texture and designate one of your Cameras to render into it. Then you can use the Render Texture in a Material just like a regular Texture. More infoSee in Glossary in a render graph system render pass, use the RTHandle API. |
| Use a texture in a render pass | To allow a render pass to read from or write to a texture, use the render graph system API to set the texture as an input or output. |
| Transfer a texture between passes | Set a texture as a global texture, or add the texture to the frame data. |

## Additional resources

- [Use frame data](accessing-frame-data.html)

- The **blit**A shorthand term for “bit block transfer”. A blit operation is the process of transferring blocks of data from one place in memory to another.
See in [Glossary](../Glossary.html#blit) examples in the [URP RenderGraph Samples](package-sample-urp-package-samples.html)

- [Example of a complete Scriptable Renderer Feature](renderer-features/create-custom-renderer-feature.html)

Write a render pass using the render graph system in URP

Create a texture in the render graph system in URP
