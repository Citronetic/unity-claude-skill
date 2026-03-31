This version of Unity is unsupported.



# [Material](Material.html).CopyMatchingPropertiesFromMaterial




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

public void CopyMatchingPropertiesFromMaterial([Material](Material.html) mat);






### Parameters



| Parameter | Description |
| --- | --- |
| mat | The Material to copy from. |





### Description



Copies properties, keyword states and settings from `mat` to this material, but only if they exist in both materials.





This method copies the following properties if they exist in both materials:



          - Serialized material properties.

          - Keyword states, if the keywords exist in both shaders.

          - Material settings: [Material.doubleSidedGI](Material-doubleSidedGI.html), [Material.enableInstancing](Material-enableInstancing.html), [Material.renderQueue](Material-renderQueue.html) and [Material.globalIlluminationFlags](Material-globalIlluminationFlags.html).




              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Attach this script to a GameObject that has a renderer.
    // Copies any property from mat and assigns it to this transform's material, if the property exists in both materials.    Material mat;    void Start()
    {
        GetComponent<Renderer>().material.CopyMatchingPropertiesFromMaterial(mat);
    }
}
```


            
