This version of Unity is unsupported.

Strip level of detail (LOD) shader variants in URP

Remove shader variants when using a custom Renderer Feature in URP

# Strip fog shader variants in URP

To reduce the number of **shader**A program that runs on the GPU. [More info](../Shaders.html)
See in [Glossary](../Glossary.html#Shader) variants in the Universal **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](../render-pipelines.html)
See in [Glossary](../Glossary.html#Renderpipeline) (URP), you can make Unity use dynamic branching in the shader code that generates fog, instead of keywords and shader variants.

Enabling this setting removes shader variants for the following keywords:

- `FOG_LINEAR`

- `FOG_EXP`

- `FOG_EXP2`

Enabling this setting speeds up build time but reduces graphics performance, so you should disable the setting when you build your final project.

Refer to [Configure settings with the URP Config package](URP-Config-Package.html) for information on how to update the setting. Update the following settings:

- In the `ShaderConfig.cs.hlsl` file, in the line `public const int k_UseDynamicBranchFogKeyword = 0`, change `0` to `1`.

- If you manually edit the `ShaderConfig.cs.hlsl` file, above the `#endif` statement, add `#define USE_DYNAMIC_BRANCH_FOG_KEYWORD (1)`.

## Additional resources

- [Configure settings with the URP Config package](URP-Config-Package.html)

- [How Unity compiles branching shaders](../shader-conditionals-choose-a-type.html)

- [Lighting window reference](../lighting-window.html)

- [Strip feature shader variants](shader-stripping-features.html)

Strip level of detail (LOD) shader variants in URP

Remove shader variants when using a custom Renderer Feature in URP
