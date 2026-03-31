This version of Unity is unsupported.



# DynamicGI





class in
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



Query and control Enlighten Realtime Global Illumination.





Use the [DynamicGI](DynamicGI.html) static class to query and control the global Enlighten instance. Enlighten is a subsystem which provides Realtime Global Illumination. This class is applicable only when **Realtime Global Illumination** is enabled in the **Scene** tab of the **Lighting** window.

You can use this class to query the internal state of Enlighten. For example, you can use [DynamicGI.isConverged](DynamicGI-isConverged.html) to determine whether to show a loading screen.

Some properties allow you to control the runtime cost of Enlighten. For example, you can use [DynamicGI.materialUpdateTimeSlice](DynamicGI-materialUpdateTimeSlice.html) to determine how much computation is done every frame, and [DynamicGI.updateThreshold](DynamicGI-updateThreshold.html) to control how often realtime lightmaps are updated.

Enlighten Realtime Global Illumination takes the assigned Skybox Material into account in its lighting calculations. In most situations, it detects and processes any changes to the Skybox Material automatically (for example, when you change the Skybox Material). However, there are situations when Enlighten can't detect the change automatically (for example, when the Skybox Material's shader depends on global variables such as system time). In this case, you can call [DynamicGI.UpdateEnvironment](DynamicGI.UpdateEnvironment.html) to manually schedule an evaluation of the current Skybox Material. You can also use [DynamicGI.SetEnvironmentData](DynamicGI.SetEnvironmentData.html) to skip the Skybox Material evaluation and pass in raw cubemap values instead.

For more information on Enlighten, refer to [Introduction to Realtime Global Illumination using Enlighten](https://docs.unity3d.com/Manual/realtime-gi-using-enlighten.html).

Additional resources: [RendererExtensions.UpdateGIMaterials](RendererExtensions.UpdateGIMaterials.html), [TerrainExtensions.UpdateGIMaterials](TerrainExtensions.UpdateGIMaterials.html).


              


```
using UnityEngine;// Attach this script to a Game Object to animate the emission used
// by Enlighten Realtime GI. The Game Object's Material is unaffected.
public class AnimateEmission : MonoBehaviour
{
    public Color color1 = Color.red;
    public Color color2 = Color.blue;
    public float intensity = 2.0f;
    public float speed = 0.5f;    void Update()
    {
        // This value changes gradually from 0 to 1 to 0 in a cycle.
        var pingpong = Mathf.PingPong(Time.time * speed, 1.0f);        // Determine the new color for this frame.
        var newColor = Color.Lerp(color1, color2, pingpong) * intensity;        // Extract the MeshRenderer from the game object.
        var renderer = gameObject.GetComponent<MeshRenderer>();        // Apply the new emissive color using the MeshRenderer.
        DynamicGI.SetEmissive(renderer, newColor);
    }
}
```





### Static Properties



| Property | Description |
| --- | --- |
| indirectScale | Allows for scaling the contribution coming from real-time & baked lightmaps.Note: this value can be set in the Lighting Window UI and it is serialized, that is not the case for other properties in this class. |
| isConverged | Is precomputed Enlighten Realtime Global Illumination output converged? |
| materialUpdateTimeSlice | The number of milliseconds that can be spent on material updates. |
| synchronousMode | When enabled, new dynamic Global Illumination output is shown in each frame. |
| updateThreshold | Determines the percentage change in lighting intensity that triggers Unity to recalculate the real-time lightmap. |





### Static Methods



| Method | Description |
| --- | --- |
| SetEmissive | Allows to set an emissive color for a given renderer quickly, without the need to render the emissive input for the entire system. |
| SetEnvironmentData | Allows overriding the distant environment lighting for Enlighten Realtime Global Illumination, without changing the Skybox Material. |
| UpdateEnvironment | Schedules an update of the environment cubemap. |
| UpdateMaterials | Schedules an update of the albedo and emissive textures of a system that contains the renderer or the terrain. |


            
