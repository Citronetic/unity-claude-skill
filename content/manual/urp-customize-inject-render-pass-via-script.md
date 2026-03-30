This version of Unity is unsupported.

Scriptable Renderer Feature API reference for URP

Restrict a render pass to a scene area in URP

# Inject a render pass via scripting in URP

To inject a custom render pass into the rendering loop in the Universal Rendering Pipeline (URP), subscribe to one of the events in the [RenderPipelineManager](https://docs.unity3d.com/ScriptReference/Rendering.RenderPipelineManager.html) API and use the [`EnqueuePass`](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@17.2/api/UnityEngine.Rendering.Universal.ScriptableRenderer.html#UnityEngine_Rendering_Universal_ScriptableRenderer_EnqueuePass_UnityEngine_Rendering_Universal_ScriptableRenderPass) API.

For example, you can render extra cameras to **render textures**A special type of Texture that is created and updated at runtime. To use them, first create a new Render Texture and designate one of your Cameras to render into it. Then you can use the Render Texture in a Material just like a regular Texture. [More info](../../class-RenderTexture.html)
See in [Glossary](../../Glossary.html#RenderTexture), and use those textures for effects like planar reflections or surveillance **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](../../CamerasOverview.html)
See in [Glossary](../../Glossary.html#Camera) views.

**Note**: `RenderPipelineManager` events trigger only if a camera is active.

Follow these steps:

1. Attach a new `MonoBehaviour` script to a **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](../../class-GameObject.html)
See in [Glossary](../../Glossary.html#GameObject), then create an instance of a custom render pass. For example:

```cs
public class InjectPass : MonoBehaviour
{
    // Declare a custom render pass
    private ExampleRenderPass exampleRenderPass;

    private void OnEnable()
    {
        // Create the custom render pass
        exampleRenderPass = new ExampleRenderPass(settings);
    }
}
```

For more information about writing a render pass, refer to [Write a render pass using the render graph system](../render-graph-write-render-pass.html).

2. Subscribe a method to one of the events in the `RenderPipelineManager` API. For example:

```cs
private void OnEnable()
    {
        ...
        // Call the InjectRenderPass method when the beginCameraRendering event is raised.
        RenderPipelineManager.beginCameraRendering += InjectRenderPass;
    }
```

3. In the subscribed method, use the [`EnqueuePass`](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@17.2/api/UnityEngine.Rendering.Universal.ScriptableRenderer.html#UnityEngine_Rendering_Universal_ScriptableRenderer_EnqueuePass_UnityEngine_Rendering_Universal_ScriptableRenderPass) API method to inject a custom render pass into the URP rendering loop.

```cs
public class InjectPass : MonoBehaviour
{
    ...

    // Add the method that Unity calls after the beginCameraRendering event is raised.
    // The method must accept the ScriptableRenderContext and Camera parameters the event delegate defines.
    private void InjectRenderPass(ScriptableRenderContext context, Camera cam)
    {
        ...
        // Use the EnqueuePass API to inject the custom render pass.
        cam.GetUniversalAdditionalCameraData().scriptableRenderer.EnqueuePass(exampleRenderPass);
    }
}
```

4. Unsubscribe from the event in the `OnDisable` method. For example:

```cs
public class InjectPass : MonoBehaviour
{
    ...

    private void OnDisable()
    {
        RenderPipelineManager.beginCameraRendering -= InjectRenderPass;
    }
}
```

## Additional resources

- [Write a render pass using the render graph system](../render-graph-write-render-pass.html)

- [Custom render pass workflow](../renderer-features/custom-rendering-pass-workflow-in-urp.html)

Scriptable Renderer Feature API reference for URP

Restrict a render pass to a scene area in URP
