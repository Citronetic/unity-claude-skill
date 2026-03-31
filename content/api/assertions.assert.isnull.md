This version of Unity is unsupported.



# [Assert](Assertions.Assert.html).IsNull




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

public static void IsNull([Object](Object.html) value,
string message);






## Declaration

public static void IsNull(T value);






## Declaration

public static void IsNull(T value,
string message);






### Parameters



| Parameter | Description |
| --- | --- |
| value | The Object or type being checked for. |
| message | The string used to describe the Assert. |





### Description



Assert the value is null.


              


```
using UnityEngine;
using UnityEngine.Assertions;public class AssertionExampleClass : MonoBehaviour
{
    MyClass myClassReference;    void Update()
    {
        // Make sure the myClassReference reference is never set
        Assert.IsNull(myClassReference);
    }
}public class MyClass {}
```


            
