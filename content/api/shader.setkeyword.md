This version of Unity is unsupported.



# [Shader](Shader.html).SetKeyword




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

public static void SetKeyword(ref [Rendering.GlobalKeyword](Rendering.GlobalKeyword.html) keyword,
bool value);






### Parameters



| Parameter | Description |
| --- | --- |
| keyword | The GlobalKeyword to enable or disable. |
| value | The desired keyword state. |





### Description



Sets the state of a global shader keyword.





Shader keywords determine which shader variants Unity uses. For information on working with [local shader keywords](Rendering.LocalKeyword.html) and [global shader keywords](Rendering.GlobalKeyword.html) and how they interact, see [Using shader keywords with C# scripts](../Manual/shader-keywords-scripts.html).

When `value` is `true`, this function calls [EnableKeyword](Shader.EnableKeyword.html). Otherwise, it calls [DisableKeyword](Shader.DisableKeyword.html).

The following example creates and caches a `GlobalKeyword`, and provides a function to toggle its state.


              


```
using UnityEngine;
using UnityEngine.Rendering;public class GlobalKeywordExample : MonoBehaviour
{
    private GlobalKeyword exampleFeatureKeyword;    private void Start()
    {
        // Create and cache the GlobalKeyword
        exampleFeatureKeyword = GlobalKeyword.Create("EXAMPLE_FEATURE_ON");
    }    public void ToggleExampleFeature()
    {
        // Get the current state of the global keyword
        bool state = Shader.IsKeywordEnabled(exampleFeatureKeyword);        // Toggle the state
        Shader.SetKeyword(exampleFeatureKeyword, !state);
    }
}
```





Additional resources: [Shader variants and keywords](../Manual/shader-variants-and-keywords.html), [LocalKeyword](Rendering.LocalKeyword.html), [GlobalKeyword](Rendering.GlobalKeyword.html), [EnableKeyword](Shader.EnableKeyword.html), [DisableKeyword](Shader.DisableKeyword.html), [IsKeywordEnabled](Shader.IsKeywordEnabled.html), [enabledGlobalKeywords](Shader-enabledGlobalKeywords.html), [globalKeywords](Shader-globalKeywords.html).


            
