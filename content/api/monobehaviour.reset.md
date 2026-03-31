This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).Reset()




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














### Description



Reset a component to default values.





Reset is called when you select **Reset** in the Inspector's context menu or when you add a component for the first time, either by dragging and dropping in the Inspector or by calling [GameObject.AddComponent](GameObject.AddComponent.html) from an Editor script.

Reset is most commonly used to give good default values in the Inspector.

**Note**: `Reset` is only called in Edit mode. If you add components at runtime, `Reset` won't be called.


              


```
// Sets target to a default value.
// This could be used in a follow camera.using UnityEngine;public class Example : MonoBehaviour
{
    public GameObject target;    void Reset()
    {
        //Output the message to the Console
        Debug.Log("Reset");
        if (!target)
            target = GameObject.FindWithTag("Player");
    }
}
```


            
