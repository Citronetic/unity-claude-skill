This version of Unity is unsupported.



# [Help](Help.html).HasHelpForObject




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

public static bool HasHelpForObject([Object](Object.html) obj);






### Description



Is there a help page for this object?





Additional resources: [Help.ShowHelpForObject](Help.ShowHelpForObject.html), [Help.GetHelpURLForObject](Help.GetHelpURLForObject.html).

[Image: image]

*Editor Window that lets you load docs for any Selected GameObject.*


              


```
using UnityEngine;
using UnityEditor;// EditorScript that quickly searchs for a help page
// of the selected Object.
//
// If there is no page found on the Manual it opens the Unity forum.class QuickHelper : EditorWindow
{
    Object source;    [@MenuItem("Example/QuickHelper _h")]
    static void Init()
    {
        EditorWindow window = EditorWindow.GetWindowWithRect(typeof(QuickHelper), new Rect(0, 0, 165, 100));
        window.Show();
    }    void OnGUI()
    {
        EditorGUILayout.BeginHorizontal();
        source = EditorGUILayout.ObjectField(source, typeof(Object));
        EditorGUILayout.EndHorizontal();        if (GUILayout.Button("Search!"))
        {
            if (source == null)
            {
                this.ShowNotification(new GUIContent("No object selected for searching"));
            }
            else
            {
                if (Help.HasHelpForObject(source))
                {
                    Help.ShowHelpForObject(source);
                }
                else
                {
                    Help.BrowseURL("http://forum.unity3d.com/search.php");
                }
            }
        }
    }
}
```


            
