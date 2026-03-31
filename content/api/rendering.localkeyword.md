This version of Unity is unsupported.



# LocalKeyword





struct in
          UnityEngine.Rendering



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


                  Leave feedback




                  Suggest a change












## Success!



Thank you for helping us improve the quality of Unity Documentation. Although we cannot accept all submissions, we do read each suggested change from our users and will make updates where applicable.

                      Close




## Submission failed



For some reason your suggested change could not be submitted. Please <a>try again</a> in a few minutes. And thank you for taking the time to help us improve the quality of Unity Documentation.

                      Close


                      Your name


                      Your email


                      Suggestion*

                      Submit suggestion


Cancel



















### Description



Represents a shader keyword declared in a shader source file.





Shader keywords determine which shader variants Unity uses. You can use a `LocalKeyword` to enable, disable, or check the state of a **local** shader keyword. For information on working with local shader keywords and [global shader keywords](Rendering.GlobalKeyword.html) and how they interact, see [Using shader keywords with C# scripts](../Manual/shader-keywords-scripts.html).

When you declare a shader keyword in the source file for a [Shader](Shader.html) or [ComputeShader](ComputeShader.html), Unity represents the keyword with a `LocalKeyword` and stores it in a [LocalKeywordSpace](Rendering.LocalKeywordSpace.html).

For a [Shader](Shader.html):



          - To set the state of a local shader keyword, use [Material.SetKeyword](Material.SetKeyword.html), [Material.EnableKeyword](Material.EnableKeyword.html), or [Material.DisableKeyword](Material.DisableKeyword.html).

          - To check the state of a local shader keyword, use [Material.IsKeywordEnabled](Material.IsKeywordEnabled.html) or [Material.enabledKeywords](Material-enabledKeywords.html).

          - To access the `LocalKeywordSpace`, use [Material.shader](Material-shader.html) to access the [Shader](Shader.html) that the material uses, and then use [Shader.keywordSpace](Shader-keywordSpace.html).





For a [ComputeShader](ComputeShader.html):



          - To set the state of a local shader keyword, use [ComputeShader.SetKeyword](ComputeShader.SetKeyword.html), [ComputeShader.EnableKeyword](ComputeShader.EnableKeyword.html), or [ComputeShader.DisableKeyword](ComputeShader.DisableKeyword.html).

          - To check the state of a local shader keyword, use [ComputeShader.IsKeywordEnabled](ComputeShader.IsKeywordEnabled.html) or [ComputeShader.enabledKeywords](ComputeShader-enabledKeywords.html).

          - To access the `LocalKeywordSpace`, use [ComputeShader.keywordSpace](ComputeShader-keywordSpace.html).





In addition to this, you can also enable or disable a local or global keyword with a `CommandBuffer`. To do this, use [CommandBuffer.SetKeyword](Rendering.CommandBuffer.SetKeyword.html), [CommandBuffer.EnableKeyword](Rendering.CommandBuffer.EnableKeyword.html), or [CommandBuffer.DisableKeyword](Rendering.CommandBuffer.DisableKeyword.html).

**Note:** A `LocalKeyword` is specific to a single [Shader](Shader.html) or [ComputeShader](ComputeShader.html) instance. You cannot use it with other [Shader](Shader.html) or [ComputeShader](ComputeShader.html) instances, even if they declare keywords with the same `name`.

Additional resources: [Shader variants and keywords](../Manual/shader-variants-and-keywords.html), [GlobalKeyword](Rendering.GlobalKeyword.html).





### Properties



| Property | Description |
| --- | --- |
| isDynamic | Specifies whether this local shader keyword is used for dynamic branching (Read Only). |
| isOverridable | Whether this local shader keyword can be overridden by a global shader keyword. (Read Only). |
| isValid | Specifies whether this local shader keyword is valid (Read Only). |
| name | The name of the shader keyword (Read Only). |
| type | The type of the shader keyword (Read Only). |





### Constructors



| Constructor | Description |
| --- | --- |
| LocalKeyword | Initializes and returns a LocalKeyword struct that represents an existing local shader keyword for a given Shader. |





### Operators



| Operator | Description |
| --- | --- |
| operator != | Returns true if the shader keywords are not the same. Otherwise, returns false. |
| operator == | Returns true if the shader keywords are the same. Otherwise, returns false. |


            
