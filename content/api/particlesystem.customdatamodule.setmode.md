This version of Unity is unsupported.



# [ParticleSystem.CustomDataModule](ParticleSystem.CustomDataModule.html).SetMode




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

public void SetMode([ParticleSystemCustomData](ParticleSystemCustomData.html) stream,
[ParticleSystemCustomDataMode](ParticleSystemCustomDataMode.html) mode);






### Parameters



| Parameter | Description |
| --- | --- |
| stream | The name of the custom data stream to enable data generation on. |
| mode | The type of data to generate. |





### Description



Choose the type of custom data to generate for the chosen data stream.





Additional resources: [ParticleSystem.CustomDataModule.GetMode](ParticleSystem.CustomDataModule.GetMode.html), [ParticleSystem.GetCustomParticleData](ParticleSystem.GetCustomParticleData.html).


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
        customData.SetColor(ParticleSystemCustomData.Custom1, grad);        AnimationCurve curve = new AnimationCurve();
        curve.AddKey(0.0f, 0.0f);
        curve.AddKey(1.0f, 1.0f);        customData.SetMode(ParticleSystemCustomData.Custom2, ParticleSystemCustomDataMode.Vector);
        customData.SetVectorComponentCount(ParticleSystemCustomData.Custom2, 1);
        customData.SetVector(ParticleSystemCustomData.Custom2, 0, new ParticleSystem.MinMaxCurve(1.0f, curve));
    }
}
```


            
