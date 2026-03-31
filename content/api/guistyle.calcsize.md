This version of Unity is unsupported.



# [GUIStyle](GUIStyle.html).CalcSize




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




                [Switch to Manual](../Manual/class-GUIStyle.html)










## Declaration

public [Vector2](Vector2.html) CalcSize([GUIContent](GUIContent.html) content);






### Description



Calculate the size of some content if it is rendered with this style.





This function does not take word wrapping into account. To do that, you
        need to determine the allocated width and then call [CalcHeight](GUIStyle.CalcHeight.html) to figure out
        the word wrapped height.


              


```
// Example for the GUIStyle.CalcSizeusing UnityEngine;public class CalcSizeExample : MonoBehaviour
{
    string s;    void Start()
    {
        s = "A string for GUIContent()";
    }    void OnGUI()
    {
        GUIContent content = new GUIContent(s);        GUIStyle style = GUI.skin.box;
        style.alignment = TextAnchor.MiddleCenter;        // Compute how large the button needs to be.
        Vector2 size = style.CalcSize(content);        // make the Box double sized
        GUI.Box(new Rect(10.0f, 10.0f, 2.0f * size.x, 2.0f * size.y), s);
    }
}
```


            
