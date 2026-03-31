This version of Unity is unsupported.



# [Material](Material.html).shader




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







                    public [Shader](Shader.html) shader;






### Description



The shader used by the material.





Additional resources: [Shader.Find](Shader.Find.html) method, [Materials](../Manual/Materials.html), [ShaderLab documentation](../Manual/Shaders.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Toggle between Diffuse and Transparent/Diffuse shaders
    // when space key is pressed    Shader shader1;
    Shader shader2;
    Renderer rend;
    void Start()
    {
        rend = GetComponent<Renderer> ();
        shader1 = Shader.Find("Diffuse");
        shader2 = Shader.Find("Transparent/Diffuse");
    }    void Update()
    {
        if (Input.GetButtonDown("Jump"))
        {
            if (rend.material.shader == shader1)
            {
                rend.material.shader = shader2;
            }
            else
            {
                rend.material.shader = shader1;
            }
        }
    }
}
```


            
