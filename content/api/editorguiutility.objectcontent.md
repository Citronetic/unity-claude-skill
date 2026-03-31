This version of Unity is unsupported.



# [EditorGUIUtility](EditorGUIUtility.html).ObjectContent




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

public static [GUIContent](GUIContent.html) ObjectContent([Object](Object.html) obj,
Type type);






### Description



Return a GUIContent object with the name and icon of an Object.





If the object is null, the icon will be picked according to type.

[Image: image]

*Object Content usage.*


              


```
// Simple Editor Script that shows the icons of Transform,
// rigidbody and GameObject in 3 buttons.using UnityEditor;
using UnityEngine;public class ObjectContentExample : EditorWindow
{
    [MenuItem("Examples/ObjectContent usage")]
    static void Init()
    {
        ObjectContentExample window = (ObjectContentExample)GetWindow(typeof(ObjectContentExample));
        window.Show();
    }    void OnGUI()
    {
        EditorGUILayout.PrefixLabel("Select a type:");
        EditorGUILayout.BeginHorizontal();
        if (GUILayout.Button(EditorGUIUtility.ObjectContent(null, typeof(Transform)).image))
            DoSomething("Transform");
        if (GUILayout.Button(EditorGUIUtility.ObjectContent(null, typeof(Rigidbody)).image))
            DoSomething("RigidBody");
        if (GUILayout.Button(EditorGUIUtility.ObjectContent(null, typeof(GameObject)).image))
            DoSomething("GameObject");
        EditorGUILayout.EndHorizontal();        if (GUILayout.Button("Close"))
            this.Close();
    }    private void DoSomething(string obj)
    {
        Debug.Log("Hello there " + obj + "!");
    }
}
```


            
