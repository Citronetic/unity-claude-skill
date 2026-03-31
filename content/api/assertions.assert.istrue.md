This version of Unity is unsupported.



# [Assert](Assertions.Assert.html).IsTrue




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

public static void IsTrue(bool condition);






## Declaration

public static void IsTrue(bool condition,
string message);






### Parameters



| Parameter | Description |
| --- | --- |
| message | The string used to describe the Assert. |
| condition | true or false. |





### Description



Asserts that the condition is true.


              


```
using UnityEngine;
using UnityEngine.Assertions;public class AssertionExampleClass : MonoBehaviour
{
    int i = 0;    void Update()
    {
        // announce if i is larger than zero
        Assert.IsTrue(i > 0);        // announce if i is zero
        Assert.IsFalse(i == 0);
    }
}
```


            
