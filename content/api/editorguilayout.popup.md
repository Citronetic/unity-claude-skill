This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).Popup




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

public static int Popup(int selectedIndex,
string[] displayedOptions,
params GUILayoutOption[] options);






## Declaration

public static int Popup(int selectedIndex,
string[] displayedOptions,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static int Popup(int selectedIndex,
GUIContent[] displayedOptions,
params GUILayoutOption[] options);






## Declaration

public static int Popup(int selectedIndex,
GUIContent[] displayedOptions,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static int Popup(string label,
int selectedIndex,
string[] displayedOptions,
params GUILayoutOption[] options);






## Declaration

public static int Popup(string label,
int selectedIndex,
string[] displayedOptions,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static int Popup([GUIContent](GUIContent.html) label,
int selectedIndex,
GUIContent[] displayedOptions,
params GUILayoutOption[] options);






## Declaration

public static int Popup([GUIContent](GUIContent.html) label,
int selectedIndex,
GUIContent[] displayedOptions,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| label | Optional label in front of the field. |
| selectedIndex | The index of the option the field shows. |
| displayedOptions | An array with the options shown in the popup. Use a slash to separate sub-items (ex. Menu/SubMenu). Use null or an empty string to add a separator. " |
| style | Optional GUIStyle. |
| options | An optional list of layout options that specify extra layout properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Returns



**int**
        The index of the option that has been selected by the user.





### Description



Make a generic popup selection field.





Takes the currently selected index as a parameter and returns the index selected by the user.

[Image: image]

*Create a primitive depending on the option selected.*


              


```
using UnityEditor;
using UnityEngine;
using System.Collections;// Creates an instance of a primitive depending on the option selected by the user.
public class EditorGUILayoutPopup : EditorWindow
{
    public string[] options = new string[] {"Cube", "Sphere", "Plane"};
    public int index = 0;
    [MenuItem("Examples/Editor GUILayout Popup usage")]
    static void Init()
    {
        EditorWindow window = GetWindow(typeof(EditorGUILayoutPopup));
        window.Show();
    }    void OnGUI()
    {
        index = EditorGUILayout.Popup(index, options);
        if (GUILayout.Button("Create"))
            InstantiatePrimitive();
    }    void InstantiatePrimitive()
    {
        switch (index)
        {
            case 0:
                GameObject cube = GameObject.CreatePrimitive(PrimitiveType.Cube);
                cube.transform.position = Vector3.zero;
                break;
            case 1:
                GameObject sphere = GameObject.CreatePrimitive(PrimitiveType.Sphere);
                sphere.transform.position = Vector3.zero;
                break;
            case 2:
                GameObject plane = GameObject.CreatePrimitive(PrimitiveType.Plane);
                plane.transform.position = Vector3.zero;
                break;
            default:
                Debug.LogError("Unrecognized Option");
                break;
        }
    }
}
```


            
