This version of Unity is unsupported.



# [Assert](Assertions.Assert.html).IsFalse




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

public static void IsFalse(bool condition);






## Declaration

public static void IsFalse(bool condition,
string message);






### Parameters



| Parameter | Description |
| --- | --- |
| condition | true or false. |
| message | The string used to describe the result of the Assert. |





### Description



Return `true` when the condition is false.  Otherwise return `false`.


              


```
using UnityEngine;
using UnityEngine.Assertions;public class AssertionExampleClass : MonoBehaviour
{
    GameObject go;    void Update()
    {
        // Make sure the Game Object is never in active state
        Assert.IsFalse(go.activeSelf);
    }
}
```


            
