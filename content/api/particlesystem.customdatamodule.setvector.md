This version of Unity is unsupported.



# [ParticleSystem.CustomDataModule](ParticleSystem.CustomDataModule.html).SetVector




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

public void SetVector([ParticleSystemCustomData](ParticleSystemCustomData.html) stream,
int component,
[ParticleSystem.MinMaxCurve](ParticleSystem.MinMaxCurve.html) curve);






### Parameters



| Parameter | Description |
| --- | --- |
| stream | The name of the custom data stream to apply the curve to. |
| component | The component index to apply the curve to (0-3, mapping to the xyzw components of a Vector4 or float4). |
| curve | The curve to be used for generating custom data. |





### Description



Set a [MinMaxCurve](ParticleSystem.MinMaxCurve.html), in order to generate custom data.





Additional resources: [ParticleSystem.CustomDataModule.GetVector](ParticleSystem.CustomDataModule.GetVector.html), [ParticleSystem.GetCustomParticleData](ParticleSystem.GetCustomParticleData.html).


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
        customData.enabled = true;        AnimationCurve curve = new AnimationCurve();
        curve.AddKey(0.0f, 0.0f);
        curve.AddKey(1.0f, 1.0f);        customData.SetMode(ParticleSystemCustomData.Custom1, ParticleSystemCustomDataMode.Vector);
        customData.SetVectorComponentCount(ParticleSystemCustomData.Custom1, 1);
        customData.SetVector(ParticleSystemCustomData.Custom1, 0, new ParticleSystem.MinMaxCurve(1.0f, curve));
    }
}
```


            
