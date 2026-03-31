This version of Unity is unsupported.



# [EditorApplication](EditorApplication.html).playModeStateChanged




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



Event that is raised whenever the Editor's play mode state changes.





Add an event handler to this event to receive a notification that the play mode state has changed, as well as information about the state it has changed into.

The following example script logs the Editor's play mode state to the console whenever if changes. Copy it into a file called PlayModeStateChangedExample.cs and put it in a folder called Editor.


              


```
using UnityEngine;
using UnityEditor;// ensure class initializer is called whenever scripts recompile
[InitializeOnLoadAttribute]
public static class PlayModeStateChangedExample
{
    // register an event handler when the class is initialized
    static PlayModeStateChangedExample()
    {
        EditorApplication.playModeStateChanged += LogPlayModeState;
    }    private static void LogPlayModeState(PlayModeStateChange state)
    {
        Debug.Log(state);
    }
}
```





Additional resources: [PlayModeStateChange](PlayModeStateChange.html), [EditorApplication.isPlaying](EditorApplication-isPlaying.html), [EditorApplication.pauseStateChanged](EditorApplication-pauseStateChanged.html).


            
