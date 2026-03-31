This version of Unity is unsupported.



# WaitForFixedUpdate





class in
          UnityEngine



/



Inherits from:[YieldInstruction](YieldInstruction.html)



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



Suspends coroutine execution until the next fixed update.





`WaitForFixedUpdate` can only be used with a `yield` statement in coroutines.

Additional resources: [AsyncOperation](AsyncOperation.html), [WaitForEndOfFrame](WaitForEndOfFrame.html), [WaitForSeconds](WaitForSeconds.html), [WaitForSecondsRealtime](WaitForSecondsRealtime.html), [WaitUntil](WaitUntil.html), [WaitWhile](WaitWhile.html).


              


```
using System.Collections;
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    public void Start()
    {
        StartCoroutine(Example_WaitForFixedUpdate_Coroutine());
    }    public IEnumerator Example_WaitForFixedUpdate_Coroutine()
    {
        Debug.Log("Start of WaitForFixedUpdate Example");

        yield return new WaitForFixedUpdate();

        Debug.Log("End of WaitForFixedUpdate Example");
    }
}
```





### Inherited Members














            
