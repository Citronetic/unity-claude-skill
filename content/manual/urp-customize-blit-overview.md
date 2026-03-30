This version of Unity is unsupported.

Custom render pass workflow in URP

Render graph system in URP

# Blit in URP

To **blit**A shorthand term for “bit block transfer”. A blit operation is the process of transferring blocks of data from one place in memory to another.
See in [Glossary](../../Glossary.html#blit) from one texture to another in a custom render pass in the Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../../render-pipelines.html)
See in [Glossary](../../Glossary.html#Renderpipeline) (URP), use the [Blitter API](https://docs.unity3d.com/Packages/com.unity.render-pipelines.core@latest?subfolder=/api/UnityEngine.Rendering.Blitter.html) from the Core Scriptable Render Pipeline (SRP).

The **shader**A program that runs on the GPU. [More info](../../Shaders.html)
See in [Glossary](../../Glossary.html#Shader) you use with the `Blitter` API must be a hand-coded shader. [Shader Graph](../../shader-graph.html) shaders aren’t compatible with the `Blitter` API.

**Note:** Don’t use the `CommandBuffer.Blit` or `Graphics.Blit` APIs, or APIs that use them internally such as `RenderingUtils.Blit`. These APIs might break **XR**An umbrella term encompassing Virtual Reality (VR), Augmented Reality (AR) and Mixed Reality (MR) applications. Devices supporting these forms of interactive applications can be referred to as XR devices. [More info](../../XR.html)
See in [Glossary](../../Glossary.html#XR) rendering, and aren’t compatible with native render passes.

For example in the `Execute` function in a render pass, add the following:

```cs
{
    Blitter.BlitCameraTexture(commandBuffer, sourceTexture, destinationTexture, materialToUse, passNumber);
}
```

For a full example, refer to [Example of a Scriptable Renderer Feature in Compatibility Mode](../renderer-features/create-custom-renderer-feature.html).

## Additional resources

- The blit examples in the [URP RenderGraph Samples](../package-sample-urp-package-samples.html)

- [Custom render pass workflow](../renderer-features/custom-rendering-pass-workflow-in-urp.html)

- [Textures in the Render Graph system](../working-with-textures.html)

Custom render pass workflow in URP

Render graph system in URP
