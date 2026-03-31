This version of Unity is unsupported.



# [Shader](Shader.html).enabledGlobalKeywords




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







                    public static GlobalKeyword[] enabledGlobalKeywords;






### Description



An array containing the global shader keywords that are currently enabled.





Shader keywords determine which shader variants Unity uses. For information on working with [local shader keywords](Rendering.LocalKeyword.html) and [global shader keywords](Rendering.GlobalKeyword.html) and how they interact, see [Using shader keywords with C# scripts](../Manual/shader-keywords-scripts.html).

This example prints the names of all currently enabled global shader keywords.


              


```
using UnityEngine;
using UnityEngine.Rendering;public class Example : MonoBehaviour
{
    private void Start()
    {
        foreach (var globalKeyword in Shader.enabledGlobalKeywords)
        {
            Debug.Log("Global shader keyword " + globalKeyword.name + " is currently enabled");
        }
    }
}
```





Additional resources: [Shader variants and keywords](../Manual/shader-variants-and-keywords.html), [LocalKeyword](Rendering.LocalKeyword.html), [GlobalKeyword](Rendering.GlobalKeyword.html), [EnableKeyword](Shader.EnableKeyword.html), [DisableKeyword](Shader.DisableKeyword.html), [SetKeyword](Shader.SetKeyword.html), [IsKeywordEnabled](Shader.IsKeywordEnabled.html), [globalKeywords](Shader-globalKeywords.html).


            
