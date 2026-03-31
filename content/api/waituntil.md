This version of Unity is unsupported.



# WaitUntil





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



Suspends the coroutine execution until the supplied delegate evaluates to `true`.





`WaitUntil` can only be used with a `yield` statement in coroutines.

The supplied delegate is executed each frame after [MonoBehaviour.Update](MonoBehaviour.Update.html) and before [MonoBehaviour.LateUpdate](MonoBehaviour.LateUpdate.html). When the delegate evaluates to `true`, the coroutine resumes.

Additional resources: [AsyncOperation](AsyncOperation.html), [WaitForEndOfFrame](WaitForEndOfFrame.html), [WaitForFixedUpdate](WaitForFixedUpdate.html), [WaitForSeconds](WaitForSeconds.html), [WaitForSecondsRealtime](WaitForSecondsRealtime.html), [WaitWhile](WaitWhile.html).


              


```
using UnityEngine;
using System.Collections;public class WaitUntilExample : MonoBehaviour
{
    public int frame;    void Start()
    {
        StartCoroutine(Example());
    }    IEnumerator Example()
    {
        Debug.Log("Waiting for princess to be rescued...");
        yield return new WaitUntil(() => frame >= 10);
        Debug.Log("Princess was rescued!");
    }    void Update()
    {
        if (frame <= 10)
        {
            Debug.Log("Frame: " + frame);
            frame++;
        }
    }
}
```





### Constructors



| Constructor | Description |
| --- | --- |
| WaitUntil | Initializes a yield instruction with a given delegate to be evaluated. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| keepWaiting | Indicates if coroutine should be kept suspended. |












            
