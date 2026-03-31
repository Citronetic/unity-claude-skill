This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).OnTriggerEnter(Collider)




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



Called when a collider enters a trigger collider.





`OnTriggerEnter` is called on whichever iteration of the physics `FixedUpdate` loop Unity first detects that the collider has entered the trigger. The colliders involved are not always at the point of initial contact when Unity detects the collision.

Both GameObjects must contain a [Collider](Collider.html) component. At least one of the colliders must be a trigger collider and at least one must be a physics body collider. For more information, refer to [OnTrigger events](../Manual/collider-interactions-ontrigger.html).

Both the trigger and the collider that touches the trigger receive `OnTriggerEnter` if they have implemented it. Trigger events are sent to disabled MonoBehaviours to allow enabling Behaviours in response to collisions.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    private float speed = 2f;    //Moves this GameObject 2 units a second in the forward direction
    void Update()
    {
        transform.Translate(Vector3.forward * Time.deltaTime * speed);
    }    //Upon collision with another GameObject, this GameObject will reverse direction
    private void OnTriggerEnter(Collider other)
    {
        speed = speed * -1;
    }
}
```


            
