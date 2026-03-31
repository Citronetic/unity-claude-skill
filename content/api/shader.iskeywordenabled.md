This version of Unity is unsupported.



# [Shader](Shader.html).IsKeywordEnabled




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




                [Switch to Manual](../Manual/class-Shader.html)










## Declaration

public static bool IsKeywordEnabled(ref [Rendering.GlobalKeyword](Rendering.GlobalKeyword.html) keyword);






### Parameters



| Parameter | Description |
| --- | --- |
| keyword | The GlobalKeyword to check. |





### Returns



**bool**
        Returns true if the given global shader keyword is enabled. Otherwise, returns false.





### Description



Checks whether a global shader keyword is enabled.





Shader keywords determine which shader variants Unity uses. For information on working with [local shader keywords](Rendering.LocalKeyword.html) and [global shader keywords](Rendering.GlobalKeyword.html) and how they interact, see [Using shader keywords with C# scripts](../Manual/shader-keywords-scripts.html).

If you pass a string and a [GlobalKeyword](Rendering.GlobalKeyword.html) with that `name` does not exist in the [keywordSpace](Shader-keywordSpace.html), this function returns `false`.

The version of this function that takes a string as a parameter is slower than the version that takes a [GlobalKeyword](Rendering.GlobalKeyword.html). If you call this function more than once, it is best practice to create a [GlobalKeyword](Rendering.GlobalKeyword.html) struct, cache it, and use that.

This example checks whether a global shader keyword with the name `EXAMPLE_FEATURE_ON` is enabled.


              


```
using UnityEngine;
using UnityEngine.Rendering;public class GlobalKeywordExample : MonoBehaviour
{
    private GlobalKeyword exampleFeatureKeyword;    private void Start()
    {
        exampleFeatureKeyword = GlobalKeyword.Create("EXAMPLE_FEATURE_ON");        if (Shader.IsKeywordEnabled(exampleFeatureKeyword))
        {
            Debug.Log("Global shader keyword " + exampleFeatureKeyword.name + " is currently enabled");
        }
    }
}
```





Additional resources: [Shader variants and keywords](../Manual/shader-variants-and-keywords.html), [LocalKeyword](Rendering.LocalKeyword.html), [GlobalKeyword](Rendering.GlobalKeyword.html), [EnableKeyword](Shader.EnableKeyword.html), [DisableKeyword](Shader.DisableKeyword.html), [SetKeyword](Shader.SetKeyword.html), [enabledGlobalKeywords](Shader-enabledGlobalKeywords.html), [globalKeywords](Shader-globalKeywords.html).




---








## Declaration

public static bool IsKeywordEnabled(string keyword);






### Parameters



| Parameter | Description |
| --- | --- |
| keyword | The name of the GlobalKeyword to check. |





### Returns



**bool**
        Returns true if a global shader keyword with the given name exists, and is enabled. Otherwise, returns false.





### Description



Checks whether a global shader keyword is enabled.





If a global shader keyword with the given name does not exist, this function returns false. Otherwise, this version of `IsKeywordEnabled` behaves the same as the version that has a [GlobalKeyword](Rendering.GlobalKeyword.html) as its parameter.


            
