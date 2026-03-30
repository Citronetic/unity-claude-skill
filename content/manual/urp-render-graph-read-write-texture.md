This version of Unity is unsupported.

Textures in the Render Graph system in URP

Create a temporary texture for a single frame in URP

# Read or write to a texture in a render pass in URP

You can use the render graph system API to set a texture as an input or output for a custom render pass, so you can read from or write to it.

**Note:** To copy between textures with less code, use the `AddBlitPass` method instead. For more information, refer to [Blit using the render graph system](render-graph-blit.html).

## Set a texture as an input

To set a texture as an input for a custom render pass, follow these steps:

1. In your pass data, add a texture handle field to the data your pass uses.

For example:

```cs
// Create the data your pass uses
public class MyPassData
{
    // Add a texture handle
    public TextureHandle textureToUse;
}
```

2. Set the texture handle to the texture you want to use. For more information, refer to [Create a temporary texture for a single frame](render-graph-create-a-texture.html) or [Import a texture into the render graph system](render-graph-import-a-texture.html).

3. Call the [`UseTexture`](https://docs.unity3d.com/Packages/com.unity.render-pipelines.core@17.0/api/UnityEngine.Rendering.RenderGraphModule.IBaseRenderGraphBuilder.html#UnityEngine_Rendering_RenderGraphModule_IBaseRenderGraphBuilder_UseTexture_UnityEngine_Rendering_RenderGraphModule_TextureHandle__UnityEngine_Rendering_RenderGraphModule_AccessFlags_) method to set the texture as an input.

For example:

```cs
builder.UseTexture(passData.textureToUse, AccessFlags.Read);
```

In your `SetRenderFunc` method, you can now use the `TextureHandle` object in the pass data as an input for APIs.

## Set a texture as the render target

To set a texture as the render target, in the `RecordRenderGraph` method, use the [`SetRenderAttachment`](https://docs.unity3d.com/Packages/com.unity.render-pipelines.core@17.0/api/UnityEngine.Rendering.RenderGraphModule.IRasterRenderGraphBuilder.html#UnityEngine_Rendering_RenderGraphModule_IRasterRenderGraphBuilder_SetRenderAttachment_UnityEngine_Rendering_RenderGraphModule_TextureHandle_System_Int32_UnityEngine_Rendering_RenderGraphModule_AccessFlags_) method. The `SetRenderAttachment` method sets the texture as write-only by default.

```cs
builder.SetRenderAttachment(textureHandle, 0);
```

You don’t need to add the texture to your pass data. The render graph system sets up the texture for you automatically before it executes the render pass.

You can’t use `UseTexture` and `SetRenderAttachment` on the same texture in an `AddRasterRenderPass` render pass. Refer to [Change the render target during a render pass](#change-the-render-target-during-a-pass) for more information.

If you need to draw objects to the render target, refer to [Draw objects in a render pass](render-graph-draw-objects-in-a-pass.html).

## Change the render target during a render pass

You can’t change which texture URP writes to during a render graph system render pass.

You can do either of the following instead:

- Create a second custom render pass, and use `builder.SetRenderAttachment` during the second render pass to change the render target.

- Use the `UnsafePass` API so you can use the `SetRenderTarget` API in the `SetRenderFunc` method. For more information, refer to [Use the CommandBuffer interface in a render graph](render-graph-unsafe-pass.html).

You can use these methods to read from and write to the same texture, by first copying from the texture to a temporary texture you create, then copying back.

`AddRasterRenderPass` can only merge render passes into a single native render pass if the textures you use have very similar properties. If you use several textures with different properties, use the `AddUnsafePass` API and the `SetRenderTarget()` method instead. Rendering might be slower because there will be more render passes.

### Examples

Refer to the following:

- [Write a render pass](render-graph-write-render-pass.html) for an example that creates a texture then **blits**A shorthand term for “bit block transfer”. A blit operation is the process of transferring blocks of data from one place in memory to another.
See in [Glossary](../Glossary.html#blit) to it.

- [Use a texture in multiple render passes](render-graph-pass-textures-between-passes.html)

Textures in the Render Graph system in URP

Create a temporary texture for a single frame in URP
