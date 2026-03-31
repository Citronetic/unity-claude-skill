This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).Popup




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

public static int Popup([Rect](Rect.html) position,
int selectedIndex,
string[] displayedOptions,
[GUIStyle](GUIStyle.html) style = EditorStyles.popup);






## Declaration

public static int Popup([Rect](Rect.html) position,
int selectedIndex,
GUIContent[] displayedOptions,
[GUIStyle](GUIStyle.html) style = EditorStyles.popup);






## Declaration

public static int Popup([Rect](Rect.html) position,
string label,
int selectedIndex,
string[] displayedOptions,
[GUIStyle](GUIStyle.html) style = EditorStyles.popup);






## Declaration

public static int Popup([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
int selectedIndex,
GUIContent[] displayedOptions,
[GUIStyle](GUIStyle.html) style = EditorStyles.popup);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the field. |
| label | Optional label in front of the field. |
| selectedIndex | The index of the option the field shows. |
| displayedOptions | An array with the options shown in the popup. |
| style | Optional GUIStyle. |





### Returns



**int**
        The index of the option that has been selected by the user.





### Description



Makes a generic popup selection field.





Takes the currently selected index as a parameter and returns the index selected by the user.

[Image: image]

*Popup in and Editor Window.*


              


```
using UnityEngine;
using UnityEditor;
// Adds a component to the selected GameObjectsclass EditorGUIPopup : EditorWindow
{
    string[] options = { "Rigidbody", "Box Collider", "Sphere Collider" };
    int index = 0;    [MenuItem("Examples/Editor GUI Popup usage")]
    static void Init()
    {
        var window = GetWindow<EditorGUIPopup>();
        window.position = new Rect(0, 0, 180, 80);
        window.Show();
    }    void OnGUI()
    {
        index = EditorGUI.Popup(
            new Rect(0, 0, position.width, 20),
            "Component:",
            index,
            options);        if (GUI.Button(new Rect(0, 25, position.width, position.height - 26), "Add Component"))
            AddComponentToObjects();
    }    void AddComponentToObjects()
    {
        if (!Selection.activeGameObject)
        {
            Debug.LogError("Please select at least one GameObject first");
            return;
        }        foreach (GameObject obj in Selection.gameObjects)
        {
            switch (index)
            {
                case 0:
                    obj.AddComponent<Rigidbody>();
                    break;                case 1:
                    obj.AddComponent<BoxCollider>();
                    break;                case 2:
                    obj.AddComponent<SphereCollider>();
                    break;
            }
        }
    }
}
```





**Note:** The `displayedOptions` lists an array of options.  When these elements contain "/" (slash characters) the elements are use for sub-menus.  The text to the left of the slashes determines the structure.


            
