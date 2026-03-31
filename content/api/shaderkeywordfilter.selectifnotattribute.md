This version of Unity is unsupported.



# SelectIfNotAttribute





class in
          UnityEditor.ShaderKeywordFilter



/



Inherits from:[ShaderKeywordFilter.FilterAttribute](ShaderKeywordFilter.FilterAttribute.html)


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



Include only the specified shader keywords in the build if the data field doesn't match the condition.





If the data field under `SelectIf` doesn't match the value of `condition`, Unity includes only `keywordNames` in any `multi_compile` keyword set.


              


```
using UnityEditor.ShaderKeywordFilter;[SelectIfNot(false, keywordNames: "FeatureA")]
bool forceFeatureA;
```





Additional resources: [FilterAttribute](ShaderKeywordFilter.FilterAttribute.html).





### Constructors



| Constructor | Description |
| --- | --- |
| SelectIfNotAttribute | Include only the specified shader keywords in the build if the data field doesn't match the condition. |





### Inherited Members














            
