This version of Unity is unsupported.



# [RuntimePlatform](RuntimePlatform.html).PS4




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



In the player on the Playstation 4.





Additional resources: [RuntimePlatform](RuntimePlatform.html), [Platform dependent compilation](../Manual/platform-dependent-compilation.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        if (Application.platform == RuntimePlatform.PS4)
        {
            Debug.Log("Do something special here!");
        }
    }
}
```


            
