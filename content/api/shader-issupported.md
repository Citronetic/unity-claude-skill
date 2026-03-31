This version of Unity is unsupported.



# [Shader](Shader.html).isSupported




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







                    public bool isSupported;






### Description



Can this shader run on the end-users graphics card? (Read Only)





Returns true if the shader itself or any fallbacks setup in the shader are supported.
Most often you use this when implementing special effects.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        // Disable renderer if material's shader is not supported
        Renderer rend = GetComponent<Renderer>();        if (!rend.material.shader.isSupported)
        {
            rend.enabled = false;
        }
    }
}
```





Additional resources: [Material](Material.html) class, [ShaderLab documentation](../Manual/Shaders.html).


            
