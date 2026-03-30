This version of Unity is unsupported.

Control scaling with Dynamic Resolution

Enable or disable Dynamic Resolution for render targets

# Control when Dynamic Scaling happens

The `ScalableBufferManager.ResizeBuffers` function immediately scales **render textures**A special type of Texture that is created and updated at runtime. To use them, first create a new Render Texture and designate one of your Cameras to render into it. Then you can use the Render Texture in a Material just like a regular Texture. [More info](class-RenderTexture.html)
See in [Glossary](Glossary.html#RenderTexture) when called. However, you can modify this behavior by using the `DynamicallyScalableExplicit` flag. Render textures marked with `DynamicallyScalableExplicit` will scale when you call `RenderTexture.ApplyDynamicScale`, instead of being automatically scaled when `ScalableBufferManager.ResizeBuffers` is called. Scaling causes render texture contents to be invalidated, so you must use `DynamicallyScalableExplicit` and `RenderTexture.ApplyDynamicScale` to ensure render texture data persists through scale factor changes.

For instance, temporal anti-aliasing improves the visual quality of the current frame by reusing data from previous frames. If the **dynamic resolution**A Camera setting that allows you to dynamically scale individual render targets to reduce workload on the GPU. [More info](DynamicResolution-landing.html)
See in [Glossary](Glossary.html#dynamicresolution) scale factor changes between frames, you need to preserve the previous frame’s data. You can achieve this by marking the render textures containing this data with `DynamicallyScalableExplicit`, allowing them to remain valid even after calling `ScalableBufferManager.ResizeBuffers`. You only need to resize the current frame’s render texture using `RenderTexture.ApplyDynamicScale`, ensuring the previous frame’s render texture remains valid for sampling.

Control scaling with Dynamic Resolution

Enable or disable Dynamic Resolution for render targets
