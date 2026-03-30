This version of Unity is unsupported.

Fallback block in ShaderLab reference

SubShader in ShaderLab reference

# Custom Editor block in ShaderLab reference

This page contains information on using a `CustomEditor` or `CustomEditorForRenderPipeline` block in your **ShaderLab**Unity’s language for defining the structure of Shader objects. [More info](SL-Shader.html)
See in [Glossary](Glossary.html#ShaderLab) code to assign [custom editors](editor-CustomEditors.html).

## Render pipeline compatibility

| Feature name | Universal Render PipelineA series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. More infoSee in Glossary (URP) | High Definition Render Pipeline (HDRP) | Custom SRP | Built-in Render Pipeline |
| --- | --- | --- | --- | --- |
| ShaderLab: CustomEditor block | Yes | Yes | Yes | Yes |
| ShaderLab: CustomEditorForRenderPipeline block | Yes | Yes | Yes | No |

## Syntax

| Signature | Function |
| --- | --- |
| CustomEditor "[custom editor class name]" | Unity uses the custom editor defined in the named class, unless this is overridden by a CustomEditorForRenderPipeline block. |
| CustomEditorForRenderPipeline "[custom editor class name]" "[render pipeline asset class name]" | When the active Render Pipeline Asset is the named type, Unity uses the custom editor defined in the named class. |

## Additional resources

- [Adding material properties to shaders](writing-shader-change-properties.html)

Fallback block in ShaderLab reference

SubShader in ShaderLab reference
