This version of Unity is unsupported.

Inject a render pass with a Scriptable Renderer Feature in URP

Scriptable Renderer Feature API reference for URP

# Apply a Scriptable Renderer Feature to a specific camera type in URP

This guide covers how to apply a Scriptable Renderer Feature to a specific **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](../../../CamerasOverview.html)
See in [Glossary](../../../Glossary.html#Camera) type.

This method allows you to control which cameras the effect of a Scriptable Renderer Feature applies to. This is particularly relevant when a project uses additional cameras to render elements such as reflections where the use of the Scriptable Renderer Feature could lead to unexpected results.

You can add logic to the Scriptable Renderer Feature script to check for a specific camera type, before the Scriptable Renderer Feature applies the effect.

This guide is split into the following sections:

- [Prerequisites](#prerequisites)

- [Apply Scriptable Renderer Feature to a specific Camera](#scriptable-renderer-feature-game-camera)

## Prerequisites

This guide assumes that you already have a complete Scriptable Renderer Feature to work with. For more information, refer to [Inject a render pass using a Scriptable Renderer Feature](../../customize/inject-render-pass-via-script.html).

## Apply Scriptable Renderer Feature to Game Cameras

This script applies the Scriptable Renderer Feature to a specific camera type. In this example, it applies the feature only to Game cameras.

1. Open the C# script of the Scriptable Renderer Feature you want to apply to the cameras.

2. In the `AddRenderPasses` method, add the following `if` statement:

```cs
if (renderingData.cameraData.cameraType == CameraType.Game)
```

3. Add the necessary render passes from the Scriptable Renderer Feature to the renderer with the `EnqueuePass` method as shown below.

```cs
if (renderingData.cameraData.cameraType == CameraType.Game)
{
    renderer.EnqueuePass(yourRenderPass);
}
```

This Scriptable Renderer Feature now only applies to Cameras with the Game camera type.

> **Note**: Be aware that URP calls the `AddRenderPasses` method at least once per camera per frame so it is best to minimise complexity here to avoid performance issues.

## Additional resources

- [Introduction to Scriptable Renderer Features](./intro-to-scriptable-renderer-features.html)

- [Introduction to Scriptable Render Passes](../intro-to-scriptable-render-passes.html)

Inject a render pass with a Scriptable Renderer Feature in URP

Scriptable Renderer Feature API reference for URP
