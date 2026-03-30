This version of Unity is unsupported.

SubShader tags in ShaderLab reference

GrabPass directive in ShaderLab reference

# UsePass directive in ShaderLab reference

For information on adding a name to a Pass in **ShaderLab**Unity’s language for defining the structure of Shader objects. [More info](SL-Shader.html)
See in [Glossary](Glossary.html#ShaderLab) code, see [ShaderLab: adding a name to a Pass](SL-Name.html).

## Render pipeline compatibility

| Feature name | Universal Render PipelineA series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. More infoSee in Glossary (URP) | High Definition Render Pipeline (HDRP) | Custom SRP | Built-in Render Pipeline |
| --- | --- | --- | --- | --- |
| UsePass | Yes | Yes | Yes | Yes |

## Syntax

| Signature | Function |
| --- | --- |
| UsePass "Shader object name/PASS NAME IN UPPERCASE" | Inserts the named Pass from the named Shader object.If the named Shader object contains more than one SubShader, Unity iterates over the SubShaders until it finds the first supported SubShader that contains a Pass with the given name. For information on how Unity determines whether a SubShader is supported, see Shader objects introduction.If the SubShader contains more than one Pass with the same name, Unity returns the last Pass it finds.If Unity does not find a matching Pass, it shows the error shader. |

## Additional resources

- [Include a shader pass with the UsePass command](writing-shader-usepass.html)

SubShader tags in ShaderLab reference

GrabPass directive in ShaderLab reference
