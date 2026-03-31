This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).BeginBuildTargetSelectionGrouping




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

public static [BuildTargetGroup](BuildTargetGroup.html) BeginBuildTargetSelectionGrouping();






### Description



Begin a build target grouping and get the selected BuildTargetGroup back.





[Image: image]


*Build Target Selection Group*


              


```
using UnityEditor;public class BuildTargetGroupExample : EditorWindow
{
    [MenuItem("Examples/Begin-End BuildTarget Grouping")]
    static void Init()
    {
        BuildTargetGroupExample window =
            (BuildTargetGroupExample)EditorWindow.GetWindow(typeof(BuildTargetGroupExample), true,
                "My Custom Editor Window");
        window.Show();
    }    void OnGUI()
    {
        BuildTargetGroup selectedBuildTargetGroup = EditorGUILayout.BeginBuildTargetSelectionGrouping();
        if (selectedBuildTargetGroup == BuildTargetGroup.Android)
        {
            EditorGUILayout.LabelField("Android specific things");
        }        if (selectedBuildTargetGroup == BuildTargetGroup.Standalone)
        {
            EditorGUILayout.LabelField("Standalone specific things");
        }        EditorGUILayout.EndBuildTargetSelectionGrouping();
    }
}
```


            
