This version of Unity is unsupported.



# [Rigidbody](Rigidbody.html).ClosestPointOnBounds




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




                [Switch to Manual](../Manual/class-Rigidbody.html)










## Declaration

public [Vector3](Vector3.html) ClosestPointOnBounds([Vector3](Vector3.html) position);






### Description



The closest point to the bounding box of the attached colliders.


              


```
// Subtract damage from a character's hit points when an
// explosion occurs.using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public float hitPoints = 10.0F;
    public Rigidbody rb;    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }    void ApplyDamage(Vector3 explosionPos, float radius)
    {
        Vector3 closestPoint = rb.ClosestPointOnBounds(explosionPos);
        float distance = Vector3.Distance(closestPoint, explosionPos);
        float damage = 1.0F - Mathf.Clamp01(distance / radius);
        damage *= 10;
        hitPoints -= damage;
    }
}
```


            
