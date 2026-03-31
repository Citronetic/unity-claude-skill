This version of Unity is unsupported.



# [Application](Application.html).wantsToQuit




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



Unity raises this event when the Player application wants to quit.





Add an event handler to this event to receive a notification that application is attempting to quit.

When this event is raised the quit process has started but can be cancelled. This means the player is not guaranteed to quit. For a guaranteed quit event take a look at [Application.quitting](Application-quitting.html).

Returns true and the quit process continues.
Returns false and the quit process cancels.

**Note**: The return value of this event is ignored when exiting Play mode in the Editor.

**Important**: The return value has no effect on iOS or iPadOS. The `Application.wantsToQuit` can't prevent termination in iOS or iPadOS.


              


```
using UnityEngine;public class PlayerWantsToQuitExample
{
    static bool WantsToQuit()
    {
        Debug.Log("Player prevented from quitting.");
        return false;
    }    [RuntimeInitializeOnLoadMethod]
    static void RunOnStart()
    {
        Application.wantsToQuit += WantsToQuit;
    }
}
```





Additional resources: [Application.quitting](Application-quitting.html).


            
