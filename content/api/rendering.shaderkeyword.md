This version of Unity is unsupported.



# ShaderKeyword





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



Represents an identifier for a specific code path in a shader.





Unity now provides the [LocalKeyword](Rendering.LocalKeyword.html) and [GlobalKeyword](Rendering.GlobalKeyword.html) APIs which are more performant than ShaderKeyword. It is best practice to use these APIs instead.

Additional resources: [LocalKeyword](Rendering.LocalKeyword.html), [GlobalKeyword](Rendering.GlobalKeyword.html), [ShaderKeywordSet](Rendering.ShaderKeywordSet.html), [Shader.EnableKeyword](Shader.EnableKeyword.html), [Shader variants and keywords](../Manual/shader-variants-and-keywords.html), [Declaring and using shader keywords in HLSL](../Manual/SL-MultipleProgramVariants.html).





### Properties



| Property | Description |
| --- | --- |
| index | The index of the shader keyword. |
| name | The name of the shader keyword. (Read Only) |





### Constructors



| Constructor | Description |
| --- | --- |
| ShaderKeyword | Initializes a new instance of the ShaderKeyword class from a shader global keyword name. |





### Public Methods



| Method | Description |
| --- | --- |
| IsValid | Checks whether the global shader keyword exists. |





### Static Methods



| Method | Description |
| --- | --- |
| GetGlobalKeywordType | Returns the type of global keyword: built-in or user defined. |
| IsKeywordLocal | Returns true if the keyword is local. |


            
