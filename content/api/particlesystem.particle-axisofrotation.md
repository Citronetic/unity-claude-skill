This version of Unity is unsupported.



# [ParticleSystem.Particle](ParticleSystem.Particle.html).axisOfRotation




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







                    public [Vector3](Vector3.html) axisOfRotation;






### Description



Mesh particles rotate around this axis.





Mesh particles travel around an axis set up for each particle.


              


```
using UnityEngine;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    public bool overrideAxisOfRotation;
    private ParticleSystem ps;    void Start()
    {
        ps = GetComponent<ParticleSystem>();
    }    void Update()
    {
        if (overrideAxisOfRotation)
        {
            ParticleSystem.Particle[] particles = new ParticleSystem.Particle[ps.particleCount];
            ps.GetParticles(particles);            for (int i = 0; i < particles.Length; i++)
                particles[i].axisOfRotation = Vector3.up;            ps.SetParticles(particles, ps.particleCount);
        }
    }    private void OnGUI()
    {
        bool newValue = GUI.Toggle(new Rect(10, 10, 200, 30), overrideAxisOfRotation, new GUIContent("Override Axis of Rotation"));
        if (newValue != overrideAxisOfRotation)
        {
            ps.Clear();
            overrideAxisOfRotation = newValue;
        }
    }
}
```


            
