This version of Unity is unsupported.



# [LocalKeyword](Rendering.LocalKeyword.html).isOverridable




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












                    public bool isOverridable;






### Description



Whether this local shader keyword can be overridden by a global shader keyword. (Read Only).





When the state of a local shader keyword and a global shader keyword with the same name contradict each other, Unity uses this value to determine whether the keyword is enabled or disabled.



          - When `isOverridable` is `true`: If a [GlobalKeyword](Rendering.GlobalKeyword.html) with the same `name` exists and is enabled, Unity uses the state of the `GlobalKeyword`. Otherwise, Unity uses the state of the `LocalKeyword`.

          - When `isOverridable` is `false`: Unity always uses the state of the `LocalKeyword`.





To set the value of `isOverridable` to `true`, declare the shader keyword with **global scope**. To set the value of `isOverridable` to `false`, declare the shader keyword with **local scope**. For information on declaring shader keywords with local or global scope, see [Shader keywords: Declaring keywords with local or global scope](../Manual/shader-keywords#declaring-keywords-scope.html).

**Note:** If a keyword is declared with local or global scope in a [Shader](Shader.html) source file, and a keyword with the same name is declared in one of its dependencies, the scope in the source file overrides the scope in the dependencies. Dependencies comprise all Shaders that are included via the [Fallback command](../Manual/SL-Fallback.html), and Passes that are included via the [UsePass command](../Manual/SL-UsePass.html).

This example iterates over the local shader keywords in the local keyword space for a material. It determines whether they are overridden by a global shader keyword, and prints their state.


              


```
using UnityEngine;
using UnityEngine.Rendering;public class KeywordExample : MonoBehaviour
{
    public Material material;    void Start()
    {
        CheckShaderKeywordState();
    }    void CheckShaderKeywordState()
    {
        // Get the instance of the Shader class that the material uses
        var shader = material.shader;        // Get all the local keywords that affect the Shader
        var keywordSpace = shader.keywordSpace;        // Iterate over the local keywords
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
                var state = material.IsKeywordEnabled(localKeyword) ? "enabled" : "disabled";
                Debug.Log("Local keyword with name of " + localKeyword.name + " is " + state);
            }
        }
    }
}
```





Additional resources: [Shader variants and keywords](../Manual/shader-variants-and-keywords.html), [GlobalKeyword](Rendering.GlobalKeyword.html).


            
