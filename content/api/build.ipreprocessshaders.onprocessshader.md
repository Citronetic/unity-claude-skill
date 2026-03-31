This version of Unity is unsupported.



# [IPreprocessShaders](Build.IPreprocessShaders.html).OnProcessShader




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















## Declaration

public void OnProcessShader([Shader](Shader.html) shader,
[Rendering.ShaderSnippetData](Rendering.ShaderSnippetData.html) snippet,
IList<ShaderCompilerData> data);






### Parameters



| Parameter | Description |
| --- | --- |
| shader | The shader that Unity is about to compile. |
| snippet | Details about the specific shader code being compiled. |
| data | List of variants that Unity is about to compile for the shader. |





### Description



Implement this interface to receive a callback before a shader snippet is compiled.





When you build your application, Unity compiles each shader source file into multiple [shader variants](../Manual/shader-variants.html). Unity creates variants for some or all of the possible combinations of keywords you define in the shader source file.

                    You can use `OnProcessShader` to iterate through each shader and variant Unity is about to compile, and exclude ('strip') variants that use keywords or keyword combinations you don't need. If you strip variants, you can greatly reduce build size, build times, and how much runtime memory Unity uses.

                    For example you can use `OnProcessShader` to remove variants that use the following:



          - Keywords that aren't needed for the current target platform.

          - Combinations of keywords that are never used.

          - Keywords you only use in your debug builds.





Unity invokes the `OnProcessShader` callback in both Player and AssetBundle builds.

                    You can [check what shader variants you have in your project](../Manual/shader-how-many-variants.html) to help you identify keywords and variants to strip.

                    For example if you [declare a keyword](../Manual/SL-MultipleProgramVariants.html) called `DEBUG` in your shader code using `#pragma multi_compile _ DEBUG`, the following [Editor script](../Manual/SpecialFolders.html) finds and strips shader variants that use the keyword.

                    The script does the following when you build your application:



          1. Creates a class that implements the `IPreprocessShaders` interface.

          2. Creates an instance of `ShaderKeyword` with the name of the keyword.

          3. Implements the `OnProcessShader` callback function and iterates over the `data` list, which contains every variant in the shader.

          4. Uses `data.shaderKeywordSet.IsEnabled()` to check if each variant uses the keyword.

          5. Uses `data.removeAt()` to strip a shader variant if it contains the keyword and you've disabled **Development build** in [Build Settings](../Manual/BuildSettings.html).




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





You can also find local keywords. You must create the `ShaderKeyword` instance inside the implementation of `OnProcessShader`, so you can use the callback's `shader` variable in the `ShaderKeyword` constructor.

                    For example if you declare a local keyword called `RED` in your shader code using `#pragma multi_compile_local _ RED`, the following script finds and strips shader variants that use the keyword.


              


```
using System.Collections.Generic;
using UnityEditor.Build;
using UnityEditor.Rendering;
using UnityEngine;
using UnityEngine.Rendering;class MyCustomBuildProcessor : IPreprocessShaders
{    public int callbackOrder { get { return 0; } }     public void OnProcessShader(Shader shader, ShaderSnippetData snippet, IList<ShaderCompilerData> data)
    {

        // Create an instance of ShaderKeyword using the constructor that takes a Shader argument
        ShaderKeyword localKeywordToStrip = new ShaderKeyword(shader, "RED");        for (int i = 0; i < data.Count; ++i)
        {
            if (data[i].shaderKeywordSet.IsEnabled(localKeywordToStrip))
            {
                data.RemoveAt(i);
                --i;
            }
        }
    }
}
```





If you strip a variant that a Material needs at runtime, Unity chooses an available shader variant that matches as closely as possible.

                    Find out about other ways you can [strip shader variants](../Manual/shader-variant-stripping.html).

                    Additional resources: [BuildPipeline.BuildPlayer](BuildPipeline.BuildPlayer.html), [BuildPipeline.BuildAssetBundles](BuildPipeline.BuildAssetBundles.html), [IPreprocessComputeShaders](Build.IPreprocessComputeShaders.html).


            
