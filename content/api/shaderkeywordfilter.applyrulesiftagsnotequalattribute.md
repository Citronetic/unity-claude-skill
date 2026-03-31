This version of Unity is unsupported.



# ApplyRulesIfTagsNotEqualAttribute





class in
          UnityEditor.ShaderKeywordFilter



/



Inherits from:[ShaderKeywordFilter.TagConstraintAttribute](ShaderKeywordFilter.TagConstraintAttribute.html)


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



Enable or disable shader keyword filter attributes based on shader tags.





If you use this attribute, Unity enables [filter attributes](ShaderKeywordFilter.FilterAttribute.html) if the shader compilation context does not contain matching tags.

            The following example builds only variants including the `FeatureA` keyword, if the shader is not a Universal Render Pipeline (URP) shader.


              


```
using UnityEditor.ShaderKeywordFilter;[ShaderKeywordFilter.ApplyRulesIfTagsNotEqual("RenderPipeline", "UniversalPipeline")]
[SelectIf(true, keywordNames: "FeatureA")]
bool forceFeatureA;
```





Additional resources: [FilterAttribute](ShaderKeywordFilter.FilterAttribute.html).





### Constructors



| Constructor | Description |
| --- | --- |
| ApplyRulesIfTagsNotEqualAttribute | Enable or disable shader keyword filter attributes based on shader tags. |





### Inherited Members














            
