This version of Unity is unsupported.



# [Rigidbody](Rigidbody.html).angularDamping




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




                [Switch to Manual](../Manual/class-Rigidbody.html)







                    public float angularDamping;






### Description



The angular damping of the object.





Angular damping can be used to slow down the rotation of an object.
The higher the damping the more the rotation slows down.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public Rigidbody rb;    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }    // Get a wild spin under control when the user
    // presses the spacebar.
    void Update()
    {
        if (Input.GetKeyDown("space"))
            rb.angularDamping = 0.8F;
        else
            rb.angularDamping = 0;
    }
}
```


            
