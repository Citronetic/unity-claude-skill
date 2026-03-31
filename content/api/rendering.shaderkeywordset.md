This version of Unity is unsupported.



# ShaderKeywordSet





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



A collection of [ShaderKeyword](Rendering.ShaderKeyword.html) that represents a specific shader variant.





A `ShaderKeywordSet` represents a single [shader variant](../Manual/shader-variants.html), a unique combination of keywords which are used to enable or disable functionality within a shader.
Note that this struct will not contain information on all keywords available to a shader -- for example, some platform-related keywords are stored in [PlatformKeywordSet](Rendering.PlatformKeywordSet.html).

`ShaderKeywordSet` is designed to be accessed at build time via [IPreprocessShaders](Build.IPreprocessShaders.html) or [IPreprocessComputeShaders](Build.IPreprocessComputeShaders.html).
Do not instantiate nor use this struct in isolation.
Use these callbacks in [scriptable stripping](../Manual/shader-variant-stripping.html) to reduce build times by culling unused variants before they are compiled.
For example, if you know that two distinct keywords will never need to be enabled at the same time, you may strip any variants with both keywords enabled.

For more information on shader keywords, see [Changing how shaders work via branching and keywords](../Manual/SL-MultipleProgramVariants.html).

Additional resources: [ShaderKeyword](Rendering.ShaderKeyword.html), [Shader.EnableKeyword](Shader.EnableKeyword.html), [Shader.EnableKeyword](Shader.EnableKeyword.html).


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
using UnityEngine.Rendering;
using UnityEditor.Build;
using UnityEditor.Rendering;

class ShaderDebugBuildPreprocessor : IPreprocessShaders
{
    ShaderKeyword m_KeywordToStrip;

    public ShaderDebugBuildPreprocessor()
    {
        m_KeywordToStrip = new ShaderKeyword("DEBUG");
    }

    // Use callbackOrder to set when Unity calls this shader preprocessor. Unity starts with the preprocessor that has the lowest callbackOrder value.
    public int callbackOrder { get { return 0; } }

    public void OnProcessShader(
        Shader shader, ShaderSnippetData snippet, IList<ShaderCompilerData> data)
        {

        for (int i = 0; i < data.Count; ++i)
        {
            if (data[i].shaderKeywordSet.IsEnabled(m_KeywordToStrip) && !EditorUserBuildSettings.development)
            {
                var foundKeywordSet = string.Join(" ", data[i].shaderKeywordSet.GetShaderKeywords());
                Debug.Log("Found keyword DEBUG in variant " + i + " of shader " + shader);
                Debug.Log("Keyword set: " + foundKeywordSet);
                data.RemoveAt(i);
                --i;
            }
        }
    }
}
```





### Public Methods



| Method | Description |
| --- | --- |
| Disable | Disable a specific shader keyword. |
| Enable | Enable a specific shader keyword. |
| GetShaderKeywords | Return an array with all the enabled keywords in the ShaderKeywordSet. |
| IsEnabled | Check whether a specific shader keyword is enabled. |


            
