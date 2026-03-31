This version of Unity is unsupported.



# RemoveOrSelectAttribute





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



Either remove or include the specified shader keywords in the build, depending on the data field underneath.





Unity does the following in all `multi_compile` keyword sets:



          - Removes `keywordNames` if the data field under `RemoveOrSelect` matches the value of `condition`.

          - Includes only `keywordNames` if the data field under `RemoveOrSelect` does not match the value of `condition`.




              


```
using UnityEditor.ShaderKeywordFilter;[RemoveOrSelect(false, keywordNames: "FeatureA")]
bool hasFeatureA;
```





Additional resources: [FilterAttribute](ShaderKeywordFilter.FilterAttribute.html).





### Constructors



| Constructor | Description |
| --- | --- |
| RemoveOrSelectAttribute | Either remove or include the specified shader keywords in the build, depending on the data field underneath. |





### Inherited Members














            
