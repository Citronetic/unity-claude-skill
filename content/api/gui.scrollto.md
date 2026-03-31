This version of Unity is unsupported.



# [GUI](GUI.html).ScrollTo




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

public static void ScrollTo([Rect](Rect.html) position);






### Description



Scrolls all enclosing scrollviews so they try to make `position` visible.


              


```
// Draws a Scroll view with 2 buttons inside.
// When clicked each button it moves the scroll
// where the other button is locatedusing UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public Vector2 scrollPos = Vector2.zero;
    void OnGUI()
    {
        scrollPos = GUI.BeginScrollView(new Rect(10, 10, 100, 50), scrollPos, new Rect(0, 0, 220, 10));        if (GUI.Button(new Rect(0, 0, 100, 20), "Go Right"))
            GUI.ScrollTo(new Rect(120, 0, 100, 20));        if (GUI.Button(new Rect(120, 0, 100, 20), "Go Left"))
            GUI.ScrollTo(new Rect(0, 0, 100, 20));        GUI.EndScrollView();
    }
}
```


            
