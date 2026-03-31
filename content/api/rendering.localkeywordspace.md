This version of Unity is unsupported.



# LocalKeywordSpace





struct in
          UnityEngine.Rendering



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



















### Description



Represents the local keyword space of a [Shader](Shader.html) or [ComputeShader](ComputeShader.html).





Shader keywords determine which shader variants Unity uses. For information on working with local shader keywords and [global shader keywords](Rendering.GlobalKeyword.html) and how they interact, see [Using shader keywords with C# scripts](../Manual/shader-keywords-scripts.html).

When you declare a [shader keyword](../Manual/shader-keywords.html) in the source file for a [Shader](Shader.html) or [ComputeShader](ComputeShader.html), Unity represents the keyword with a [LocalKeyword](Rendering.LocalKeyword.html) and stores it in a `LocalKeywordSpace`.

What keywords a space contains depends on the type of shader:



          - For a [Shader](Shader.html), see [Shader.keywordSpace](Shader-keywordSpace.html).

          - For a [ComputeShader](ComputeShader.html), see [ComputeShader.keywordSpace](ComputeShader-keywordSpace.html).





Additional resources: [Introduction to shader variants](../Manual/shader-variants.html), [LocalKeyword](Rendering.LocalKeyword.html), [GlobalKeyword](Rendering.GlobalKeyword.html), [ComputeShader.keywordSpace](ComputeShader-keywordSpace.html), [Shader.keywordSpace](Shader-keywordSpace.html).


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





### Properties



| Property | Description |
| --- | --- |
| keywordCount | The number of local shader keywords in this local keyword space. (Read Only) |
| keywordNames | An array containing the names of all local shader keywords in this local keyword space. (Read Only) |
| keywords | An array containing all LocalKeyword structs in this local keyword space. (Read Only) |





### Public Methods



| Method | Description |
| --- | --- |
| FindKeyword | Searches for a local shader keyword with a given name in the keyword space. |





### Operators



| Operator | Description |
| --- | --- |
| operator != | Returns true if the local shader keyword spaces are not the same. Otherwise, returns false. |
| operator == | Returns true if the local shader keyword spaces are the same. Otherwise, returns false. |


            
