This version of Unity is unsupported.



# GlobalKeyword





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



Represents a global shader keyword.





Shader keywords determine which shader variants Unity uses. You can use a `GlobalKeyword` to enable, disable, or check the state of a **global** shader keyword. For information on working with [local shader keywords](Rendering.LocalKeyword.html) and global shader keywords and how they interact, see [Using shader keywords with C# scripts](../Manual/shader-keywords-scripts.html).

To set the state of a global shader keyword, use [Shader.SetKeyword](Shader.SetKeyword.html), [Shader.EnableKeyword](Shader.EnableKeyword.html), or [Shader.DisableKeyword](Shader.DisableKeyword.html). To get all the global shader keywords that exist, use [Shader.globalKeywords](Shader-globalKeywords.html). To get all the global shader keywords that are enabled, use [Shader.enabledGlobalKeywords](Shader-enabledGlobalKeywords.html).

In addition to this, you can also enable or disable a local or global keyword with a `CommandBuffer`. To do this, use [CommandBuffer.SetKeyword](Rendering.CommandBuffer.SetKeyword.html), [CommandBuffer.EnableKeyword](Rendering.CommandBuffer.EnableKeyword.html), or [CommandBuffer.DisableKeyword](Rendering.CommandBuffer.DisableKeyword.html).

Additional resources: [Shader variants and keywords](../Manual/shader-variants-and-keywords.html), [LocalKeyword](Rendering.LocalKeyword.html).





### Properties



| Property | Description |
| --- | --- |
| name | The name of the shader keyword. (Read Only) |





### Constructors



| Constructor | Description |
| --- | --- |
| GlobalKeyword | Creates and returns a GlobalKeyword struct that represents an existing global shader keyword. |





### Static Methods



| Method | Description |
| --- | --- |
| Create | Creates and returns a GlobalKeyword that represents a new or existing global shader keyword. |


            
