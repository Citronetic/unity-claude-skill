This version of Unity is unsupported.



# [ParticleSystem.CollisionModule](ParticleSystem.CollisionModule.html).colliderForce




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







                    public float colliderForce;






### Description



How much force is applied to a Collider when hit by particles from this Particle System.





Additional resources: [ParticleSystem.CollisionModule.multiplyColliderForceByParticleSize](ParticleSystem.CollisionModule-multiplyColliderForceByParticleSize.html), [ParticleSystem.CollisionModule.multiplyColliderForceByParticleSpeed](ParticleSystem.CollisionModule-multiplyColliderForceByParticleSpeed.html), [ParticleSystem.CollisionModule.multiplyColliderForceByCollisionAngle](ParticleSystem.CollisionModule-multiplyColliderForceByCollisionAngle.html), [ParticleSystem.collision](ParticleSystem-collision.html).


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public float hSliderValue = 0.02F;
    public bool hToggleUseCollisionAngle = true;
    public bool hToggleUseSpeed = true;
    public bool hToggleUseSize = true;    void Start()
    {
        ps = GetComponent<ParticleSystem>();        var main = ps.main;
        main.startSize = new ParticleSystem.MinMaxCurve(0.01f, 1.0f);        var collision = ps.collision;
        collision.enabled = true;
        collision.type = ParticleSystemCollisionType.World;
        collision.mode = ParticleSystemCollisionMode.Collision3D;        var collider = GameObject.CreatePrimitive(PrimitiveType.Sphere);
        collider.transform.parent = ps.transform;
        collider.transform.localPosition = new Vector3(0.0f, 0.0f, 13.0f);
        collider.transform.localScale = new Vector3(20.0f, 20.0f, 20.0f);        var rb = collider.AddComponent<Rigidbody>();
        rb.isKinematic = false;
        rb.useGravity = false;
    }    void Update()
    {
        var collision = ps.collision;
        collision.colliderForce = hSliderValue;
        collision.multiplyColliderForceByCollisionAngle = hToggleUseCollisionAngle;
        collision.multiplyColliderForceByParticleSpeed = hToggleUseSpeed;
        collision.multiplyColliderForceByParticleSize = hToggleUseSize;
    }    void OnGUI()
    {
        hSliderValue = GUI.HorizontalSlider(new Rect(25, 40, 100, 30), hSliderValue, 0.0F, 1.0F);
        hToggleUseCollisionAngle = GUI.Toggle(new Rect(25, 80, 140, 30), hToggleUseCollisionAngle, "Use Collision Angle");
        hToggleUseSpeed = GUI.Toggle(new Rect(25, 120, 140, 30), hToggleUseSpeed, "Use Particle Speed");
        hToggleUseSize = GUI.Toggle(new Rect(25, 160, 140, 30), hToggleUseSize, "Use Particle Size");
    }
}
```


            
