This version of Unity is unsupported.



# [Collider](Collider.html).isTrigger




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












                    public bool isTrigger;






### Description



Specify if this collider is configured as a trigger.





A trigger doesn't register a collision with an incoming [Rigidbody](Rigidbody.html). Instead, it sends [OnTriggerEnter](Collider.OnTriggerEnter.html), [OnTriggerExit](Collider.OnTriggerExit.html) and [OnTriggerStay](Collider.OnTriggerStay.html) message
when a rigidbody enters or exits the trigger volume.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    Collider m_ObjectCollider;    void Start()
    {
        //Fetch the GameObject's Collider (make sure they have a Collider component)
        m_ObjectCollider = GetComponent<Collider>();
        //Here the GameObject's Collider is not a trigger
        m_ObjectCollider.isTrigger = false;
        //Output whether the Collider is a trigger type Collider or not
        Debug.Log("Trigger On : " + m_ObjectCollider.isTrigger);
    }    void OnMouseDown()
    {
        //GameObject's Collider is now a trigger Collider when the GameObject is clicked. It now acts as a trigger
        m_ObjectCollider.isTrigger = true;
        //Output to console the GameObject’s trigger state
        Debug.Log("Trigger On : " + m_ObjectCollider.isTrigger);
    }
}
```


            
