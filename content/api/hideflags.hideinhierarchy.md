This version of Unity is unsupported.



# [HideFlags](HideFlags.html).HideInHierarchy




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



















### Description



The object will not appear in the hierarchy.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Creates 5 planes and hides them from the Hierarchy in the Editor.    void Start()
    {
        for (int i = 0; i < 5; i++)
        {
            GameObject createdGO = GameObject.CreatePrimitive(PrimitiveType.Plane);
            createdGO.hideFlags = HideFlags.HideInHierarchy;
        }
    }
}
```


            
