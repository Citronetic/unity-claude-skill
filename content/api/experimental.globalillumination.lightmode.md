This version of Unity is unsupported.



# LightMode





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



The light mode a light baking backend uses.





A light can be real-time, mixed, baked or unknown. Unknown lights will be ignored by the baking backends.

The example below uses `LightMode` in a delegate to be used with [Lightmapping.SetDelegate](Experimental.GlobalIllumination.Lightmapping.SetDelegate.html). The delegate forces all disc lights in a scene to be baked and all other types of lights to not be baked.


              


```
using Unity.Collections;
using UnityEngine;
using UnityEngine.Experimental.GlobalIllumination;internal static class MyLightBakingUtils
{
    public static Lightmapping.RequestLightsDelegate BakeOnlyDiscLightsDelegate = (Light[] requests, NativeArray<LightDataGI> lightsOutput) =>
    {
        LightDataGI lightData = new LightDataGI();        // Iterate over all lights in the scene
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
            }            lightsOutput[i] = lightData;
        }
    };
}
```





Additional resources: [LightmapBakeType](LightmapBakeType.html).





### Properties



| Property | Description |
| --- | --- |
| Realtime | The light is real-time. No contribution will be baked in lightmaps or light probes. |
| Mixed | The light is mixed. Mixed lights are interpreted based on the global light mode setting in the lighting window. |
| Baked | The light is fully baked and has no real-time component. |
| Unknown | The light should be ignored by the baking backends. |


            
