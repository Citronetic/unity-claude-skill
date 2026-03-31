This version of Unity is unsupported.



# [EditorUtility](EditorUtility.html).DisplayProgressBar




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

public static void DisplayProgressBar(string title,
string info,
float progress);






### Description



Displays or updates a progress bar.





The window title will be set to `title` and the info will be set to `info`.
Progress should be set to a value between 0.0 and 1.0, where 0 means nothing done and 1.0 means 100% completed.

This is useful when you perform a long blocking operation in an Editor script, and want to notify the user about the progress.
Use this method for long operations that make the editor non-responsive. For long operations that happen in the background, use the [Progress](Progress.html) class instead.

After you display the progress bar, clear it using [ClearProgressBar](EditorUtility.ClearProgressBar.html).

Additional resources: [DisplayCancelableProgressBar](EditorUtility.DisplayCancelableProgressBar.html), [ClearProgressBar](EditorUtility.ClearProgressBar.html) methods, [Progress](Progress.html) class.

[Image: image]

*Progress bar in the Editor.*


              


```
using System.Threading;
using UnityEditor;
using UnityEngine;// Shows a progress bar for the specified number of seconds.
public class EditorUtilityDisplayProgressBar : EditorWindow
{
    public float secs = 5f;
    [MenuItem("Examples/Progress Bar Usage")]
    static void Init()
    {
        var window = GetWindow(typeof(EditorUtilityDisplayProgressBar));
        window.Show();
    }    void OnGUI()
    {
        secs = EditorGUILayout.Slider("Time to wait:", secs, 1.0f, 20.0f);
        if (GUILayout.Button("Display bar"))
        {
            var step = 0.1f;
            for (float t = 0; t < secs; t += step)
            {
                EditorUtility.DisplayProgressBar("Simple Progress Bar", "Doing some work...", t / secs);
                // Normally, some computation happens here.
                // This example uses Sleep.
                Thread.Sleep((int)(step * 1000.0f));
            }
            EditorUtility.ClearProgressBar();
        }
    }
}
```


            
