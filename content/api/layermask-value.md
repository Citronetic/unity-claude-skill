This version of Unity is unsupported.



# [LayerMask](LayerMask.html).value




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












                    public int value;






### Description



Converts a layer mask value to an integer value.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Casts a ray using the layer mask,
    // which can be modified in the inspector.    LayerMask mask = -1;
    void Update()
    {
        if (Physics.Raycast(transform.position, transform.forward, 100, mask.value))
        {
            Debug.Log("Hit something");
        }
    }
}
```


            
