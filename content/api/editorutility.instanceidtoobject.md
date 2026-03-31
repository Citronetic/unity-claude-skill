This version of Unity is unsupported.



# [EditorUtility](EditorUtility.html).InstanceIDToObject




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

public static Object InstanceIDToObject(int instanceID);






### Description



Translates an instance ID to a reference to an object.





If the object is not loaded from disk, loads it from disk.

[Image: image]

*Editor Window to enter the instance ID and print the name of the object.*


              


```
using UnityEngine;
using UnityEditor;public class InstanceIDToObjectExample : EditorWindow
{
    static int id;    [MenuItem("Example/ID To Name")]
    static void Init()
    {
        // Get existing open window or if none, make a new one:
        InstanceIDToObjectExample window = (InstanceIDToObjectExample)EditorWindow.GetWindow(typeof(InstanceIDToObjectExample));
        window.Show();
    }    void OnGUI()
    {
        id = EditorGUILayout.IntField("Instance ID:", id);
        if (GUILayout.Button("Find Name"))
        {
            Object obj = EditorUtility.InstanceIDToObject(id);
            if (!obj)
                Debug.LogError("No object could be found with instance id: " + id);
            else
                Debug.Log("Object's name: " + obj.name);
        }
    }    void OnInspectorUpdate()
    {
        Repaint();
    }
}
```


            
