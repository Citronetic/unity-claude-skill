This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [Lightmapping](Experimental.GlobalIllumination.Lightmapping.html).SetDelegate




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















## Declaration

public static void SetDelegate([Experimental.GlobalIllumination.Lightmapping.RequestLightsDelegate](Experimental.GlobalIllumination.Lightmapping.RequestLightsDelegate.html) del);






### Description



The delegate for converting a list of lights into LightDataGI structures for light baking backends.





This is used for SRPs to customize or override how lighting data is passed and processed by the Global Illumination light baking backends.
It allows SRPs to modify intensity, color, shadow casting, attenuation, or other parameters to meet their pipeline-specific needs and achieve custom lighting results.
The delegate must be reset by calling ResetDelegate.
The example below shows how to set a delegate, such as the one described at [LightMode](Experimental.GlobalIllumination.LightMode.html).


              


```
using Unity.Collections;
using UnityEditor;
using UnityEngine;
using UnityEngine.Experimental.GlobalIllumination;
using Lightmapping = UnityEngine.Experimental.GlobalIllumination.Lightmapping;internal static class MyLightBakingUtils
{
    [MenuItem("Tools/Set delegate")]
    static void SetDelegate()
    {
        Lightmapping.SetDelegate(BakeOnlyDiscLightsDelegate);
    }    private static readonly Lightmapping.RequestLightsDelegate BakeOnlyDiscLightsDelegate = (Light[] requests, NativeArray<LightDataGI> lightsOutput) =>
    {
        // ...
    };
}
```


            
