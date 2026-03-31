This version of Unity is unsupported.



# [Transform](Transform.html).localScale




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




                [Switch to Manual](../Manual/class-Transform.html)







                    public [Vector3](Vector3.html) localScale;






### Description



The scale of the transform relative to the GameObjects parent.





The example below creates a sphere [GameObject](GameObject.html) with a scale of (1,1,1). The application then changes the [Transform.localScale](Transform-localScale.html) from 1.0 down to 0.25 and back to 1.0 repeatedly.


              


```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;public class Example : MonoBehaviour
{
    private GameObject sphere;
    private Vector3 scaleChange, positionChange;    void Awake()
    {
        Camera.main.clearFlags = CameraClearFlags.SolidColor;        // Create a sphere at the origin.
        sphere = GameObject.CreatePrimitive(PrimitiveType.Sphere);
        sphere.transform.position = new Vector3(0, 0, 0);        // Create a plane and move down by 0.5.
        GameObject plane = GameObject.CreatePrimitive(PrimitiveType.Plane);
        plane.transform.position = new Vector3(0, -0.5f, 0);        // Change the floor color to blue.
        // The blue material is present in Resources and not created in this script.
        Renderer rend = plane.GetComponent<Renderer>();
        rend.material = Resources.Load<Material>("blue");        scaleChange = new Vector3(-0.01f, -0.01f, -0.01f);
        positionChange = new Vector3(0.0f, -0.005f, 0.0f);
    }    void Update()
    {
        sphere.transform.localScale += scaleChange;
        sphere.transform.position += positionChange;        // Move upwards when the sphere hits the floor or downwards
        // when the sphere scale extends 1.0f.
        if (sphere.transform.localScale.y < 0.1f || sphere.transform.localScale.y > 1.0f)
        {
            scaleChange = -scaleChange;
            positionChange = -positionChange;
        }
    }
}
```


            
