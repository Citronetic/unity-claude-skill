This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).OnCollisionExit(Collision)




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
| collision | The Collision data associated with this collision. |





### Description



OnCollisionExit is called when this collider/rigidbody has stopped touching another rigidbody/collider.





`OnCollisionExit` receives an instance of the [Collision](Collision.html) class as the `collision` paramter. This parameter contains information about the collision such as contact points and impact velocity. If you don't use this collision data in your `OnCollisionExit` callback, leave out the `collision` parameter from the method declaration to avoid unneccessary calculations.

**Note:** Collision events are only sent if one of the colliders also has a non-kinematic rigidbody attached. Collision events are sent to disabled MonoBehaviours, to allow enabling Behaviours in response to collisions.

If one of the objects involved in the collision is destroyed before they separate, `OnCollisionExit` is not called. If your logic depends on `OnCollisionExit` being called whenever contact ends, including when an object is destroyed, you need to implement additional logic, such as handling cleanup in [MonoBehaviour.OnDestroy](MonoBehaviour.OnDestroy.html) or tracking destroyed objects manually.

`OnCollisionExit` can be a [coroutine](../Manual/Coroutines.html).


              


```
using UnityEngine;
using System.Collections;public class Example : MonoBehaviour
{
    void OnCollisionExit(Collision other)
    {
        print("No longer in contact with " + other.transform.name);
    }
}
```


            
