This version of Unity is unsupported.



# [ParticleSystem.MainModule](ParticleSystem.MainModule.html).ringBufferLoopRange




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







                    public [Vector2](Vector2.html) ringBufferLoopRange;






### Description



When [ParticleSystem.MainModule.ringBufferMode](ParticleSystem.MainModule-ringBufferMode.html) is set to loop, this value defines the proportion of the particle life that loops.





This enables you to use other particle properties that are applied over the particle lifetimes, such as SizeOverLifetime. When the system must replace a particle, it plays the particle from its current age to its full lifetime. Then, removes it.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;    void Start()
    {
        ps = GetComponent<ParticleSystem>();
    }    void Update()
    {
        var main = ps.main;
        main.ringBufferLoopRange = new Vector2(0.1f, 0.6f);
    }
}
```


            
