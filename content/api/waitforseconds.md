This version of Unity is unsupported.



# WaitForSeconds





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



Suspends the coroutine execution for the specified scaled time in seconds.





[WaitForSeconds](WaitForSeconds.html) can only be used with a `yield` statement in coroutines.

The real time suspended is equal to the given time divided by [Time.timeScale](Time-timeScale.html). To wait using unscaled time, refer to [WaitForSecondsRealtime](WaitForSecondsRealtime.html).

The actual length of time waited might not match the time specified for the following reasons:



          - If you start `WaitForSeconds` with duration `t` in a long frame (for example, one which has a long operation which blocks the main thread such as some synchronous loading), the coroutine resumes `t` seconds after the end of the frame rather than `t` seconds after it was called.

          - The coroutine might resume on the first frame after `t` seconds has passed rather than immediately after `t` seconds has passed.




              


```
using UnityEngine;
using System.Collections;public class WaitForSecondsExample : MonoBehaviour
{
    void Start()
    {
        //Start the coroutine we define below named ExampleCoroutine.
        StartCoroutine(ExampleCoroutine());
    }    IEnumerator ExampleCoroutine()
    {
        //Print the time of when the function is first called.
        Debug.Log("Started Coroutine at timestamp : " + Time.time);        //yield on a new YieldInstruction that waits for 5 seconds.
        yield return new WaitForSeconds(5);        //After we have waited 5 seconds print the time again.
        Debug.Log("Finished Coroutine at timestamp : " + Time.time);
    }
}
```





Additional resources: [MonoBehaviour.StartCoroutine](MonoBehaviour.StartCoroutine.html), [AsyncOperation](AsyncOperation.html), [WaitForEndOfFrame](WaitForEndOfFrame.html), [WaitForFixedUpdate](WaitForFixedUpdate.html), [WaitForSecondsRealtime](WaitForSecondsRealtime.html), [WaitUntil](WaitUntil.html), [WaitWhile](WaitWhile.html).





### Constructors



| Constructor | Description |
| --- | --- |
| WaitForSeconds | Suspends the coroutine execution for the given amount of seconds using scaled time. |





### Inherited Members














            
