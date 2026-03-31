This version of Unity is unsupported.



# [ParticleSystem.CustomDataModule](ParticleSystem.CustomDataModule.html).SetColor




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










## Declaration

public void SetColor([ParticleSystemCustomData](ParticleSystemCustomData.html) stream,
[ParticleSystem.MinMaxGradient](ParticleSystem.MinMaxGradient.html) gradient);






### Parameters



| Parameter | Description |
| --- | --- |
| stream | The name of the custom data stream to apply the gradient to. |
| gradient | The gradient to be used for generating custom color data. |





### Description



Set a [MinMaxGradient](ParticleSystem.MinMaxGradient.html), in order to generate custom HDR color data.





Additional resources: [ParticleSystem.CustomDataModule.GetColor](ParticleSystem.CustomDataModule.GetColor.html), [ParticleSystem.GetCustomParticleData](ParticleSystem.GetCustomParticleData.html).


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
        grad.SetKeys(new GradientColorKey[] { new GradientColorKey(Color.blue, 0.0f), new GradientColorKey(Color.red, 1.0f) }, new GradientAlphaKey[] { new GradientAlphaKey(1.0f, 0.0f), new GradientAlphaKey(0.0f, 1.0f) });        customData.SetMode(ParticleSystemCustomData.Custom1, ParticleSystemCustomDataMode.Color);
        customData.SetColor(ParticleSystemCustomData.Custom1, grad);
    }
}
```


            
