This version of Unity is unsupported.



# [MaterialGlobalIlluminationFlags](MaterialGlobalIlluminationFlags.html).RealtimeEmissive




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



















### Description



The emissive lighting will affect Enlighten Realtime Global Illumination. It emits lighting into real-time lightmaps and real-time Light Probes.





The flags are mutually exclusive so if you are using real-time Emissive lighting, you must remove the EmissiveIsBlack flag from the material as shown in the example below.


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    Material material;    void Start()
    {
        // Remove the EmissiveIsBlack flag from material:
        MaterialGlobalIlluminationFlags flags = material.globalIlluminationFlags;
        flags &= ~MaterialGlobalIlluminationFlags.EmissiveIsBlack;
        material.globalIlluminationFlags = flags;
    }
}
```





Additional resources: Material.globalIlluminationFlags.EmissiveIsBlack.


            
