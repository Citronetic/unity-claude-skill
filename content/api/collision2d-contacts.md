This version of Unity is unsupported.



# [Collision2D](Collision2D.html).contacts




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












                    public ContactPoint2D[] contacts;






### Description



The specific points of contact with the incoming Collider2D. You should avoid using this as it produces memory garbage. Use [GetContact](Collision2D.GetContact.html) or [GetContacts](Collision2D.GetContacts.html) instead.





Additional resources: [Collider2D](Collider2D.html) class.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public GameObject explosion;    void OnCollisionEnter2D(Collision2D coll)
    {
        // If a missile hits this object
        if (coll.transform.tag == "Missile")
        {
            Debug.Log("HIT!");            // Spawn an explosion at each point of contact
            foreach (ContactPoint2D missileHit in coll.contacts)
            {
                Vector2 hitPoint = missileHit.point;
                Instantiate(explosion, new Vector3(hitPoint.x, hitPoint.y, 0), Quaternion.identity);
            }
        }
    }
}
```


            
