This version of Unity is unsupported.



# Ray Constructor




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















## Declaration

public Ray([Vector3](Vector3.html) origin,
[Vector3](Vector3.html) direction);






### Description



Creates a ray starting at `origin` along `direction`.


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        // Create a ray from the transform position along the transform's z-axis
        Ray ray = new Ray(transform.position, transform.forward);
    }
}
```


            
