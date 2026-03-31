This version of Unity is unsupported.



# WaitForSecondsRealtime





class in
          UnityEngine



/



Inherits from:[CustomYieldInstruction](CustomYieldInstruction.html)



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



Suspends the coroutine execution for the specified real (unscaled) time in seconds.





`WaitForSecondsRealtime` can only be used with a `yield` statement in coroutines.

To wait using scaled time, refer to [WaitForSeconds](WaitForSeconds.html).


              


```
using UnityEngine;
using System.Collections;public class WaitForSecondsExample : MonoBehaviour
{
    void Start()
    {
        StartCoroutine(Example());
    }    IEnumerator Example()
    {
        print(Time.time);
        yield return new WaitForSecondsRealtime(5);
        print(Time.time);
    }
}
```





See Also [MonoBehaviour.StartCoroutine](MonoBehaviour.StartCoroutine.html).





### Properties



| Property | Description |
| --- | --- |
| waitTime | The given amount of seconds that the yield instruction will wait for. |





### Constructors



| Constructor | Description |
| --- | --- |
| WaitForSecondsRealtime | Creates a yield instruction to wait for a given number of seconds using unscaled time. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| keepWaiting | Indicates if coroutine should be kept suspended. |












            
