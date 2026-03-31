This version of Unity is unsupported.



# [RaycastHit](RaycastHit.html).point




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



The impact point in world space where the ray hit the collider.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Apply a force to a rigidbody in the Scene at the point
    // where it is clicked.    // The force with which the target is "poked" when hit.
    float pokeForce;    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            RaycastHit hit;
            var ray = Camera.main.ScreenPointToRay(Input.mousePosition);            if (Physics.Raycast(ray, out hit))
            {
                if (hit.rigidbody != null)
                {
                    hit.rigidbody.AddForceAtPosition(ray.direction * pokeForce, hit.point);
                }
            }
        }
    }
}
```





Additional resources: [Physics.Raycast](Physics.Raycast.html), [Physics.Linecast](Physics.Linecast.html).


            
