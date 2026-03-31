This version of Unity is unsupported.



# [ComputeShader](ComputeShader.html).SetKeyword




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

public void SetKeyword(ref [Rendering.LocalKeyword](Rendering.LocalKeyword.html) keyword,
bool value);






### Parameters



| Parameter | Description |
| --- | --- |
| keyword | The LocalKeyword keyword to enable or disable. |
| value | The desired keyword state. |





### Description



Sets the state of a local shader keyword for this compute shader.





Shader keywords determine which shader variants Unity uses. For information on working with [local shader keywords](Rendering.LocalKeyword.html) and [global shader keywords](Rendering.GlobalKeyword.html) and how they interact, see [Using shader keywords with C# scripts](../Manual/shader-keywords-scripts.html).

When `value` is `true`, this function calls [EnableKeyword](ComputeShader.EnableKeyword.html). Otherwise, it calls [DisableKeyword](ComputeShader.DisableKeyword.html).

If the [LocalKeyword](Rendering.LocalKeyword.html) does not exist in the [keywordSpace](ComputeShader-keywordSpace.html), this function has no effect.

The following example toggles the state of all local shader keywords in a compute shader.


              


```
using UnityEngine;
using UnityEngine.Rendering;public class Example : MonoBehaviour
{
    public ComputeShader computeShader;    void Start()
    {
        // Get all the local keywords that affect the Compute Shader
        var keywordSpace = computeShader.keywordSpace;        // Iterate over the local keywords
        foreach (var localKeyword in keywordSpace.keywords)
        {
            // Get the current state of the local keyword
            bool state = computeShader.IsKeywordEnabled(localKeyword);            // Toggle the state
            computeShader.SetKeyword(localKeyword, !state);
        }
    }
}
```





Additional resources: [Shader variants and keywords](../Manual/shader-variants-and-keywords.html), [LocalKeyword](Rendering.LocalKeyword.html), [GlobalKeyword](Rendering.GlobalKeyword.html), [EnableKeyword](ComputeShader.EnableKeyword.html), [DisableKeyword](ComputeShader.DisableKeyword.html), [keywordSpace](ComputeShader-keywordSpace.html), [IsKeywordEnabled](ComputeShader.IsKeywordEnabled.html), [enabledKeywords](ComputeShader-enabledKeywords.html), [shaderKeywords](ComputeShader-shaderKeywords.html).


            
