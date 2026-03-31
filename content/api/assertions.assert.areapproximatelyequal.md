This version of Unity is unsupported.



# [Assert](Assertions.Assert.html).AreApproximatelyEqual




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

public static void AreApproximatelyEqual(float expected,
float actual);






## Declaration

public static void AreApproximatelyEqual(float expected,
float actual,
string message);






## Declaration

public static void AreApproximatelyEqual(float expected,
float actual,
float tolerance);






## Declaration

public static void AreApproximatelyEqual(float expected,
float actual,
float tolerance,
string message);






### Parameters



| Parameter | Description |
| --- | --- |
| tolerance | Tolerance of approximation. |
| expected | The assumed Assert value. |
| actual | The exact Assert value. |
| message | The string used to describe the Assert. |





### Description



Assert the values are approximately equal.





An absolute error check is used for approximate equality check (|a-b| < /tolerance/). Default `tolerance` is 0.00001f.

Note: Every time you call the method with tolerance specified, a new instance of [FloatComparer](Assertions.Comparers.FloatComparer.html) is created. For performance reasons you might want to instance your own comparer and pass it to the [AreApproximatelyEqual](Assertions.Assert.AreApproximatelyEqual.html) method. If the tolerance is not specifies, a default comparer is used and the issue does not occur.


              


```
using UnityEngine;
using UnityEngine.Assertions;public class AssertionExampleClass : MonoBehaviour
{
    void Update()
    {
        // Make sure the position of the GameObject is always in the center of the Scene.
        // AreApproximatelyEqual should be used for comparing floating point variables.
        // Unless specified, default error tolerance will be used.
        Assert.AreApproximatelyEqual(0.0f, transform.position.x);
        Assert.AreApproximatelyEqual(0.0f, transform.position.y);
        Assert.AreApproximatelyEqual(0.0f, transform.position.z);
    }
}
```


            
