This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).OnDrawGizmos()




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



Implement OnDrawGizmos if you want to draw gizmos that are also pickable and always drawn.





This allows you to quickly pick important objects in your Scene.

`OnDrawGizmos` uses a mouse position that is relative to the Scene View.

**Note**: If **Auto-hide gizmos** is enabled in the Scene View [preferences](../Manual/Preferences.html), then `OnDrawGizmos` is not called on components that are collapsed in the Inspector.

Use [MonoBehaviour.OnDrawGizmosSelected](MonoBehaviour.OnDrawGizmosSelected.html) to draw gizmos when the GameObject is selected.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void OnDrawGizmos()
    {
        // Draw a yellow sphere at the transform's position
        Gizmos.color = Color.yellow;
        Gizmos.DrawSphere(transform.position, 1);
    }
}
```





Additional resources: [OnDrawGizmosSelected](MonoBehaviour.OnDrawGizmosSelected.html).


            
