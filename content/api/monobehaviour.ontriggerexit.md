This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).OnTriggerExit(Collider)




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
| other | The other collider involved in this collision. |





### Description



OnTriggerExit is called when a collider stops touching a trigger.





`OnTriggerExit` is called during whichever iteration of the physics `FixedUpdate` loop Unity detects that a collider is no longer touching a trigger it was previously touching.

Both GameObjects must contain a [Collider](Collider.html) component. At least one of the colliders must be a trigger collider and at least one must be a physics body collider. For more information, refer to [OnTrigger events](../Manual/collider-interactions-ontrigger.html).

Trigger events are sent to disabled MonoBehaviours, to allow enabling Behaviours in response to collisions. Deactivating or destroying a collider while it is inside a trigger volume does not cause an `OnTriggerExit` message to be sent.

Both the trigger and the collider that touches the trigger receive `OnTriggerEnter` if they have implemented it.

`OnTriggerExit` can be a coroutine.


              


```
// Destroy everything that leaves the triggerusing UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void OnTriggerExit(Collider other)
    {
        Destroy(other.gameObject);
    }
}
```


            
