This version of Unity is unsupported.



# [GUISkin](GUISkin.html).scrollView




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




                [Switch to Manual](../Manual/class-GUISkin.html)







                    public [GUIStyle](GUIStyle.html) scrollView;






### Description



Style used by default for the background of ScrollView controls (see [GUI.BeginScrollView](GUI.BeginScrollView.html)).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Modifies only the background of the ScrollView controls
    // of the current GUISkin.    Vector2 scrollPosition = Vector2.zero;
    public GUIStyle style;    void OnGUI()
    {
        GUI.skin.scrollView = style;
        // rect and put it in a small rect on the screen.
        scrollPosition = GUI.BeginScrollView(new Rect(10, 300, 100, 100),
            scrollPosition, new Rect(0, 0, 220, 200));        // Make four buttons - one in each corner. The coordinate system is defined
        // by the last parameter to BeginScrollView.
        GUI.Button(new Rect(0, 0, 100, 20), "Top-left");
        GUI.Button(new Rect(120, 0, 100, 20), "Top-right");
        GUI.Button(new Rect(0, 180, 100, 20), "Bottom-left");
        GUI.Button(new Rect(120, 180, 100, 20), "Bottom-right");        // End the scroll view that we began above.
        GUI.EndScrollView();
    }
}
```


            
