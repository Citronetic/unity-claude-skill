This version of Unity is unsupported.



# [Material](Material.html).SetVector




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




                [Switch to Manual](../Manual/class-Material.html)










## Declaration

public void SetVector(string name,
[Vector4](Vector4.html) value);






## Declaration

public void SetVector(int nameID,
[Vector4](Vector4.html) value);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | Property name ID, use Shader.PropertyToID to get it. |
| name | Property name, e.g. "_WaveAndDistance". |
| value | Vector value to set. |





### Description



Sets a value for a named vector in the material.





Four component vectors and colors are the same in Unity shaders. `SetVector` does almost exactly the same
as [SetColor](Material.SetColor.html) just the input data type is different (`xyzw` in the vector becomes `rgba` in the color).
The only difference is that color values are be converted from sRGB to Linear value, when using linear color space
(see [properties in shader programs](../Manual/SL-PropertiesInPrograms.html)).

You can also use SetVector to assign values to float2 or float3 properties defined in the shader.

Additional resources: [SetColor](Material.SetColor.html), [GetVector](Material.GetVector.html), [Shader.PropertyToID](Shader.PropertyToID.html), [Properties in Shader Programs](../Manual/SL-PropertiesInPrograms.html).


              


```
using UnityEngine;public class SetVectorExample : MonoBehaviour
{
    public Material targetMaterial;    void Start()
    {
        Vector4 customVector = new Vector4(1.0f, 0.5f, 0.0f, 1.0f);        // Set the vector to a shader property named "_CustomVector"
        targetMaterial.SetVector("_CustomVector", customVector);
    }
}
```


            
