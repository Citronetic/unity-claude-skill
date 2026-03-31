This version of Unity is unsupported.



# [Cloth](Cloth.html).useGravity




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




                [Switch to Manual](../Manual/class-Cloth.html)







                    public bool useGravity;






### Description



Should gravity affect the cloth simulation?


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Example()
    {
        // Dont use gravity on this cloth regardless if is Interactive or Skinned.
        transform.GetComponent<Cloth>().useGravity = false;
    }
}
```


            
