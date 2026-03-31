This version of Unity is unsupported.



# [ComputeShader](ComputeShader.html).shaderKeywords




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







                    public string[] shaderKeywords;






### Description



An array containing names of the local shader keywords that are currently enabled for this compute shader.





Shader keywords determine which shader variants Unity uses. For information on working with [local shader keywords](Rendering.LocalKeyword.html) and [global shader keywords](Rendering.GlobalKeyword.html) and how they interact, see [Using shader keywords with C# scripts](../Manual/shader-keywords-scripts.html).

**Note:** It is more efficient to use [enabledKeywords](ComputeShader-enabledKeywords.html), which returns an array of [LocalKeyword](Rendering.LocalKeyword.html) structs.

This example prints the names of all currently enabled local shader keywords for a compute shader.


              


```
using UnityEngine;
using UnityEngine.Rendering;public class Example : MonoBehaviour
{
    public ComputeShader computeShader;    private void Start()
    {
        foreach (var localKeywordName in computeShader.shaderKeywords)
        {
            Debug.Log("Local shader keyword " + localKeywordName + " is currently enabled");
        }
    }
}
```





Additional resources: [Shader variants and keywords](../Manual/shader-variants-and-keywords.html), [LocalKeyword](Rendering.LocalKeyword.html), [GlobalKeyword](Rendering.GlobalKeyword.html), [EnableKeyword](ComputeShader.EnableKeyword.html), [DisableKeyword](ComputeShader.DisableKeyword.html), [SetKeyword](ComputeShader.SetKeyword.html), [keywordSpace](ComputeShader-keywordSpace.html), [IsKeywordEnabled](ComputeShader.IsKeywordEnabled.html), [enabledKeywords](ComputeShader-enabledKeywords.html).


            
