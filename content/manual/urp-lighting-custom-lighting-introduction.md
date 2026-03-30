This version of Unity is unsupported.

Custom lighting in URP

Render additional lights in a shader in URP

# Introduction to custom lighting in URP

Implementing a custom lighting function or model gives you more control over the visual style and performance of your application.

For example, a simpler, cartoon style rendering can be significantly faster than realistic physically-based rendering, and can have a unique appealing look.

A good example of a custom lighting implementation is the [cockpit scene in the URP 3D Sample project](https://unity.com/demos/urp-3d-sample#the-cockpit?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774938933352).

Unity provides several ways of implementing custom lighting using HLSL, **shader**A program that runs on the GPU. [More info](../../Shaders.html)
See in [Glossary](../../Glossary.html#Shader) graph custom function nodes, or through URP source code modification.

## HLSL shaders and shader graph shaders

Custom HLSL shaders provide you with a wide range of features and flexibility to implement custom lighting functions. You have full control over render passes, input and output variables, attributes, and internal shader functions.

Pre-built Shader Graph nodes let you use common shader functions, but provide few options for modifying their behavior. Shader Graph also provides [custom function nodes](https://docs.unity3d.com/Packages/com.unity.shadergraph@latest/index.html?subfolder=/manual/Custom-Function-Node.html) that let you inject custom HLSL code inside a node.

You can find examples of custom function nodes in **URP 3D Sample** project, and in [Shader Graph Feature Examples](https://docs.unity3d.com/Packages/com.unity.shadergraph@latest/index.html?subfolder=/manual/Shader-Graph-Sample-Feature-Examples.html).

### Limitations of custom function nodes

Custom function nodes let you insert your code into the **vertex shader**A program that runs on each vertex of a 3D model when the model is being rendered. [More info](../../writing-shader-writing-shader-programs-hlsl.html)
See in [Glossary](../../Glossary.html#vertexshader) function or the fragment shader function. These functions correspond to the **Vertex** and **Fragment** shader stages in Shader Graph, or to the functions `vert(Attributes IN)` and `frag(Varyings IN)` in an HLSL shader.

A custom function node does not provide the following functionality:

- Change or add attributes in the input and output structures (often defined as `struct Attributes` and `struct Varyings` in shader code). For example, this means that you can’t add an extra custom option to the **Fragment** or **Vertex** shader stages.

- Define extra shader passes.

- Define extra render state commands such as `ColorMask`.

If your shader requires any of the features above, consider writing a **ShaderLab**Unity’s language for defining the structure of Shader objects. [More info](../../SL-Shader.html)
See in [Glossary](../../Glossary.html#ShaderLab) shader.

## Methods for using different types of light

Techniques for implementing custom lighting vary depending on which types of lights your custom effects require.

To use the main light, use the `GetMainLight` shader function. For more information, refer to [Use lighting in a custom URP shader](../use-built-in-shader-methods-lighting.html).

The Forward and Forward+ rendering paths handle extra directional lights and additional lights differently. The Forward+ **rendering path**The technique that a render pipeline uses to render graphics. Choosing a different rendering path affects how lighting and shading are calculated. Some rendering paths are more suited to different platforms and hardware than others. [More info](../../RenderingPaths.html)
See in [Glossary](../../Glossary.html#RenderingPath) doesn’t have a limit on real-time lights per **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](../../class-GameObject.html)
See in [Glossary](../../Glossary.html#GameObject), so the `GetAdditionalLightsCount` method always returns 0. For information on how to write a rendering loop that uses additional lights in Forward and Forward+ rendering paths, refer to [Render additional lights in a shader in URP](../use-built-in-shader-methods-additional-lights-fplus.html).

## Additional resources

- [Lighting in URP](../lighting-landing.html)

- [HLSL in Unity](../../writing-shader-writing-shader-programs-hlsl.html)

- [Shader Graph Feature Examples](https://docs.unity3d.com/Packages/com.unity.shadergraph@latest/index.html?subfolder=/manual/Shader-Graph-Sample-Feature-Examples.html)

Custom lighting in URP

Render additional lights in a shader in URP
