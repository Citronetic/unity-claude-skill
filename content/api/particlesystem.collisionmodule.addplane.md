This version of Unity is unsupported.



# [ParticleSystem.CollisionModule](ParticleSystem.CollisionModule.html).AddPlane




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

public void AddPlane([Transform](Transform.html) transform);






### Parameters



| Parameter | Description |
| --- | --- |
| transform | The plane to add. |





### Description



Adds a collision plane to use with this Particle System.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;    void Start()
    {
        ps = GetComponent<ParticleSystem>();        var collision = ps.collision;
        collision.enabled = true;
        collision.type = ParticleSystemCollisionType.Planes;
        collision.mode = ParticleSystemCollisionMode.Collision3D;        var collider = GameObject.CreatePrimitive(PrimitiveType.Plane);
        collider.transform.parent = ps.transform;
        collider.transform.localPosition = new Vector3(0.0f, 0.0f, 5.0f);
        collider.transform.localScale = new Vector3(20.0f, 20.0f, 20.0f);
        collider.transform.localRotation = Quaternion.Euler(new Vector3(-90.0f, 0.0f, 0.0f));        collision.AddPlane(collider.transform);
    }
}
```


            
