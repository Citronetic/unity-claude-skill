This version of Unity is unsupported.



# [Material](Material.html).CopyPropertiesFromMaterial




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

public void CopyPropertiesFromMaterial([Material](Material.html) mat);






### Description



Copy properties from other material into this material.





This function copies property values (both serialized and set at runtime), as well as shader keywords, render queue and global illumination flags from the other material. Material's shader is not changed.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Attach this to a gameObject that has a renderer.
    // Copies any property mat has and assigns it to this transform material    Material mat;    void Start()
    {
        GetComponent<Renderer> ().material.CopyPropertiesFromMaterial(mat);
    }
}
```


            
