This version of Unity is unsupported.



# [Vector3](Vector3.html).operator +




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












                    public static [Vector3](Vector3.html) operator +([Vector3](Vector3.html) a,
[Vector3](Vector3.html) b);






### Parameters



| Parameter | Description |
| --- | --- |
| a | The left operand of the addition. |
| b | The right operand of the addition. |





### Returns



**Vector3**
        A Vector3 initialized with the component-wise sum of the left and right operands.





### Description



Adds two three-dimensional vectors with component-wise addition.





Adds corresponding x,y,z components of the left and right Vector3 operands and returns a Vector3 initialized with those component sums as the result.


              


```
// prints (5.0,7.0,9.0)using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        print(new Vector3(1, 2, 3) + new Vector3(4, 5, 6));
    }
}
```


            
