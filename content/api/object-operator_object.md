This version of Unity is unsupported.



# [Object](Object.html).bool




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




                [Switch to Manual](../Manual/class-Object.html)














### Description



Does the object exist?





The three examples below give the same result.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // check if there is a rigidbody attached to this transform
    void Start()
    {
        if (GetComponent<Rigidbody>() == true)
        {
            Debug.Log("Rigidbody attached to this transform");
        }
    }
}
```





...is the same as this...


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // check if there is a rigidbody attached to this transform
    void Start()
    {
        if (GetComponent<Rigidbody>())
        {
            Debug.Log("Rigidbody attached to this transform");
        }
    }
}
```





...which is also the same as this...


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // check if there is a rigidbody attached to this transform
    void Start()
    {
        if (GetComponent<Rigidbody>() != null)
        {
            Debug.Log("Rigidbody attached to this transform");
        }
    }
}
```


            
