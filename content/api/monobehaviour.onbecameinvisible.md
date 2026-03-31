This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).OnBecameInvisible()




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



Called when the renderer is no longer visible to any camera.





This message is sent to all scripts attached to the renderer. [OnBecameVisible](MonoBehaviour.OnBecameVisible.html) and [OnBecameInvisible](MonoBehaviour.OnBecameInvisible.html) are useful to avoid computations that are only necessary when the object is visible.

The Scene view camera in the Unity Editor is treated like a regular camera for visibility checks, so `OnBecameInvisible` can be called when objects are visible in the Scene view, even if the application isn't running. Scripts that execute in Edit mode can check [Application.isPlaying](Application-isPlaying.html) before running important logic in `OnBecameInvisible` to avoid unintended behavior in the Editor.

`OnBecameInvisible` can be a [coroutine](../Manual/Coroutines.html).


              


```
// Disables the behaviour when it is invisibleusing UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void OnBecameInvisible()
    {
        enabled = false;
    }
}
```


            
