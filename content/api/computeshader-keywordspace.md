This version of Unity is unsupported.



# [ComputeShader](ComputeShader.html).keywordSpace




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







                    public [Rendering.LocalKeywordSpace](Rendering.LocalKeywordSpace.html) keywordSpace;






### Description



The local keyword space of this compute shader.





Shader keywords determine which shader variants Unity uses. For information on working with [local shader keywords](Rendering.LocalKeyword.html) and [global shader keywords](Rendering.GlobalKeyword.html) and how they interact, see [Using shader keywords with C# scripts](../Manual/shader-keywords-scripts.html).

`keywordSpace` represents all keywords declared in the source file for a compute shader. For information about declaring and using shader keywords in shader source files, see [Shader keywords](../Manual/shader-keywords.html).

This example iterates over the local shader keywords in the local keyword space for a compute shader. It determines whether they are overridden by a global shader keyword, and prints their state.


              


```
using UnityEngine;
using UnityEngine.Rendering;public class Example : MonoBehaviour
{
    public ComputeShader computeShader;    void Start()
    {
        CheckShaderKeywordState();
    }    void CheckShaderKeywordState()
    {
        // Get all the local keywords that affect the Compute Shader
        var keywordSpace = computeShader.keywordSpace;        // Iterate over the local keywords
        foreach (var localKeyword in keywordSpace.keywords)
        {
            // If the local keyword is overridable,
            // and a global keyword with the same name exists and is enabled,
            // then Unity uses the global keyword state
            if (localKeyword.isOverridable && Shader.IsKeywordEnabled(localKeyword.name))
            {
                Debug.Log("Local keyword with name of " + localKeyword.name + " is overridden by a global keyword, and is enabled");
            }
            // Otherwise, Unity uses the local keyword state
            else
            {
                var state = computeShader.IsKeywordEnabled(localKeyword) ? "enabled" : "disabled";
                Debug.Log("Local keyword with name of " + localKeyword.name + " is " + state);
            }
        }
    }
}
```





Additional resources: [Shader variants and keywords](../Manual/shader-variants-and-keywords.html), [LocalKeyword](Rendering.LocalKeyword.html), [GlobalKeyword](Rendering.GlobalKeyword.html), [EnableKeyword](ComputeShader.EnableKeyword.html), [DisableKeyword](ComputeShader.DisableKeyword.html), [SetKeyword](ComputeShader.SetKeyword.html), [IsKeywordEnabled](ComputeShader.IsKeywordEnabled.html), [enabledKeywords](ComputeShader-enabledKeywords.html), [shaderKeywords](ComputeShader-shaderKeywords.html).


            
