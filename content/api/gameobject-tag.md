This version of Unity is unsupported.



# [GameObject](GameObject.html).tag




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




                [Switch to Manual](../Manual/class-GameObject.html)







                    public string tag;






### Description



The tag assigned to the GameObject.





A tag can be used to identify a GameObject.
Tags must be declared in the [Tags and Layers manager](../Manual/class-TagManager.html) before using them.

**Note:** Do not set a tag from [Awake()](MonoBehaviour.Awake.html) or [OnValidate()](MonoBehaviour.OnValidate.html). The order in which `Awake` is called is not deterministic between components and a tag can be overwritten when its `Awake` is called. If you do this, Unity generates the warning `SendMessage cannot be called during Awake, CheckConsistency, or OnValidate`.

The example below sets the current GameObject's tag to "Player" and then implements [MonoBehaviour.OnTriggerEnter](MonoBehaviour.OnTriggerEnter.html) to check if the [Collider](Collider.html) on the other object involved in a collision with this object is tagged "Enemy".


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        //Set the tag of this GameObject to Player
        gameObject.tag = "Player";
    }    private void OnTriggerEnter(Collider other)
    {
        //Check if the collider of the other GameObject involved in the collision is tagged "Enemy"
        if (other.tag == "Enemy")
        {
            Debug.Log("Triggered by Enemy");
        }
    }
}
```





Additional resources: [GameObject.CompareTag](GameObject.CompareTag.html), [MonoBehaviour](MonoBehaviour.html)


            
