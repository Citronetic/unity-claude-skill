This version of Unity is unsupported.



# [Material](Material.html).SetFloat




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

public void SetFloat(string name,
float value);






## Declaration

public void SetFloat(int nameID,
float value);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | Property name ID, use Shader.PropertyToID to get it. |
| value | Float value to set. |
| name | Property name, e.g. "_Glossiness". |





### Description



Sets a named float value.





When setting values on materials using the Standard Shader, you should be aware that you may need to use [EnableKeyword](Material.EnableKeyword.html) to enable features of the shader that were not previously in use. For more detail, read [Accessing Materials via Script](../Manual/MaterialsAccessingViaScript.html).

Additional resources: [GetFloat](Material.GetFloat.html), [Materials](../Manual/Materials.html), [ShaderLab documentation](../Manual/Shaders.html), [Shader.PropertyToID](Shader.PropertyToID.html), [Properties in Shader Programs](../Manual/SL-PropertiesInPrograms.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    Renderer rend;    void Start()
    {
        rend = GetComponent<Renderer> ();        // Use the Specular shader on the material
        rend.material.shader = Shader.Find("Specular");
    }    void Update()
    {
        // Animate the Shininess value
        float shininess = Mathf.PingPong(Time.time, 1.0f);
        rend.material.SetFloat("_Shininess", shininess);
    }
}
```


            
