This version of Unity is unsupported.



# [Material](Material.html).GetTag




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

public string GetTag(string tag,
bool searchFallbacks);






## Declaration

public string GetTag(string tag,
bool searchFallbacks,
string defaultValue);






### Description



Get the value of material's shader tag.





If the material's shader does not define the tag, `defaultValue` is returned.

If `searchFallbacks` is `true` then this function will look for tag in all subshaders
and all fallbacks. If `searchFallbacks` is `false` then only the currently used subshader
will be queried for the tag.

Using `GetTag` without searching through fallbacks makes it possible to detect which
subshader is currently being used: add a custom tag to each subshader with different value,
and query the value at run time. For example, Unity water uses this function to
detect when the shader falls back to non-reflective one, and turns off reflection camera
in that case.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Attach this to a gameObject that has a renderer.    string materialTag = "RenderType";    void Start()
    {
        Renderer rend = GetComponent<Renderer>();
        string result = rend.material.GetTag(materialTag, true, "Nothing");        if (result == "Nothing")
        {
            Debug.LogError(materialTag + " not found in " + rend.material.shader.name);
        }
        else
        {
            Debug.Log("Tag found!, its value: " + result);
        }
    }
}
```


            
