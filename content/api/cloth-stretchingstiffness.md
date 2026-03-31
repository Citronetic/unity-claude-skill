This version of Unity is unsupported.



# [Cloth](Cloth.html).stretchingStiffness




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







                    public float stretchingStiffness;






### Description



Stretching stiffness of the cloth.





Must be greater than zero and smaller or equal to one.

In many cases, when you want a cloth to be more stiff, actually reducing the number of vertices
will get you better results - and performance.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        GetComponent<Cloth>().stretchingStiffness = 1;
    }
}
```


            
