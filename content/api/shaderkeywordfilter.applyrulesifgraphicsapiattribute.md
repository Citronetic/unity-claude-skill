This version of Unity is unsupported.



# ApplyRulesIfGraphicsAPIAttribute





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





If you use this attribute, Unity enables [filter attributes](ShaderKeywordFilter.FilterAttribute.html) if the current build target matches any of the `graphicsDeviceTypes`.

            The following example builds only variants including the `VulkanVariant` keyword if you build for the Vulkan graphics API.


              


```
using UnityEditor.ShaderKeywordFilter;[ApplyRulesIfGraphicsAPI(GraphicsDeviceType.Vulkan)]
[SelectIf(true, keywordNames: "VulkanVariant")]
bool forceVulkanVariant;
```





Additional resources: [FilterAttribute](ShaderKeywordFilter.FilterAttribute.html).





### Constructors



| Constructor | Description |
| --- | --- |
| ApplyRulesIfGraphicsAPIAttribute | Enable or disable shader keyword filter attributes based on the graphics API. |





### Inherited Members














            
