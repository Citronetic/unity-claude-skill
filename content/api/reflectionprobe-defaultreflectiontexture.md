This version of Unity is unsupported.



# [ReflectionProbe](ReflectionProbe.html).defaultReflectionTexture




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




                [Switch to Manual](../Manual/class-ReflectionProbe.html)














### Description



Adds a delegate to get notifications when the default specular Cubemap is changed.





Additional resources: [ReflectionProbe](ReflectionProbe.html).


              


```
using UnityEngine;
using UnityEngine.Rendering;public class ReflectionProbeManager : MonoBehaviour
{
    private static void OnSetDefaultReflection(Texture cubemap)
    {
        Debug.Log("Default reflection cubemap was changed.");
    }    void Start()
    {
        ReflectionProbe.defaultReflectionTexture += OnSetDefaultReflection;
    }    void OnDestroy()
    {
        ReflectionProbe.defaultReflectionTexture -= OnSetDefaultReflection;
    }
}
```


            
