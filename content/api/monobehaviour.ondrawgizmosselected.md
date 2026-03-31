This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).OnDrawGizmosSelected()




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



Implement [OnDrawGizmosSelected](MonoBehaviour.OnDrawGizmosSelected.html) to draw a gizmo if the object is selected.





[Gizmos](Gizmos.html) are drawn only when the object is selected. Gizmos are not pickable.
This is used to ease setup. For example an explosion script could draw a sphere
showing the explosion radius.


              


```
using UnityEngine;public class GizmoTest : MonoBehaviour
{
    public float explosionRadius = 5.0f;    void OnDrawGizmosSelected()
    {
        // Display the explosion radius when selected
        Gizmos.color = new Color(1, 1, 0, 0.75F);
        Gizmos.DrawSphere(transform.position, explosionRadius);
    }
}
```





Additional resources: [OnDrawGizmos](MonoBehaviour.OnDrawGizmos.html).


            
