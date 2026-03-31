This version of Unity is unsupported.



# [ParticleSystem.ShapeModule](ParticleSystem.ShapeModule.html).alignToDirection




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







                    public bool alignToDirection;






### Description



Align particles based on their initial direction of travel.





The Shape Module supports setting the initial rotation of particles based on their direction of travel. This can be useful to make particles appear to have originated from the surface of a Mesh (for example, paint flaking off a surface). This works with any shape type. Unity applies any ParticleSystem.startRotation on top of this setting, so you can use both together.

You can use this setting in conjunction with the [ParticleSystem.MainModule.startRotation](ParticleSystem.MainModule-startRotation.html) setting; Unity adds the rotation given by [ParticleSystem.MainModule.startRotation](ParticleSystem.MainModule-startRotation.html) on top of the value that [ParticleSystem.ShapeModule.alignToDirection](ParticleSystem.ShapeModule-alignToDirection.html) calculates.

For example: add a [ParticleSystem.MainModule.startRotation](ParticleSystem.MainModule-startRotation.html) of 90 degrees when using [ParticleSystem.ShapeModule.alignToDirection](ParticleSystem.ShapeModule-alignToDirection.html), and all the particles become perpendicular to the surface, like little spikes sticking out of it.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(ParticleSystem))]
public class ExampleClass : MonoBehaviour
{
    private ParticleSystem ps;
    public bool toggle = true;    void Start()
    {
        ps = GetComponent<ParticleSystem>();
    }    void Update()
    {
        var shape = ps.shape;
        shape.alignToDirection = toggle;
    }    void OnGUI()
    {
        toggle = GUI.Toggle(new Rect(25, 45, 200, 30), toggle, "Align To Direction");
    }
}
```


            
