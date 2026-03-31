This version of Unity is unsupported.



# [EditorUtility](EditorUtility.html).CollectDependencies




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

public static Object[] CollectDependencies(Object[] roots);






### Description



Calculates and returns a list of all assets the assets listed in `roots` depend on.





[Image: image]


*Editor window that shows the next example.*


              


```
using UnityEngine;
using UnityEditor;public class CollectDependenciesExample : EditorWindow
{
    static GameObject obj = null;
    [MenuItem("Example/Collect Dependencies")]
    static void Init()
    {
        // Get existing open window or if none, make a new one:
        CollectDependenciesExample window = (CollectDependenciesExample)EditorWindow.GetWindow(typeof(CollectDependenciesExample));
        window.Show();
    }    void OnGUI()
    {
        obj = EditorGUI.ObjectField(new Rect(3, 3, position.width - 6, 20), "Find Dependency", obj, typeof(GameObject)) as GameObject;        if (obj)
        {
            Object[] roots = new Object[] { obj };            if (GUI.Button(new Rect(3, 25, position.width - 6, 20), "Check Dependencies"))
                Selection.objects = EditorUtility.CollectDependencies(roots);
        }
        else
            EditorGUI.LabelField(new Rect(3, 25, position.width - 6, 20), "Missing:", "Select an object first");
    }    void OnInspectorUpdate()
    {
        Repaint();
    }
}
```


            
