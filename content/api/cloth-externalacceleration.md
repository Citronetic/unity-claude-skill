This version of Unity is unsupported.



# [Cloth](Cloth.html).externalAcceleration




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







                    public [Vector3](Vector3.html) externalAcceleration;






### Description



A constant, external acceleration applied to the cloth.





Use this to simulate constant forces on the cloth, such as wind waving a flag.
Additional resources: [Cloth.randomAcceleration](Cloth-randomAcceleration.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Make this cloth fall at half speed (if is affected by gravity).
    void Start()
    {
        GetComponent<Cloth>().externalAcceleration =  -Physics.gravity / 2;
    }
}
```


            
