This version of Unity is unsupported.



# [Collider](Collider.html).Raycast




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















## Declaration

public bool Raycast([Ray](Ray.html) ray,
out [RaycastHit](RaycastHit.html) hitInfo,
float maxDistance);






### Parameters



| Parameter | Description |
| --- | --- |
| ray | The starting point and direction of the ray. |
| hitInfo | If true is returned, hitInfo will contain more information about where the collider was hit. |
| maxDistance | The max length of the ray. |





### Returns



**bool**
        True when the ray intersects the collider, otherwise false.





### Description



Casts a [Ray](Ray.html) that ignores all Colliders except this one.





Additional resources: [RaycastHit](RaycastHit.html).


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public Collider coll;    void Start()
    {
        coll = GetComponent<Collider>();
    }    void Update()
    {
        // Move this object to the position clicked by the mouse.
        if (Input.GetMouseButtonDown(0))
        {
            Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            RaycastHit hit;            if (coll.Raycast(ray, out hit, 100.0f))
            {
                transform.position = ray.GetPoint(100.0f);
            }
        }
    }
}
```


            
