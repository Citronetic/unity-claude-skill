This version of Unity is unsupported.



# [ParticleSystem.TrailModule](ParticleSystem.TrailModule.html).worldSpace




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







                    public bool worldSpace;






### Description



Drop new trail points in world space, regardless of Particle System Simulation Space.





When set to true, trails are always in world space, and do not move relative to the Transform component.
When set to false, trails move with the Particle System Transform, if also using local Simulation Space.
Additional resources: [ParticleSystem.MainModule.simulationSpace](ParticleSystem.MainModule-simulationSpace.html).


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public bool worldSpace = true;    void Start()
    {
        ps = GetComponent<ParticleSystem>();        var main = ps.main;
        main.startColor = new ParticleSystem.MinMaxGradient(Color.red, Color.yellow);
        main.startSize = 0.1f;
        main.startLifetime = 0.5f;        var trails = ps.trails;
        trails.enabled = true;        var psr = GetComponent<ParticleSystemRenderer>();
        psr.trailMaterial = new Material(Shader.Find("Sprites/Default"));
    }    void Update()
    {
        ps.transform.position = new Vector3(Mathf.Sin(Time.time * 2.0f) * 2.0f, 0.0f, 0.0f);        var trails = ps.trails;
        trails.worldSpace = worldSpace;
    }    void OnGUI()
    {
        worldSpace = GUI.Toggle(new Rect(25, 25, 200, 30), worldSpace, "World Space");
    }
}
```


            
