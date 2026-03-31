This version of Unity is unsupported.



# [ContactPoint](ContactPoint.html).point




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












                    public [Vector3](Vector3.html) point;






### Description



The point of contact.





The point of contact in world space where the collision contact occurred.
                    This represents the point on the surface of the collider where the contact was detected. The value is expressed in world space, meaning it is relative to the global coordinate system of the scene, not the local space of either colliding object.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Print how many points are colliding this transform
    // And print the first point that is colliding.
    void OnCollisionEnter(Collision other)
    {
        print("Points colliding: " + other.contacts.Length);
        print("First point that collided: " + other.contacts[0].point);
    }
}
```


            
