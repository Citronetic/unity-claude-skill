This version of Unity is unsupported.



# [ParticleSystem.MainModule](ParticleSystem.MainModule.html).emitterVelocityMode




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







                    public [ParticleSystemEmitterVelocityMode](ParticleSystemEmitterVelocityMode.html) emitterVelocityMode;






### Description



Control how the Particle System calculates its velocity, when moving in the world.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public ParticleSystemEmitterVelocityMode velocityMode;    void Start()
    {
        ps = GetComponent<ParticleSystem>();
    }    void Update()
    {
        var main = ps.main;
        main.emitterVelocityMode = velocityMode;
    }    void OnGUI()
    {
        velocityMode = (ParticleSystemEmitterVelocityMode)GUI.SelectionGrid(new Rect(25, 25, 300, 30), (int)velocityMode, new GUIContent[] { new GUIContent("Transform"), new GUIContent("Rigidbody") }, 2);
    }
}
```


            
