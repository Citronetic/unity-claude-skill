This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).EnableKeyword




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















## Declaration

public void EnableKeyword(ref [Rendering.GlobalKeyword](Rendering.GlobalKeyword.html) keyword);






## Declaration

public void EnableKeyword([Material](Material.html) material,
ref [Rendering.LocalKeyword](Rendering.LocalKeyword.html) keyword);






## Declaration

public void EnableKeyword([ComputeShader](ComputeShader.html) computeShader,
ref [Rendering.LocalKeyword](Rendering.LocalKeyword.html) keyword);






### Parameters



| Parameter | Description |
| --- | --- |
| keyword | The global or local shader keyword to enable. |
| material | The material on which to enable the local shader keyword. |
| computeShader | The compute shader for which to enable the local shader keyword. |





### Description



Adds a command to enable a global or local shader keyword.





Shader keywords determine which shader variants Unity uses. For information on working with [local shader keywords](Rendering.LocalKeyword.html) and [global shader keywords](Rendering.GlobalKeyword.html) and how they interact, see [Using shader keywords with C# scripts](../Manual/shader-keywords-scripts.html).

Additional resources: [Shader variants and keywords](../Manual/shader-variants-and-keywords.html), [SetKeyword](Rendering.CommandBuffer.SetKeyword.html), [DisableKeyword](Rendering.CommandBuffer.DisableKeyword.html), [GlobalKeyword](Rendering.GlobalKeyword.html), [LocalKeyword](Rendering.LocalKeyword.html), [Shader.DisableKeyword](Shader.DisableKeyword.html), [Material.DisableKeyword](Material.DisableKeyword.html), [ComputeShader.DisableKeyword](ComputeShader.DisableKeyword.html).


            
