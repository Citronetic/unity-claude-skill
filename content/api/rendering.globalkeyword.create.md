This version of Unity is unsupported.



# [GlobalKeyword](Rendering.GlobalKeyword.html).Create




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

public static [Rendering.GlobalKeyword](Rendering.GlobalKeyword.html) Create(string name);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The name of the global shader keyword. |





### Returns



**GlobalKeyword**
        Returns a new instance of the GlobalKeyword class.





### Description



Creates and returns a [GlobalKeyword](Rendering.GlobalKeyword.html) that represents a new or existing global shader keyword.





Unity creates and returns a `GlobalKeyword` struct to represent the global shader keyword with the given name. If a global shader keyword with the given name does not yet exist in Unity's internal list of global shader keywords, Unity adds a global shader keyword with the given name to the list.

The following example creates a `GlobalKeyword` struct with the name `EXAMPLE_FEATURE_ON`, and caches it. It provides functions to enable and disable it.


              


```
using UnityEngine;
using UnityEngine.Rendering;public class GlobalKeywordExample : MonoBehaviour
{
    private GlobalKeyword exampleFeatureKeyword;    private void Start()
    {
        exampleFeatureKeyword = GlobalKeyword.Create("EXAMPLE_FEATURE_ON");
    }    public void EnableExampleFeature()
    {
        Shader.EnableKeyword(exampleFeatureKeyword);
    }    public void DisableExampleFeature()
    {
        Shader.DisableKeyword(exampleFeatureKeyword);
    }
}
```





Additional resources: [Shader variants and keywords](../Manual/shader-variants-and-keywords.html), [LocalKeyword](Rendering.LocalKeyword.html), [GlobalKeyword](Rendering.GlobalKeyword.html), [EnableKeyword](Shader.EnableKeyword.html), [DisableKeyword](Shader.DisableKeyword.html), [SetKeyword](Shader.SetKeyword.html), [IsKeywordEnabled](Shader.IsKeywordEnabled.html), [enabledGlobalKeywords](Shader-enabledGlobalKeywords.html), [globalKeywords](Shader-globalKeywords.html).


            
