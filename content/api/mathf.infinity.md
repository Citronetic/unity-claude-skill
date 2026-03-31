This version of Unity is unsupported.



# [Mathf](Mathf.html).Infinity




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




                [Switch to Manual](../Manual/class-Mathf.html)







                    public static float Infinity;






### Description



A representation of positive infinity (Read Only).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Casts a ray from (0,0,0) towards (0,0,1) to the infinity and prints a message
    // if any object has touched the ray.
    // To test it, just place any object and intersect it with the white drawn line    void Update()
    {
        // shows the line that follows the ray.
        Debug.DrawLine(Vector3.zero, Vector3.forward * 100);
        if (Physics.Raycast(Vector3.zero, Vector3.forward, Mathf.Infinity))
        {
            print("There is something in front of the object!");
        }
    }
}
```


            
