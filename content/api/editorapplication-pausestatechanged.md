This version of Unity is unsupported.



# [EditorApplication](EditorApplication.html).pauseStateChanged




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



Event that is raised whenever the Editor's pause state changes.





Add an event handler to this event to receive a notification that the pause state has changed, as well as information about the state it has changed into.

Note that the Editor may be paused or unpaused in both edit mode and play mode, so you should test [isPlaying](EditorApplication-isPlaying.html) inside your event handler if you need to discriminate between these two conditions.

The following example script logs the Editor's pause state to the console whenever if changes. Copy it into a file called PauseStateChangedExample.cs and put it in a folder called Editor.


              


```
using UnityEngine;
using UnityEditor;// ensure class initializer is called whenever scripts recompile
[InitializeOnLoadAttribute]
public static class PauseStateChangedExample
{
    // register an event handler when the class is initialized
    static PauseStateChangedExample()
    {
        EditorApplication.pauseStateChanged += LogPauseState;
    }    private static void LogPauseState(PauseState state)
    {
        Debug.Log(state);
    }
}
```





Additional resources: [PauseState](PauseState.html), [EditorApplication.isPaused](EditorApplication-isPaused.html), [EditorApplication.playModeStateChanged](EditorApplication-playModeStateChanged.html).


            
