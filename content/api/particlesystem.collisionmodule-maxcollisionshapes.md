This version of Unity is unsupported.



# [ParticleSystem.CollisionModule](ParticleSystem.CollisionModule.html).maxCollisionShapes




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







                    public int maxCollisionShapes;






### Description



The maximum number of collision shapes Unity considers for particle collisions. It ignores excess shapes. Terrains take priority.





Additional resources: [ParticleSystem.collision](ParticleSystem-collision.html).


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public bool maxToggle;    void Start()
    {
        ps = GetComponent<ParticleSystem>();        var main = ps.main;
        main.startColor = Color.red;        var shape = ps.shape;
        shape.shapeType = ParticleSystemShapeType.Sphere;        var collision = ps.collision;
        collision.enabled = true;
        collision.type = ParticleSystemCollisionType.World;
        collision.mode = ParticleSystemCollisionMode.Collision3D;
        collision.bounce = 0.0f;        var collider1 = GameObject.CreatePrimitive(PrimitiveType.Sphere);
        collider1.transform.parent = ps.transform;
        collider1.transform.localPosition = new Vector3(0.0f, 0.0f, 13.0f);
        collider1.transform.localScale = new Vector3(20.0f, 20.0f, 20.0f);        var collider2 = GameObject.CreatePrimitive(PrimitiveType.Sphere);
        collider2.transform.parent = ps.transform;
        collider2.transform.localPosition = new Vector3(0.0f, 0.0f, -13.0f);
        collider2.transform.localScale = new Vector3(20.0f, 20.0f, 20.0f);
    }    void Update()
    {
        var collision = ps.collision;
        collision.maxCollisionShapes = maxToggle ? 2 : 1;
    }    void OnGUI()
    {
        maxToggle = GUI.Toggle(new Rect(25, 40, 300, 30), maxToggle, "Toggle Max Collision Shapes (" + (maxToggle ? "2" : "1") + ")");
    }
}
```


            
