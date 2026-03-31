This version of Unity is unsupported.



# [Shader](Shader.html).SetGlobalFloat




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










## Declaration

public static void SetGlobalFloat(string name,
float value);






## Declaration

public static void SetGlobalFloat(int nameID,
float value);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | The name ID of the property retrieved by Shader.PropertyToID. |
| name | The name of the property. |





### Description



Sets a global float property for all shaders.





Global properties are used if a shader needs them but the material does
not have them defined (for example, if the shader does not expose them
in `Properties` block).

Usually this is used if you have a set of custom shaders that all use
the same "global" float (for example, density of some custom fog type).
Then you can set the global property from script and don't have to setup
the same float in all materials.

Additional resources: [SetGlobalColor](Shader.SetGlobalColor.html), [SetGlobalTexture](Shader.SetGlobalTexture.html); [Material](Material.html) class, [ShaderLab documentation](../Manual/Shaders.html).

The following example sets the global float property `_MyFloat` to `1` in all shaders.


              


```
using UnityEngine;public class SetGlobalFloatExample : MonoBehaviour
{
    void Start()
    {
        Shader.SetGlobalFloat("_MyFloat", 1.0f);
    }
}
```


            
