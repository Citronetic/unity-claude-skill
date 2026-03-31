This version of Unity is unsupported.



# [ComputeShader](ComputeShader.html).DisableKeyword




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




                [Switch to Manual](../Manual/class-ComputeShader.html)










## Declaration

public void DisableKeyword(ref [Rendering.LocalKeyword](Rendering.LocalKeyword.html) keyword);






## Declaration

public void DisableKeyword(string keyword);






### Parameters



| Parameter | Description |
| --- | --- |
| keyword | The LocalKeyword to disable. |
| keyword | The name of the LocalKeyword to disable. |





### Description



Disables a local shader keyword for this compute shader.





Shader keywords determine which shader variants Unity uses. For information on working with [local shader keywords](Rendering.LocalKeyword.html) and [global shader keywords](Rendering.GlobalKeyword.html) and how they interact, see [Using shader keywords with C# scripts](../Manual/shader-keywords-scripts.html).

If you pass in a [LocalKeyword](Rendering.LocalKeyword.html) and it does not exist in the [keywordSpace](ComputeShader-keywordSpace.html), this function has no effect. If you pass a string and a [LocalKeyword](Rendering.LocalKeyword.html) with that `name` does not exist in the [keywordSpace](ComputeShader-keywordSpace.html), this function has no effect.

The version of this function that takes a string as a parameter is slower than the version that takes a [LocalKeyword](Rendering.LocalKeyword.html). If you call this function more than once, it is best practice to create a [LocalKeyword](Rendering.LocalKeyword.html) struct, cache it, and use that.

**Note:** A `LocalKeyword` is specific to a single [Shader](Shader.html) or [ComputeShader](ComputeShader.html) instance. You cannot use it with other [Shader](Shader.html) or [ComputeShader](ComputeShader.html) instances, even if they declare keywords with the same name.

The following example creates a `LocalKeyword` struct with the name `EXAMPLE_FEATURE_ON`, and caches it. It provides functions to enable and disable it.


              


```
using UnityEngine;
using UnityEngine.Rendering;public class ComputeKeywordExample : MonoBehaviour
{
    public ComputeShader computeShader;
    private LocalKeyword exampleFeatureKeyword;    void Start()
    {
        // Create and cache the LocalKeyword
        exampleFeatureKeyword = new LocalKeyword(computeShader, "EXAMPLE_FEATURE_ON");
    }    public void EnableExampleFeature()
    {
        computeShader.EnableKeyword(exampleFeatureKeyword);
    }    public void DisableExampleFeature()
    {
        computeShader.DisableKeyword(exampleFeatureKeyword);
    }
}
```





Additional resources: [Shader variants and keywords](../Manual/shader-variants-and-keywords.html), [LocalKeyword](Rendering.LocalKeyword.html), [GlobalKeyword](Rendering.GlobalKeyword.html), [EnableKeyword](ComputeShader.EnableKeyword.html), [SetKeyword](ComputeShader.SetKeyword.html), [keywordSpace](ComputeShader-keywordSpace.html), [IsKeywordEnabled](ComputeShader.IsKeywordEnabled.html), [enabledKeywords](ComputeShader-enabledKeywords.html), [shaderKeywords](ComputeShader-shaderKeywords.html).


            
