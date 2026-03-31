This version of Unity is unsupported.



# [Object](Object.html).Destroy




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




                [Switch to Manual](../Manual/class-Object.html)










## Declaration

public static void Destroy([Object](Object.html) obj,
float t = 0.0F);






### Parameters



| Parameter | Description |
| --- | --- |
| obj | The object to destroy. |
| t | The optional amount of time to delay before destroying the object. |





### Description



Removes a GameObject, component, or asset.





Destroys the specified object. If a time delay (`t`) is specified, destruction occurs after t seconds have elapsed. The timer starts from the moment `Destroy` is called. Actual object destruction is always delayed until after the current Update loop, but always happens before rendering.

If the object is a component, only that component is removed and destroyed. If the object is a GameObject, the GameObject, all its components, and all its transform children are destroyed together.

Once `Destroy(obj, t)` is called, the object is scheduled for destruction after `t` seconds, regardless of whether the script component that called it is later disabled or destroyed.

`Destroy` is safe to call on objects that might already be destroyed or null. If the object is already destroyed before the scheduled time, no error is thrown when the timer expires. Unity’s internal system tracks the object's state and won't attempt to destroy it again.

The delay parameter `t` is affected by [Time.timeScale](Time-timeScale.html). If [Time.timeScale](Time-timeScale.html) is set to 0 (for example, if the game is paused), the destruction is delayed until time resumes.

Additional resources: [Object.DestroyImmediate](Object.DestroyImmediate.html)


              


```
using UnityEngine;public class ScriptExample : MonoBehaviour
{
    void DestroyGameObject()
    {
        Destroy(gameObject);
    }    void DestroyScriptInstance()
    {
        // Removes this script instance from the game object
        Destroy(this);
    }    void DestroyComponent()
    {
        // Removes the rigidbody from the game object
        Destroy(GetComponent<Rigidbody>());
    }    void DestroyObjectDelayed()
    {
        // Kills the game object in 5 seconds after loading the object
        Destroy(gameObject, 5);
    }    // When the user presses Ctrl, it will remove the
    // BoxCollider component from the game object
    void Update()
    {
        if (Input.GetButton("Fire1") && GetComponent<BoxCollider>())
        {
            Destroy(GetComponent<BoxCollider>());
        }
    }
}
```





Destroy is inherited from the UnityEngine.Object base class.


            
