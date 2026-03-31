This version of Unity is unsupported.



# [ParticleSystem.CustomDataModule](ParticleSystem.CustomDataModule.html).SetVectorComponentCount




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

public void SetVectorComponentCount([ParticleSystemCustomData](ParticleSystemCustomData.html) stream,
int count);






### Parameters



| Parameter | Description |
| --- | --- |
| stream | The name of the custom data stream to apply the curve to. |
| curveCount | The number of curves to generate data for. |





### Description



Specify how many curves are used to generate custom data for this stream.





Additional resources: [ParticleSystem.CustomDataModule.GetVectorComponentCount](ParticleSystem.CustomDataModule.GetVectorComponentCount.html), [MinMaxCurve](ParticleSystem.MinMaxCurve.html), [ParticleSystem.GetCustomParticleData](ParticleSystem.GetCustomParticleData.html).


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


            
