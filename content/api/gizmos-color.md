This version of Unity is unsupported.



# [Gizmos](Gizmos.html).color




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












                    public static [Color](Color.html) color;






### Description



Sets the [Color](Color.html) of the gizmos that are drawn next.





You can apply any color to gizmos. You can make a gizmo transparent by setting the alpha component of [Color](Color.html) to a value lower than 1. The following example shows how to create a red gizmo.


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    void OnDrawGizmosSelected()
    {
        // Draws a 5 unit long red line in front of the object
        Gizmos.color = Color.red;
        Vector3 direction = transform.TransformDirection(Vector3.forward) * 5;
        Gizmos.DrawRay(transform.position, direction);
    }
}
```


            
