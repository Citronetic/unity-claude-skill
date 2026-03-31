This version of Unity is unsupported.



# Material Constructor




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

public Material([Shader](Shader.html) shader);






## Declaration

public Material([Material](Material.html) source);






### Parameters



| Parameter | Description |
| --- | --- |
| shader | Create a material with a given Shader. |
| source | Create a material by copying all properties from another material. |





### Description



Create a temporary Material.





If you have a script which implements a custom special effect, you implement all the graphic setup
using shaders & materials. Use this function to create a custom shader & material inside your script.
After creating the material, use [SetColor](Material.SetColor.html), [SetTexture](Material.SetTexture.html), [SetFloat](Material.SetFloat.html),
[SetVector](Material.SetVector.html), [SetMatrix](Material.SetMatrix.html) to populate the shader property values.

Additional resources: [Materials](../Manual/Materials.html), [Shaders](../Manual/Shaders.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Creates a material from shader and texture references.
    Shader shader;
    Texture texture;
    Color color;    void Start()
    {
        Renderer rend = GetComponent<Renderer> ();        rend.material = new Material(shader);
        rend.material.mainTexture = texture;
        rend.material.color = color;
    }
}
```


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Creates a cube and assigns a material with a builtin Specular shader.
    void Start()
    {
        GameObject cube = GameObject.CreatePrimitive(PrimitiveType.Cube);
        Renderer rend = cube.GetComponent<Renderer> ();
        rend.material = new Material(Shader.Find("Specular"));
    }
}
```


            
