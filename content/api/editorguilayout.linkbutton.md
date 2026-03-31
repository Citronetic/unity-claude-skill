This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).LinkButton




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

public static bool LinkButton(string label,
params GUILayoutOption[] options);






## Declaration

public static bool LinkButton([GUIContent](GUIContent.html) label,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| label | Label of the link. |
| options | An optional list of layout options that specify extra layout properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Returns



**bool**

          `true` when the user clicks the link.





### Description



Make a clickable link label.





The label has an hyperlink style and returns true when clicked.


              


```
using UnityEditor;
using UnityEngine;class EditorGUILayoutLinkButton : EditorWindow
{
    [MenuItem("Examples/EditorGUILayoutLinkButton")]
    static void Init()
    {
        var window = GetWindow<EditorGUILayoutLinkButton>();
        window.Show();
    }    void OnGUI()
    {
        if (EditorGUILayout.LinkButton("Link Button"))
            Debug.Log("Clicked");
    }
}
```


            
