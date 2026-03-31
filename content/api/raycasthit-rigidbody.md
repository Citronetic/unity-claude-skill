This version of Unity is unsupported.



# [RaycastHit](RaycastHit.html).rigidbody




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












                    public [Rigidbody](Rigidbody.html) rigidbody;






### Description



The [Rigidbody](Rigidbody.html) of the collider that was hit. If the collider is not attached to a rigidbody then it is `null`.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Apply a force to a clicked rigidbody object.    // The force applied to an object when hit.
    float hitForce;    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            RaycastHit hit;
            Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);            if (Physics.Raycast(ray, out hit))
            {
                if (hit.rigidbody != null)
                {
                    hit.rigidbody.AddForce(ray.direction * hitForce);
                }
            }
        }
    }
}
```





Additional resources: [Physics.Raycast](Physics.Raycast.html), [Physics.Linecast](Physics.Linecast.html), [Physics.RaycastAll](Physics.RaycastAll.html).


            
