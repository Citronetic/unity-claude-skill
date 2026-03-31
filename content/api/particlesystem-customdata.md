This version of Unity is unsupported.



# [ParticleSystem](ParticleSystem.html).customData




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







                    public [ParticleSystem.CustomDataModule](ParticleSystem.CustomDataModule.html) customData;






### Description



Script interface for the CustomDataModule of a Particle System.





Once configured, this module will generate custom per-particle data, which you can use either in script or shaders.
To read the data from script, simply call [ParticleSystem.GetCustomParticleData](ParticleSystem.GetCustomParticleData.html).
To read it in a shader, enable the custom data streams in the [ParticleSystemRenderer](ParticleSystemRenderer.html) Module, or call [ParticleSystemRenderer.SetActiveVertexStreams](ParticleSystemRenderer.SetActiveVertexStreams.html) from script. Once enabled, the custom data will be passed to your vertex shader through a TEXCOORD channel. The [ParticleSystemRenderer](ParticleSystemRenderer.html) Inspector will tell you which channels are being used.

Particle System modules do not need to be reassigned back to the system; they are interfaces and not independent objects.

Additional resources: [ParticleSystemRenderer.SetActiveVertexStreams](ParticleSystemRenderer.SetActiveVertexStreams.html).


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        ParticleSystem ps = GetComponent<ParticleSystem>();
        var customData = ps.customData;
        customData.enabled = true;        Gradient grad = new Gradient();
        grad.SetKeys(new GradientColorKey[] { new GradientColorKey(Color.blue, 0.0f), new GradientColorKey(Color.red, 1.0f) }, new GradientAlphaKey[] { new GradientAlphaKey(1.0f, 0.0f), new GradientAlphaKey(0.0f, 1.0f) });        customData.SetMode(ParticleSystemCustomData.Custom1, UnityEngine.ParticleSystemCustomDataMode.Color);
        customData.SetColor(ParticleSystemCustomData.Custom1, grad);
    }
}
```


            
