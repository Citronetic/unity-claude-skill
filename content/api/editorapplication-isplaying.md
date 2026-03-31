This version of Unity is unsupported.



# [EditorApplication](EditorApplication.html).isPlaying




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












                    public static bool isPlaying;






### Description



Whether the Editor is in Play mode.





Returns true if the Editor is in Play mode. Setting [isPlaying](EditorApplication-isPlaying.html) delays the result until after all script code has completed for this frame.
                This also returns true if the Editor is paused.

Additional resources: [isPaused](EditorApplication-isPaused.html), [isPlayingOrWillChangePlaymode](EditorApplication-isPlayingOrWillChangePlaymode.html).


              


```
using UnityEngine;
using UnityEditor;// The following is a simple example where EditorApplication.isPlaying is watched to
// report whether the Editor is in Play mode.public class EditorPlaying : EditorWindow
{
    [MenuItem("Examples/EditorApplication.isPlaying demo")]
    static void Init()
    {
        EditorWindow window = GetWindow(typeof(EditorPlaying));
        window.position = new Rect(100, 100, 150, 50);
        window.Show();
    }    void OnGUI()
    {
        if (EditorApplication.isPlaying)
        {
            EditorGUILayout.LabelField("Playing");
        }
        else
        {
            EditorGUILayout.LabelField("Not playing");
        }
    }
}
```


            
