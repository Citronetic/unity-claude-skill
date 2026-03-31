This version of Unity is unsupported.



# ApplyRulesIfNotGraphicsAPIAttribute





class in
          UnityEditor.ShaderKeywordFilter



/



Inherits from:[ShaderKeywordFilter.GraphicsAPIConstraintAttribute](ShaderKeywordFilter.GraphicsAPIConstraintAttribute.html)


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



Enable or disable shader keyword filter attributes based on the graphics API.





If you use this attribute, Unity enables [filter attributes](ShaderKeywordFilter.FilterAttribute.html) if the current build target doesn't match any of the `graphicsDeviceTypes`.

            The following example builds only variants including the `FeatureA` keyword if you build for non-OpenGL graphics APIs.


              


```
using UnityEditor.ShaderKeywordFilter;[ApplyRulesIfNotGraphicsAPI(GraphicsDeviceType.OpenGLES3, GraphicsDeviceType.OpenGLCore)]
[SelectIf(true, keywordNames: "FeatureA")]
bool forceFeatureA;
```





### Constructors



| Constructor | Description |
| --- | --- |
| ApplyRulesIfNotGraphicsAPIAttribute | Enable or disable shader keyword filter attributes based on the graphics API. |





### Inherited Members














            
