This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).OnTriggerStay(Collider)




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




                [Switch to Manual](../Manual/class-MonoBehaviour.html)














### Parameters



| Parameter | Description |
| --- | --- |
| other | The other Collider involved in this collision. |





### Description



Called once per physics update for every collider that is touching the trigger.





`OnTriggerStay` is called on every physics update while a collider remains touching the trigger.

Both GameObjects must contain a [Collider](Collider.html) component. At least one of the colliders must be a trigger collider and at least one must be a physics body collider. For more information, refer to [OnTrigger events](../Manual/collider-interactions-ontrigger.html).

Both the trigger and the collider that touches the trigger receive `OnTriggerEnter` if they have implemented it. Trigger events are sent to disabled MonoBehaviours to allow enabling Behaviours in response to collisions.


              


```
// Applies an upwards force to all rigidbodies that enter the trigger.using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void OnTriggerStay(Collider other)
    {
        if (other.attachedRigidbody)
        {
            other.attachedRigidbody.AddForce(Vector3.up * 10);
        }
    }
}
```





OnTriggerStay can be a co-routine, simply use the yield statement in the function.


            
