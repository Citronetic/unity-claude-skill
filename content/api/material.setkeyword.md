This version of Unity is unsupported.



# [Material](Material.html).SetKeyword




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




                [Switch to Manual](../Manual/class-Material.html)










## Declaration

public void SetKeyword(ref [Rendering.LocalKeyword](Rendering.LocalKeyword.html) keyword,
bool value);






### Parameters



| Parameter | Description |
| --- | --- |
| keyword | The LocalKeyword to enable or disable. |
| value | The desired keyword state. |





### Description



Sets the state of a local shader keyword for this material.





Shader keywords determine which shader variants Unity uses. For information on working with [local shader keywords](Rendering.LocalKeyword.html) and [global shader keywords](Rendering.GlobalKeyword.html) and how they interact, see [Using shader keywords with C# scripts](../Manual/shader-keywords-scripts.html).

When `value` is `true`, this function calls [EnableKeyword](Material.EnableKeyword.html). Otherwise, it calls [DisableKeyword](Material.DisableKeyword.html).

If the [LocalKeyword](Rendering.LocalKeyword.html) does not exist in the [Shader.keywordSpace](Shader-keywordSpace.html) for the shader that this material uses, this function has no effect.

The following example creates and caches a `LocalKeyword`, and provides a function to toggle its state.


              


```
using UnityEngine;
using UnityEngine.Rendering;public class MaterialKeywordExample : MonoBehaviour
{
    public Material material;
    private LocalKeyword exampleFeatureKeyword;    void Start()
    {
        // Get the instance of the Shader class that this material uses
        var shader = material.shader;        // Create and cache the LocalKeyword
        exampleFeatureKeyword = new LocalKeyword(shader, "EXAMPLE_FEATURE_ON");
    }    public void ToggleExampleFeature()
    {
        // Get the current state of the local keyword
        bool state = material.IsKeywordEnabled(exampleFeatureKeyword);        // Toggle the state
        material.SetKeyword(exampleFeatureKeyword, !state);
    }
}
```





Additional resources: [Shader variants and keywords](../Manual/shader-variants-and-keywords.html), [LocalKeyword](Rendering.LocalKeyword.html), [GlobalKeyword](Rendering.GlobalKeyword.html), [EnableKeyword](Material.EnableKeyword.html), [DisableKeyword](Material.DisableKeyword.html), [Shader.keywordSpace](Shader-keywordSpace.html), [IsKeywordEnabled](Material.IsKeywordEnabled.html), [enabledKeywords](Material-enabledKeywords.html), [shaderKeywords](Material-shaderKeywords.html).


            
