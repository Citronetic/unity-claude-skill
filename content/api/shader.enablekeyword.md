This version of Unity is unsupported.



# [Shader](Shader.html).EnableKeyword




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

public static void EnableKeyword(ref [Rendering.GlobalKeyword](Rendering.GlobalKeyword.html) keyword);






## Declaration

public static void EnableKeyword(string keyword);






### Parameters



| Parameter | Description |
| --- | --- |
| keyword | The GlobalKeyword to enable. |
| keyword | The name of the GlobalKeyword to enable. |





### Description



Enables a global shader keyword.





Shader keywords determine which shader variants Unity uses. For information on working with [local shader keywords](Rendering.LocalKeyword.html) and [global shader keywords](Rendering.GlobalKeyword.html) and how they interact, see [Using shader keywords with C# scripts](../Manual/shader-keywords-scripts.html).

If you pass a string and a [GlobalKeyword](Rendering.GlobalKeyword.html) with the given name does not exist, this function automatically creates it.

The version of this function that takes a string as a parameter is slower than the version that takes a [GlobalKeyword](Rendering.GlobalKeyword.html). If you call this function more than once, it is best practice to create a [GlobalKeyword](Rendering.GlobalKeyword.html) struct, cache it, and use that.

The keyword is case-sensitive.

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





Additional resources: [Shader variants and keywords](../Manual/shader-variants-and-keywords.html), [LocalKeyword](Rendering.LocalKeyword.html), [GlobalKeyword](Rendering.GlobalKeyword.html), [DisableKeyword](Shader.DisableKeyword.html), [SetKeyword](Shader.SetKeyword.html), [IsKeywordEnabled](Shader.IsKeywordEnabled.html), [enabledGlobalKeywords](Shader-enabledGlobalKeywords.html), [globalKeywords](Shader-globalKeywords.html).


            
