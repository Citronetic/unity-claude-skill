This version of Unity is unsupported.



# GlobalKeyword Constructor




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

public GlobalKeyword(string name);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The name of the global shader keyword. |





### Description



Creates and returns a GlobalKeyword struct that represents an existing global shader keyword.





If a global shader keyword with the given name exists in Unity's internal list of global shader keywords, Unity creates and returns a `GlobalKeyword` struct to represent it. Otherwise, Unity still creates a struct, but throws an error.

To add a new global shader keyword to Unity's internal list at the same time as creating a `GlobalKeyword` to represent it, use [GlobalKeyword.Create](Rendering.GlobalKeyword.Create.html) instead.

To get all the global shader keywords that already exist, use [Shader.globalKeywords](Shader-globalKeywords.html).

Additional resources: [Shader variants and keywords](../Manual/shader-variants-and-keywords.html), [LocalKeyword](Rendering.LocalKeyword.html), [GlobalKeyword](Rendering.GlobalKeyword.html), [EnableKeyword](Shader.EnableKeyword.html), [DisableKeyword](Shader.DisableKeyword.html), [SetKeyword](Shader.SetKeyword.html), [IsKeywordEnabled](Shader.IsKeywordEnabled.html), [enabledGlobalKeywords](Shader-enabledGlobalKeywords.html), [globalKeywords](Shader-globalKeywords.html).


            
