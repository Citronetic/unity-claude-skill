This version of Unity is unsupported.



# [Assert](Assertions.Assert.html).AreNotEqual




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

public static void AreNotEqual([Object](Object.html) expected,
[Object](Object.html) actual,
string message);






## Declaration

public static void AreNotEqual(sbyte expected,
sbyte actual);






## Declaration

public static void AreNotEqual(sbyte expected,
sbyte actual,
string message);






## Declaration

public static void AreNotEqual(byte expected,
byte actual);






## Declaration

public static void AreNotEqual(byte expected,
byte actual,
string message);






## Declaration

public static void AreNotEqual(char expected,
char actual);






## Declaration

public static void AreNotEqual(char expected,
char actual,
string message);






## Declaration

public static void AreNotEqual(short expected,
short actual);






## Declaration

public static void AreNotEqual(short expected,
short actual,
string message);






## Declaration

public static void AreNotEqual(ushort expected,
ushort actual);






## Declaration

public static void AreNotEqual(ushort expected,
ushort actual,
string message);






## Declaration

public static void AreNotEqual(int expected,
int actual);






## Declaration

public static void AreNotEqual(int expected,
int actual,
string message);






## Declaration

public static void AreNotEqual(uint expected,
uint actual);






## Declaration

public static void AreNotEqual(uint expected,
uint actual,
string message);






## Declaration

public static void AreNotEqual(long expected,
long actual);






## Declaration

public static void AreNotEqual(long expected,
long actual,
string message);






## Declaration

public static void AreNotEqual(ulong expected,
ulong actual);






## Declaration

public static void AreNotEqual(ulong expected,
ulong actual,
string message);






## Declaration

public static void AreNotEqual(T expected,
T actual);






## Declaration

public static void AreNotEqual(T expected,
T actual,
string message);






## Declaration

public static void AreNotEqual(T expected,
T actual,
string message,
IEqualityComparer<T> comparer);






### Parameters



| Parameter | Description |
| --- | --- |
| expected | The assumed Assert value. |
| actual | The exact Assert value. |
| message | The string used to describe the Assert. |
| comparer | Method to compare expected and actual arguments have the same value. |





### Description



Assert that the values are not equal.





Show message when the `expected` and `actual` are equal.


              


```
using UnityEngine;
using UnityEngine.Assertions;public class AssertionExampleClass : MonoBehaviour
{
    void Update()
    {
        // Make sure the Game Object's layer is never set to 0
        Assert.AreNotEqual(0, gameObject.layer);
    }
}
```





Another example:


              


```
using UnityEngine;
using UnityEngine.Assertions;// Assert.AreEqual and Assert.AreNotEqual example
//
// Compare 32 to 32. AreNotEqual prints message.
// Compare 32 to 33. AreEqual prints message.public class Example : MonoBehaviour
{
    void Start()
    {
        int expectedInt = 32;
        int actualInt = 32;        // Do not show message (32 is equal to 32).
        Assert.AreEqual(expectedInt, actualInt, "AreEqual: " + expectedInt + " equals " + actualInt);        // Show message (32 is equal to 32).
        Assert.AreNotEqual(expectedInt, actualInt, "AreNotEqual: " + expectedInt + " not equal to " + actualInt);        actualInt = 33;        // Show message (32 is not equal to 33).
        Assert.AreEqual(expectedInt, actualInt, "AreEqual: " + expectedInt + " equals " + actualInt);        // Do not show message (32 is not equal to 33).
        Assert.AreNotEqual(expectedInt, actualInt, "AreNotEqual: " + expectedInt + " not equal to " + actualInt);
    }
}
```


            
