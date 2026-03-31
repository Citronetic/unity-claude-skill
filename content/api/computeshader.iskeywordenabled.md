This version of Unity is unsupported.



# [ComputeShader](ComputeShader.html).IsKeywordEnabled




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

public bool IsKeywordEnabled(ref [Rendering.LocalKeyword](Rendering.LocalKeyword.html) keyword);






## Declaration

public bool IsKeywordEnabled(string keyword);






### Parameters



| Parameter | Description |
| --- | --- |
| keyword | The LocalKeyword to check. |
| keyword | The name of the LocalKeyword to check. |





### Returns



**bool**
        Returns true if the given [LocalKeyword](Rendering.LocalKeyword.html) is enabled for this compute shader. Otherwise, returns false.





### Description



Checks whether a local shader keyword is enabled for this compute shader.





Shader keywords determine which shader variants Unity uses. For information on working with [local shader keywords](Rendering.LocalKeyword.html) and [global shader keywords](Rendering.GlobalKeyword.html) and how they interact, see [Using shader keywords with C# scripts](../Manual/shader-keywords-scripts.html).

If you pass in a [LocalKeyword](Rendering.LocalKeyword.html) and it does not exist in the [keywordSpace](ComputeShader-keywordSpace.html), this function returns `false`. If you pass a string and a [LocalKeyword](Rendering.LocalKeyword.html) with that `name` does not exist in the [keywordSpace](ComputeShader-keywordSpace.html), this function returns `false`.

The version of this function that takes a string as a parameter is slower than the version that takes a [LocalKeyword](Rendering.LocalKeyword.html). If you call this function more than once, it is best practice to create a [LocalKeyword](Rendering.LocalKeyword.html) struct, cache it, and use that.

**Note:** A `LocalKeyword` is specific to a single [Shader](Shader.html) or [ComputeShader](ComputeShader.html) instance. You cannot use it with other [Shader](Shader.html) or [ComputeShader](ComputeShader.html) instances, even if they declare keywords with the same name.

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





Additional resources: [Shader variants and keywords](../Manual/shader-variants-and-keywords.html), [LocalKeyword](Rendering.LocalKeyword.html), [GlobalKeyword](Rendering.GlobalKeyword.html), [EnableKeyword](ComputeShader.EnableKeyword.html), [DisableKeyword](ComputeShader.DisableKeyword.html), [SetKeyword](ComputeShader.SetKeyword.html), [keywordSpace](ComputeShader-keywordSpace.html), [enabledKeywords](ComputeShader-enabledKeywords.html), [shaderKeywords](ComputeShader-shaderKeywords.html).


            
