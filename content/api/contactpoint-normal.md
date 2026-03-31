This version of Unity is unsupported.



# [ContactPoint](ContactPoint.html).normal




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












                    public [Vector3](Vector3.html) normal;






### Description



Normal of the contact point.





The following example will draw a line to represent every normal from a collision. Each line will be drawn in the Scene view.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void OnCollisionEnter(Collision other)
    {
        // Print how many points are colliding with this transform
        Debug.Log("Points colliding: " + other.contacts.Length);        // Print the normal of the first point in the collision.
        Debug.Log("Normal of the first point: " + other.contacts[0].normal);        // Draw a different colored ray for every normal in the collision
        foreach (var item in other.contacts)
        {
            Debug.DrawRay(item.point, item.normal * 100, Random.ColorHSV(0f, 1f, 1f, 1f, 0.5f, 1f), 10f);
        }
    }
}
```


            
