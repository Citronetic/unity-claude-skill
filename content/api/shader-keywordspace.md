This version of Unity is unsupported.



# [Shader](Shader.html).keywordSpace




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







                    public [Rendering.LocalKeywordSpace](Rendering.LocalKeywordSpace.html) keywordSpace;






### Description



The local keyword space of this shader.





Shader keywords determine which shader variants Unity uses. For information on working with [local shader keywords](Rendering.LocalKeyword.html) and [global shader keywords](Rendering.GlobalKeyword.html) and how they interact, see [Using shader keywords with C# scripts](../Manual/shader-keywords-scripts.html).

`keywordSpace` contains:



          - All keywords [declared in the source file](../Manual/SL-MultipleProgramVariants-declare.html).

          - All keywords declared in dependencies of that source file. This means all Shaders that are included via the [Fallback command](../Manual/SL-Fallback.html), and all Passes that are included via the [UsePass command](../Manual/SL-UsePass.html).

          - All [built-in keywords](../Manual/shader-keywords-built-in.html).





This property only describes the space of all local keywords for this shader. To change the state of any keyword, see [Material.EnableKeyword](Material.EnableKeyword.html) and [Material.DisableKeyword](Material.DisableKeyword.html).


              


```
using UnityEngine;
using UnityEngine.Rendering;

// This example iterates over the local shader keywords in the local
// keyword space for a graphics shader. It determines whether each
// keyword is overridden by a global shader keyword and prints its
// state.
public class KeywordExample : MonoBehaviour
{
    public Material material;

    void Start()
    {
        CheckShaderKeywordState();
    }

    void CheckShaderKeywordState()
    {
        // Get the instance of the Shader class that the material uses
        Shader shader = material.shader;

        // Get all the local keywords that affect the Shader
        LocalKeywordSpace keywordSpace = shader.keywordSpace;

        // Iterate over the local keywords
        foreach (LocalKeyword localKeyword in keywordSpace.keywords)
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
                string state = material.IsKeywordEnabled(localKeyword) ? "enabled" : "disabled";
                Debug.Log("Local keyword with name of " + localKeyword.name + " is " + state);
            }
        }
    }
}
```


            
