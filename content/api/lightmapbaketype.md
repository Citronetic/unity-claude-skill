This version of Unity is unsupported.



# LightmapBakeType





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



Enum describing what part of a light contribution can be baked.





The example below creates a Unity Editor menu option ("Tools → Set all lights to Baked") that, when selected, iterates through all active light objects currently present in the scene and sets their bake type to `Baked`. This ensures these lights will be fully precomputed into baked lightmaps, which can improve runtime performance.


              


```
using UnityEditor;
using UnityEngine;public class MyMenuPoints
{
    [MenuItem("Tools/Set all lights to Baked")]
    static void SetAllLightsToBaked()
    {
        // Set all active lights in the scene to Baked
        Light[] allLights = Object.FindObjectsByType<Light>(FindObjectsInactive.Exclude, FindObjectsSortMode.None);
        foreach (Light thisLight in allLights)
        {
            thisLight.lightmapBakeType = LightmapBakeType.Baked;
        }
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| Realtime | Real-time lights cast run time light and shadows. They can change position, orientation, color, brightness, and many other properties at run time. No lighting gets baked into lightmaps or light probes.. |
| Baked | Baked lights cannot move or change in any way during run time. All lighting for static objects gets baked into lightmaps. Lighting and shadows for dynamic objects gets baked into Light Probes. |
| Mixed | Mixed lights allow a mix of real-time and baked lighting, based on the Mixed Lighting Mode used. These lights cannot move, but can change color and intensity at run time. Changes to color and intensity only affect direct lighting as indirect lighting gets baked. If using Subtractive mode, changes to color or intensity are not calculated at run time on static objects. |


            
