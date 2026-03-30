This version of Unity is unsupported.

Output a motion vector texture in a custom shader in URP

Troubleshooting motion vectors in URP

# Sample motion vectors in a shader in URP

Any `ScriptableRenderPass` implementation can request the motion vector texture as input. To do that, add the `ScriptableRenderPassInput.Motion` flag in the [ScriptableRenderPass.ConfigureInput](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@17.2/api/UnityEngine.Rendering.Universal.ScriptableRenderPass.html#UnityEngine_Rendering_Universal_ScriptableRenderPass_ConfigureInput_UnityEngine_Rendering_Universal_ScriptableRenderPassInput_) method in the [AddRenderPasses](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@17.2/api/UnityEngine.Rendering.Universal.ScriptableRendererFeature.html#UnityEngine_Rendering_Universal_ScriptableRendererFeature_AddRenderPasses_UnityEngine_Rendering_Universal_ScriptableRenderer_UnityEngine_Rendering_Universal_RenderingData__) callback of your custom Renderer Feature. If no other effect in the frame is using motion vectors, setting this input flag forces the URP renderer to inject the motion vector render pass into the frame.

To sample the motion vector texture in your **shader**A program that runs on the GPU. [More info](../../Shaders.html)
See in [Glossary](../../Glossary.html#Shader) pass, declare the shader resource for it in the `HLSLPROGRAM` section:

```cpp
TEXTURE2D_X(_MotionVectorTexture);
    SAMPLER(sampler_MotionVectorTexture);
```

To perform the sampling, use the following macro:

```cpp
SAMPLE_TEXTURE2D_X(_MotionVectorTexture, sampler_MotionVectorTexture, uv);
```

The `_X` postfix ensures that the texture is correctly declared and sampled when targeting **XR**An umbrella term encompassing Virtual Reality (VR), Augmented Reality (AR) and Mixed Reality (MR) applications. Devices supporting these forms of interactive applications can be referred to as XR devices. [More info](../../XR.html)
See in [Glossary](../../Glossary.html#XR) platforms.

Output a motion vector texture in a custom shader in URP

Troubleshooting motion vectors in URP
