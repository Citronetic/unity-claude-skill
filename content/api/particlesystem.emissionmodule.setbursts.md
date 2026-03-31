This version of Unity is unsupported.



# [ParticleSystem.EmissionModule](ParticleSystem.EmissionModule.html).SetBursts




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

public void SetBursts(Burst[] bursts);






## Declaration

public void SetBursts(Burst[] bursts,
int size);






### Parameters



| Parameter | Description |
| --- | --- |
| bursts | Array of bursts. |
| size | Optional array size for if the burst count is less than the array size. |





### Description



Sets the burst array.





Additional resources: [Burst](ParticleSystem.Burst.html), ParticleSystem.GetBursts.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;    void Start()
    {
        ps = GetComponent<ParticleSystem>();        var emission = ps.emission;
        emission.enabled = true;
        emission.SetBursts(new ParticleSystem.Burst[] { new ParticleSystem.Burst(0.0f, 100, 200), new ParticleSystem.Burst(1.0f, 10, 20) });
    }
}
```


            
