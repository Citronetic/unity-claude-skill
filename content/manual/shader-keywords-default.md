This version of Unity is unsupported.

Strip shader variants

Troubleshooting shader duplication from AssetBundles

# Default shader keywords

Unity uses predefined sets of **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) keywords to generate shader variants that enable common functionality.

Unity adds the following sets of shader variant keywords at compile time:

- By default, Unity adds this set of keywords to all graphics shader programs: STEREO_INSTANCING_ON, STEREO_MULTIVIEW_ON, STEREO_CUBEMAP_RENDER_ON, UNITY_SINGLE_PASS_STEREO. You can strip these keywords using an Editor script. For more information, see [Shader variant stripping](shader-variant-stripping.html).

- By default, Unity adds this set of keywords to the Standard Shader: LIGHTMAP_ON, DIRLIGHTMAP_COMBINED, DYNAMICLIGHTMAP_ON, LIGHTMAP_SHADOW_MIXING, SHADOWS_SHADOWMASK. You can strip these keywords using the [Graphics settings](class-GraphicsSettings.html) window.

- In the Built-in **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline), if your project uses [tier settings](graphics-tiers-customize.html) that differ from each other, Unity adds this set of keywords to all graphics shaders: UNITY_HARDWARE_TIER1, UNITY_HARDWARE_TIER2, UNITY_HARDWARE_TIER3. For more information, see [Graphics tiers: Graphics tiers and shader variants](graphics-tiers.html#shader-variants).

Strip shader variants

Troubleshooting shader duplication from AssetBundles
