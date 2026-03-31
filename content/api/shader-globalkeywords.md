This version of Unity is unsupported.



# [Shader](Shader.html).globalKeywords




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







                    public static GlobalKeyword[] globalKeywords;






### Description



An array containing the global shader keywords that currently exist. This includes enabled and disabled global shader keywords.





Shader keywords determine which shader variants Unity uses. For information on working with [local shader keywords](Rendering.LocalKeyword.html) and [global shader keywords](Rendering.GlobalKeyword.html) and how they interact, see [Using shader keywords with C# scripts](../Manual/shader-keywords-scripts.html).

This example prints the name and state of all currently registered global shader keywords.


              


```
using UnityEngine;
using UnityEngine.Rendering;public class Example : MonoBehaviour
{
    private void Start()
    {
        foreach (var globalKeyword in Shader.globalKeywords)
        {
            var state = Shader.IsKeywordEnabled(globalKeyword) ? "enabled" : "disabled";
            Debug.Log("A global shader shader keyword with the name " + globalKeyword.name + " exists, and is currently " + state);
        }
    }
}
```





Additional resources: [Shader variants and keywords](../Manual/shader-variants-and-keywords.html), [LocalKeyword](Rendering.LocalKeyword.html), [GlobalKeyword](Rendering.GlobalKeyword.html), [EnableKeyword](Shader.EnableKeyword.html), [DisableKeyword](Shader.DisableKeyword.html), [SetKeyword](Shader.SetKeyword.html), [IsKeywordEnabled](Shader.IsKeywordEnabled.html), [enabledGlobalKeywords](Shader-enabledGlobalKeywords.html).


            
