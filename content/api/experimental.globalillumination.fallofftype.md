This version of Unity is unsupported.



# FalloffType





enumeration


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



The falloff models to use for a light baking backend.





A falloff model describes how light intensity diminishes (falls off) with distance from the source.

This enumeration allows SRPs or custom lighting implementations to specify explicitly how lights should behave when processed by the Global Illumination light baking backends.

The example below uses `FalloffType` in a delegate to be used with [Lightmapping.SetDelegate](Experimental.GlobalIllumination.Lightmapping.SetDelegate.html). The delegate forces all disc lights in a scene to be baked with a falloff model of `InverseSquared`.


              


```
using Unity.Collections;
using UnityEngine;
using UnityEngine.Experimental.GlobalIllumination;internal static class MyLightBakingUtils
{
    public static Lightmapping.RequestLightsDelegate BakeFalloffInverseSquaredDelegate = (Light[] requests, NativeArray<LightDataGI> lightsOutput) =>
    {
        LightDataGI lightData = new ();        // Iterate over all lights in the scene
        for (int i = 0; i < requests.Length; i++)
        {
            Light light = requests[i];            switch (light.type)
            {
                case UnityEngine.LightType.Disc:
                    DiscLight discLight = new DiscLight();
                    LightmapperUtils.Extract(light, ref discLight);
                    discLight.mode = LightMode.Baked;
                    lightData.Init(ref discLight);
                    break;
                case UnityEngine.LightType.Spot:
                case UnityEngine.LightType.Directional:
                case UnityEngine.LightType.Point:
                case UnityEngine.LightType.Rectangle:
                case UnityEngine.LightType.Pyramid:
                case UnityEngine.LightType.Box:
                case UnityEngine.LightType.Tube:
                default:
                    lightData.InitNoBake(light.GetInstanceID());
                    break;
            }            lightData.falloff = FalloffType.InverseSquared;
            lightsOutput[i] = lightData;
        }
    };
}
```





### Properties



| Property | Description |
| --- | --- |
| InverseSquared | Inverse squared distance falloff model. |
| InverseSquaredNoRangeAttenuation | Inverse squared distance falloff model (without smooth range attenuation). |
| Linear | Linear falloff model. |
| Legacy | Quadratic falloff model. |
| Undefined | Falloff model is undefined. |


            
