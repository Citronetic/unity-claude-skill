This version of Unity is unsupported.



# [Transform](Transform.html).localRotation




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







                    public [Quaternion](Quaternion.html) localRotation;






### Description



The rotation of the transform relative to the transform rotation of the parent.





Unity stores rotations as Quaternions internally. To rotate an object, use [Transform.Rotate](Transform.Rotate.html).
Use [Transform.localEulerAngles](Transform-localEulerAngles.html) for modifying the rotation as euler angles.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Example()
    {
        transform.localRotation = Quaternion.identity;
    }
}
```





Another example:


              


```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;// Rotate a cylinder around the x and z axes. Switch from one to the other
// when the rotation in the current axis reaches 360 degrees.public class ExampleScript : MonoBehaviour
{
    private float x;
    private float z;
    private bool rotateX;
    private float rotationSpeed;    void Start()
    {
        x = 0.0f;
        z = 0.0f;
        rotateX = true;
        rotationSpeed = 75.0f;
    }    void FixedUpdate()
    {
        if (rotateX == true)
        {
            x += Time.deltaTime * rotationSpeed;            if (x > 360.0f)
            {
                x = 0.0f;
                rotateX = false;
            }
        }
        else
        {
            z += Time.deltaTime * rotationSpeed;            if (z > 360.0f)
            {
                z = 0.0f;
                rotateX = true;
            }
        }        transform.localRotation = Quaternion.Euler(x, 0, z);
    }
}
```


            
