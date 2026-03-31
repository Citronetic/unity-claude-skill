This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).OnApplicationQuit()




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




                [Switch to Manual](../Manual/class-MonoBehaviour.html)














### Description



Sent to all GameObjects before the application quits.





In the Editor, Unity calls `OnApplicationQuit` when exiting Play mode. It's called on all script components, even if the component is disabled.

Platform-specific considerations:



          - iOS applications suspend rather than quit, so `OnApplicationQuit` won't be called. Use [MonoBehaviour.OnApplicationPause](MonoBehaviour.OnApplicationPause.html) instead for handling app suspension and cleanup.

          - On Windows Store Apps and Windows Phone 8.1 there is no application quit event. Use the [MonoBehaviour.OnApplicationFocus](MonoBehaviour.OnApplicationFocus.html) for handling app loss of focus.

          - The Web platform doesn't support `OnApplicationQuit` because of the way browser tabs close. For a workaround, refer to [Interaction with browser scripting](../Manual/webgl-interactingwithbrowserscripting.html) in the manual.

          - If the user suspends your application on a mobile platform, the operating system can quit the application to free up resources. In this case, depending on the operating system, Unity might be unable to call this method. On mobile platforms, don't rely on this method to save the state of your application. Instead, consider every loss of application focus as the exit of the application and use [MonoBehaviour.OnApplicationFocus](MonoBehaviour.OnApplicationFocus.html) to save any data.




              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void OnApplicationQuit()
    {
        Debug.Log("Application ending after " + Time.time + " seconds");
    }
}
```


            
