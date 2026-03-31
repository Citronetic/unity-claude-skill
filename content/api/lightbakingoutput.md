This version of Unity is unsupported.



# LightBakingOutput





struct in
          UnityEngine



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Struct describing the result of a Global Illumination bake for a given light.





The example below demonstrates how you can check the baked status of a light and change its active state.


              


```
using UnityEngine;
using System.Collections;public class LightBakingOutputExample : MonoBehaviour
{
    void TurnOffLight(Light light)
    {
        if (light.bakingOutput.isBaked && light.bakingOutput.lightmapBakeType != LightmapBakeType.Realtime)
        {
            Debug.Log("Light got some contribution statically baked, it cannot be turned off at runtime.");
        }
        else
        {
            light.enabled = false;
        }
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| isBaked | Is the light contribution already stored in lightmaps and/or lightprobes? |
| lightmapBakeType | This property describes what part of a light's contribution was baked. |
| mixedLightingMode | In case of a LightmapBakeType.Mixed light, describes what Mixed mode was used to bake the light, irrelevant otherwise. |
| occlusionMaskChannel | In case of a LightmapBakeType.Mixed light, contains the index of the occlusion mask channel to use if any, otherwise -1. |
| probeOcclusionLightIndex | In case of a LightmapBakeType.Mixed light, contains the index of the light as seen from the occlusion probes point of view if any, otherwise -1. |


            
