This version of Unity is unsupported.



# ShaderTagId





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



Unique identifier for a shader tag name or value.





Refers to either the name or value of a [SubShader](../Manual/SL-SubShaderTags.html) or [Pass](../Manual/SL-PassTags.html) tag.
This struct is used as an efficient representation of a "unique" tag string, meaning that two `ShaderTagId`s referring from the same string are equal.

Additional resources: [DrawingSettings](Rendering.DrawingSettings.html), [RendererListParams](Rendering.RendererListParams.html), [ShaderData.Subshader.FindTagValue](ShaderData.Subshader.FindTagValue.html).


              


```
using UnityEditor;
using UnityEngine;
using UnityEngine.Rendering;

// Adds a new Editor menu item called Example. Select a shader
// asset in the Project window, then select
// Example > PrintLightModeTagExample from the Editor menu. The value of all
// "LightMode" tags present in any pass of the shader will be printed to
// the console.
public class PrintLightModeTagExample
{
    [MenuItem("Example/PrintLightModeTagExample")]
    static void MenuCallback()
    {
        // If the selected object is a shader...
        if (Selection.activeObject is Shader selectedShader)
        {
            // For each subshader...
            ShaderData selectedShaderData = ShaderUtil.GetShaderData(selectedShader);
            for (int subShaderIndex = 0; subShaderIndex < selectedShaderData.SubshaderCount; ++subShaderIndex)
            {
                // For each pass...
                ShaderData.Subshader subShaderData = selectedShaderData.GetSubshader(subShaderIndex);
                for (int passIndex = 0; passIndex < subShaderData.PassCount; ++passIndex)
                {
                    ShaderData.Pass passData = subShaderData.GetPass(passIndex);

                    // If the pass has a "LightMode" tag, print its value
                    ShaderTagId lightModeValue = passData.FindTagValue(new ShaderTagId("LightMode"));
                    if (lightModeValue != ShaderTagId.none)
                    {
                        Debug.Log($"Pass '{passData.Name}' in SubShader {subShaderIndex} of "
                            + $"Shader '{selectedShader.name}' has LightMode '{lightModeValue.name}'.");
                    }
                }
            }
        }
    }
}
```





### Static Properties



| Property | Description |
| --- | --- |
| none | Describes a ShaderTagId not referring to any string. |





### Properties



| Property | Description |
| --- | --- |
| name | Gets the string this ShaderTagId refers to. |





### Constructors



| Constructor | Description |
| --- | --- |
| ShaderTagId | Gets or creates a ShaderTagId representing the given string. |





### Public Methods



| Method | Description |
| --- | --- |
| Equals | Checks if this shader tag identifier and the object refer to the same string. |
| GetHashCode | Converts this ShaderTagId to a hash code. |





### Operators



| Operator | Description |
| --- | --- |
| operator != | Checks if two ShaderTagIds aren't equal. |
| operator == | Checks if two ShaderTagIds refer to the same string. |
| ShaderTagId | Converts a string to a ShaderTagId. |
| string | Converts a ShaderTagId to a string. |


            
