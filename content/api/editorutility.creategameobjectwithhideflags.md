This version of Unity is unsupported.



# [EditorUtility](EditorUtility.html).CreateGameObjectWithHideFlags




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

public static [GameObject](GameObject.html) CreateGameObjectWithHideFlags(string name,
[HideFlags](HideFlags.html) flags,
params Type[] components);






### Description



Creates a game object with [HideFlags](HideFlags.html) and specified components.





This is very similar to creating a [GameObject](GameObject.html) the usual way, except it
sets the specified [HideFlags](HideFlags.html) immediately.

[Image: image]
*Editor Window that shows how does the example looks.*


              


```
using UnityEngine;
using UnityEditor;public class CreateGOHideFlagsExample : EditorWindow
{
    string objName = "GameObject";
    int instanceID = 0;
    bool create = true;
    GameObject go = null;
    bool hideHierarchy = false;    [MenuItem("Example/GameObject Flags")]
    static void Init()
    {
        // Get existing open window or if none, make a new one:
        CreateGOHideFlagsExample window = (CreateGOHideFlagsExample)EditorWindow.GetWindow(typeof(CreateGOHideFlagsExample));
        window.Show();
    }    void OnGUI()
    {
        create = EditorGUILayout.Toggle("Create a GO:", create);
        GUI.enabled = create;        objName = EditorGUILayout.TextField("GameObject Name:", objName);
        if (GUILayout.Button("Create"))
        {
            GameObject created = EditorUtility.CreateGameObjectWithHideFlags(objName,
                hideHierarchy ? HideFlags.HideInHierarchy : 0);            instanceID = created.GetInstanceID();
            Debug.Log("Created GameObject ID: " + instanceID);
        }        GUI.enabled = !create;        EditorGUILayout.BeginHorizontal();        instanceID = EditorGUILayout.IntField("Instance ID:", instanceID);        if (GUILayout.Button("Search & Update flags"))
        {
            go = null;
            go = EditorUtility.InstanceIDToObject(instanceID) as GameObject;
            if (go)
                go.hideFlags = hideHierarchy ? HideFlags.HideInHierarchy : 0;
        }        EditorGUILayout.EndHorizontal();        if (!go)
            EditorGUILayout.LabelField("Object: ", (go == null) ? "No object was found" : go.name);        GUI.enabled = true;
        hideHierarchy = EditorGUILayout.Toggle("HideInHierarchy", hideHierarchy);
    }    void OnInspectorUpdate()
    {
        Repaint();
    }
}
```


            
