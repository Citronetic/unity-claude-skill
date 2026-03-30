This version of Unity is unsupported.

Strip fog shader variants in URP

Shader Material Inspector window reference for URP

# Remove shader variants when using a custom Renderer Feature in URP

If you create a [custom Renderer Feature](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@latest/index.html?subfolder=/api/UnityEngine.Rendering.Universal.ScriptableRendererFeature.html), you can use the [FilterAttribute](https://docs.unity3d.com/2023.1/Documentation/ScriptReference/ShaderKeywordFilter.FilterAttribute.html) API to remove **shader**A program that runs on the GPU. [More info](../Shaders.html)
See in [Glossary](../Glossary.html#Shader) variants when you enable or disable settings in the [URP Asset](universalrp-asset.html).

For example, you can do the following:

1. Use [SerializeField](https://docs.unity3d.com/ScriptReference/SerializeField.html) to add a Boolean variable to the custom Renderer Feature and add it as a checkbox in the URP Asset **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](../UsingTheInspector.html)
See in [Glossary](../Glossary.html#Inspector).

2. Use [ShaderKeywordFilter.RemoveIf](https://docs.unity3d.com/2023.1/Documentation/ScriptReference/ShaderKeywordFilter.RemoveIfAttribute.html) to remove shader variants when you enable the checkbox.

Strip fog shader variants in URP

Shader Material Inspector window reference for URP
