This version of Unity is unsupported.



# LightsModule





struct in
          UnityEngine



/



Implemented in:[UnityEngine.ParticleSystemModule](UnityEngine.ParticleSystemModule.html)


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




                [Switch to Manual](../Manual/class-ParticleSystem.html)














### Description



Access the ParticleSystem Lights Module.





This module allows you to attach real-time Lights to a percentage of your particles.

The Lights Module is a simple and powerful module that allows particles to cast light onto their environment easily. Lights can inherit properties from the particles they are attached to, such as color and size. Point and Spot Lights are supported, including shadow casting and Light cookies.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    public Light myLight;    void Start()
    {
        ParticleSystem ps = GetComponent<ParticleSystem>();
        var lights = ps.lights;
        lights.enabled = true;
        lights.ratio = 0.5f;
        lights.light = myLight;
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| alphaAffectsIntensity | Toggle whether the system multiplies the particle alpha by the light intensity when it computes the final light intensity. |
| enabled | Specifies whether the LightsModule is enabled or disabled. |
| intensity | Define a curve to apply custom intensity scaling to particle Lights. |
| intensityMultiplier | Intensity multiplier. |
| light | Select what Light Prefab you want to base your particle lights on. |
| maxLights | Set a limit on how many Lights this Module can create. |
| range | Define a curve to apply custom range scaling to particle Lights. |
| rangeMultiplier | Range multiplier. |
| ratio | Choose what proportion of particles receive a dynamic light. |
| sizeAffectsRange | Toggle whether the system multiplies the particle size by the light range to determine the final light range. |
| useParticleColor | Toggle whether the particle lights multiply their color by the particle color. |
| useRandomDistribution | Randomly assign Lights to new particles based on ParticleSystem.LightsModule.ratio. |


            
