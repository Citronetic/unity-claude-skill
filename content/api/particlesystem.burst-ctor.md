This version of Unity is unsupported.



# ParticleSystem.Burst Constructor




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

public ParticleSystem.Burst(float _time,
short _count);






## Declaration

public ParticleSystem.Burst(float _time,
short _minCount,
short _maxCount);






## Declaration

public ParticleSystem.Burst(float _time,
short _minCount,
short _maxCount,
int _cycleCount,
float _repeatInterval);






## Declaration

public ParticleSystem.Burst(float _time,
[ParticleSystem.MinMaxCurve](ParticleSystem.MinMaxCurve.html) _count);






## Declaration

public ParticleSystem.Burst(float _time,
[ParticleSystem.MinMaxCurve](ParticleSystem.MinMaxCurve.html) _count,
int _cycleCount,
float _repeatInterval);






### Parameters



| Parameter | Description |
| --- | --- |
| _time | Time to emit the burst. |
| _minCount | Minimum number of particles to emit. |
| _maxCount | Maximum number of particles to emit. |
| _count | Number of particles to emit. |
| _cycleCount | Specifies how many times the system should play the burst. Set this to 0 to make it play indefinitely. |
| _repeatInterval | How often to repeat the burst, in seconds. |





### Description



Construct a new Burst with a time and count.





Additional resources: ParticleSystem.emissionModule.SetBursts, ParticleSystem.emissionModule.GetBursts.


              


```
using UnityEngine;
using System.Collections;// Create a looping Particle System.
// At 0, 1 and 2 secs the number of particles in each loop
// are changed from 10, to 50, then to 100.
// The loops repeat after 3 seconds.[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    public Material part;    void Start()
    {
        // create a red ground plane
        GameObject ground = GameObject.CreatePrimitive(PrimitiveType.Quad);
        ground.transform.rotation = Quaternion.Euler(90, 0, 0);
        ground.transform.localScale = new Vector3(10, 10, 10);
        ground.GetComponent<Renderer>().material.color = Color.red;        // rotate the GameObject so particles rise up in the y-axis
        gameObject.transform.rotation = Quaternion.Euler(-90, 0, 0);
        gameObject.AddComponent<ParticleSystem>();        // create the ParticleSystem
        ParticleSystem ps;
        ps = gameObject.GetComponent<ParticleSystem>();        ps.Stop();        // set the MainModule default values
        var main = ps.main;
        main.startColor = Color.yellow;
        main.duration = 3;        // create a cone and change it into a cylinder
        var shape = ps.shape;
        shape.shapeType = ParticleSystemShapeType.Cone;
        shape.angle = 0.0f;
        shape.radius = 2.0f;
        shape.radiusThickness = 0.0f;        // use the passed in material
        gameObject.GetComponent<ParticleSystemRenderer>().material = part;        // set up the emission to generate particles
        var em = ps.emission;
        em.enabled = true;
        em.rateOverTime = 0;        em.SetBursts(
            new ParticleSystem.Burst[]
            {
                new ParticleSystem.Burst(0.0f, 10),
                new ParticleSystem.Burst(1.0f, 50),
                new ParticleSystem.Burst(2.0f, 100)
            });        ps.Play();
    }
}
```


            
