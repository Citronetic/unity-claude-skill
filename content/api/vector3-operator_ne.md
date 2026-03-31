This version of Unity is unsupported.



# [Vector3](Vector3.html).operator !=




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












                    public static bool operator !=([Vector3](Vector3.html) lhs,
[Vector3](Vector3.html) rhs);






### Description



Returns true if vectors are different.





Very close vectors are treated as being equal.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public Transform other;    void Example()
    {
        if (other && transform.position != other.position)
        {
            print("I'm at the different place than the other transform!");
        }
    }
}
```


            
