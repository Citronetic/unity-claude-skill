This version of Unity is unsupported.



# [Material](Material.html).SetColor




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

public void SetColor(string name,
[Color](Color.html) value);






## Declaration

public void SetColor(int nameID,
[Color](Color.html) value);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | Property name ID, use Shader.PropertyToID to get it. |
| name | Property name. For example, "_Color" in Built-in Render Pipeline, "_BaseColor" in URP. |
| value | Color value to set. |





### Description



Sets the value of a color- or vector-type property.





Many shaders use more than one color. Use SetColor to change the color (identified by shader property name, or unique property name ID).

The behavior of this method depends on aspects of the target property and the project's active color space.
A material property is considered to be in gamma space if either of the following are true:



          - The property is declared as a color and has the `[HDR]` attribute

          - The property is declared as a color or vector and has the `[Gamma]` attribute





If this method's target property is in gamma space and the project is in linear space, `value` is converted to linear space before being stored.
Otherwise, `value` is stored without modification. For more information on color spaces, refer to [Color spaces in Unity](../Manual/color-spaces.html).

When setting color values on materials using the Standard Shader, you should be aware that you may need to use [EnableKeyword](Material.EnableKeyword.html) to enable features of the shader that were not previously in use. For more detail, read [Accessing Materials via Script](../Manual/MaterialsAccessingViaScript.html).

Color property names are defined in the `Properties` section in the shader code. Here are examples of the color properties in Unity pre-built shaders:

`_Color`: the main color of a material (URP: `_BaseColor`). You can access this shader property via the [color](Material-color.html) property.

`_EmissionColor`: the emissive color of a material. For more information on defining properties, refer to [Properties in Shader Programs](../Manual/SL-PropertiesInPrograms.html).

Additional resources: [color](Material-color.html), [GetColor](Material.GetColor.html), [Shader.PropertyToID](Shader.PropertyToID.html).


              


```
//Attach this script to any GameObject in your scene to spawn a cube and change the material color
using UnityEngine;public class Example : MonoBehaviour
{
   void Start()
   {
       // Create a new cube primitive to set the color on
       GameObject cube = GameObject.CreatePrimitive(PrimitiveType.Cube);       // Get the Renderer component from the new cube
       var cubeRenderer = cube.GetComponent<Renderer>();       // Use SetColor to set the main color shader property
       cubeRenderer.material.SetColor("_Color", Color.red);
       // If your project uses URP, uncomment the following line and use it instead of the previous line
       // cubeRenderer.material.SetColor("_BaseColor", Color.red);
   }
}
```


            
