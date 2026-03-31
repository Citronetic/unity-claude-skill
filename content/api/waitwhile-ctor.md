This version of Unity is unsupported.



# WaitWhile Constructor




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

public WaitWhile(Func<bool> predicate);






### Parameters



| Parameter | Description |
| --- | --- |
| predicate | The supplied delegate will be evaluated each frame after MonoBehaviour.Update and before MonoBehaviour.LateUpdate until delegate returns false. |





### Description



Initializes a yield instruction with a given delegate to be evaluated.




---








## Declaration

public WaitWhile(Func<bool> predicate,
TimeSpan timeout,
[Unity.Android.Gradle.Manifest.Action](Unity.Android.Gradle.Manifest.Action.html) onTimeout,
[WaitTimeoutMode](WaitTimeoutMode.html) timeoutMode);






### Parameters



| Parameter | Description |
| --- | --- |
| predicate | The supplied delegate will be evaluated each frame after MonoBehaviour.Update and before MonoBehaviour.LateUpdate until delegate returns false. |
| timeout | Maximum time to wait after creation of the instance for the predicate to return false. |
| onTimeout | The action to perform when the timeout is reached. Only performed if the predicate fails to return false before the maximum time specified. |
| timeoutMode | Mode in which to measure time to determine timeout. Real time by default. Can be set to in-game time, which is scaled according to the value of Time.timeScale. |





### Description



Initializes a yield instruction with a given delegate to be evaluated.


              


```
using UnityEngine;
using System;
using System.Collections;public class WaitWhileExample : MonoBehaviour
{
    public bool buttonPressed;    void Start()
    {
        StartCoroutine(Example());
    }    IEnumerator Example()
    {
        Debug.Log("Waiting for button to be pressed...");
        yield return new WaitWhile(() => !buttonPressed, TimeSpan.FromSeconds(3), () => Debug.Log("button was not pressed in time!"));
    }
}
```


            
