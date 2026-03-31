This version of Unity is unsupported.



# Assert





class in
          UnityEngine.Assertions



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



















### Description



The Assert class contains assertion methods for setting invariants in the code.





All method calls will be conditionally included only in a development
      build, unless specified explicitly. See [BuildOptions.ForceEnableAssertions](BuildOptions.ForceEnableAssertions.html).
      The inclusion of an assertion is controlled by the `UNITY_ASSERTIONS` define.

      Assert throws exceptions whenever an assertion fails.

      If a debugger is attached to the project (System.Diagnostics.Debugger.IsAttached is true),
      [AssertionException](Assertions.AssertionException.html) is thrown to pause the execution and
      invoke the debugger.


              


```
using UnityEngine;
using UnityEngine.Assertions;public class AssertionExampleClass : MonoBehaviour
{
    public int health;
    public GameObject go;    void Update()
    {
        // You expect the health never to be equal to zero
        Assert.AreNotEqual(0, health);        // The referenced GameObject should be always (in every frame) be active
        Assert.IsTrue(go.activeInHierarchy);
    }
}
```





### Static Methods



| Method | Description |
| --- | --- |
| AreApproximatelyEqual | Assert the values are approximately equal. |
| AreEqual | Assert that the values are equal. |
| AreNotApproximatelyEqual | Asserts that the values are approximately not equal. |
| AreNotEqual | Assert that the values are not equal. |
| IsFalse | Return true when the condition is false.  Otherwise return false. |
| IsNotNull | Assert that the value is not null. |
| IsNull | Assert the value is null. |
| IsTrue | Asserts that the condition is true. |


            
