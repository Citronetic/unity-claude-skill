This version of Unity is unsupported.



# [Material](Material.html).GetInteger




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

public int GetInteger(string name);






## Declaration

public int GetInteger(int nameID);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | The name ID of the property retrieved by Shader.PropertyToID. |
| name | The name of the property. |





### Returns



**int**
        The integer property value. Returns `0` if the integer property is not found.





### Description



Get a named integer value. If the integer property is not found an exception is thrown.





Additional resources: [SetInteger](Material.SetInteger.html), [Materials](../Manual/Materials.html), [ShaderLab documentation](../Manual/Shaders.html), [Shader.PropertyToID](Shader.PropertyToID.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        Renderer rend = GetComponent<Renderer> ();
        rend.material.shader = Shader.Find("MyFlipBook");
        print(rend.material.GetInteger("_NumFrames"));
    }
}
```


            
