This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).LinkButton




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

public static bool LinkButton([Rect](Rect.html) position,
string label);






## Declaration

public static bool LinkButton([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the control. The underline is done with the bottom border so set the size accordingly. |
| label | Label of the link. |





### Returns



**bool**

          `true` when the user clicks the link.





### Description



Make a clickable link label.





The label has an hyperlink style and returns true when clicked.


              


```
using UnityEditor;
using UnityEngine;
class EditorGUILinkButton : EditorWindow
{
    [MenuItem("Examples/EditorGUILinkButton")]
    static void Init()
    {
        var window = GetWindow<EditorGUILinkButton>();
        window.Show();
    }    void OnGUI()
    {
        var label = new GUIContent("Link Button");
        var size = EditorStyles.linkLabel.CalcSize(label);
        if (EditorGUI.LinkButton(new Rect(50, 50, size.x, size.y), label))
            Debug.Log("Clicked");
    }
}
```


            
