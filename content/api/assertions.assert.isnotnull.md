This version of Unity is unsupported.



# [Assert](Assertions.Assert.html).IsNotNull




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

public static void IsNotNull([Object](Object.html) value,
string message);






## Declaration

public static void IsNotNull(T value);






## Declaration

public static void IsNotNull(T value,
string message);






### Parameters



| Parameter | Description |
| --- | --- |
| value | The Object or type being checked for. |
| message | The string used to describe the Assert. |





### Description



Assert that the value is not null.


              


```
using UnityEngine;
using UnityEngine.Assertions;public class AssertionExampleClass : MonoBehaviour
{
    MyClass myClassReference;    void Update()
    {
        // Make sure the myClassReference reference is set
        Assert.IsNotNull(myClassReference);
    }
}public class MyClass {}
```


            
