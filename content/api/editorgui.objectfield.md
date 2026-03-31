This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).ObjectField




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













                        **Obsolete**
                        Check the docs for the usage of the new parameter 'allowSceneObjects'.




## Declaration

public static Object ObjectField([Rect](Rect.html) position,
[Object](Object.html) obj,
Type objType);




                        **Obsolete**
                        Check the docs for the usage of the new parameter 'allowSceneObjects'.




## Declaration

public static Object ObjectField([Rect](Rect.html) position,
string label,
[Object](Object.html) obj,
Type objType);




                        **Obsolete**
                        Check the docs for the usage of the new parameter 'allowSceneObjects'.




## Declaration

public static Object ObjectField([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
[Object](Object.html) obj,
Type objType);






## Declaration

public static Object ObjectField([Rect](Rect.html) position,
[Object](Object.html) obj,
Type objType,
bool allowSceneObjects);






## Declaration

public static Object ObjectField([Rect](Rect.html) position,
string label,
[Object](Object.html) obj,
Type objType,
bool allowSceneObjects);






## Declaration

public static Object ObjectField([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
[Object](Object.html) obj,
Type objType,
bool allowSceneObjects);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the field. |
| label | Optional label in front of the field. |
| obj | The object the field shows. |
| objType | The type of the objects that can be assigned. |
| allowSceneObjects | Allow assigning Scene objects. See Description for more info. |





### Returns



**Object**
        The object that has been set by the user.





### Description



Makes an object field. You can assign objects either by drag and drop objects or by selecting an object using the Object Picker.





Ensure that the **allowSceneObjects** parameter is false if the object reference is stored as part of an asset, since assets can't store references to objects in a Scene.

If the ObjectField is part of a custom Editor for a script component, use EditorUtility.IsPersistent() to check if the component is on an asset or a Scene object.

See example in [Editor](Editor.html) class.

[Image: image]

*Object field in an Editor Window.*


              


```
using UnityEditor;
using UnityEngine;
using System.Collections;//Select the dependencies of the found GameObject
public class EditorGUIObjectField : EditorWindow
{
    public GameObject obj = null;
    [MenuItem("Examples/Select Dependencies")]
    static void Init()
    {
        UnityEditor.EditorWindow window = GetWindow(typeof(EditorGUIObjectField));
        window.position = new Rect(0, 0, 250, 80);
        window.Show();
    }    void OnInspectorUpdate()
    {
        Repaint();
    }    void OnGUI()
    {
        obj = (GameObject)EditorGUI.ObjectField(new Rect(3, 3, position.width - 6, 20), "Find Dependency", obj, typeof(GameObject));
        if (obj) {
            if (GUI.Button(new Rect(3, 25, position.width - 6, 20), "Check Dependencies")) {
                Selection.objects = EditorUtility.CollectDependencies(new GameObject[] {obj});
            }            else {
                EditorGUI.LabelField(new Rect(3, 25, position.width - 6, 20), "Missing:", "Select an object first");
            }
        }
    }
}
```




---








## Declaration

public static void ObjectField([Rect](Rect.html) position,
[SerializedProperty](SerializedProperty.html) property);






## Declaration

public static void ObjectField([Rect](Rect.html) position,
[SerializedProperty](SerializedProperty.html) property,
[GUIContent](GUIContent.html) label);






## Declaration

public static void ObjectField([Rect](Rect.html) position,
[SerializedProperty](SerializedProperty.html) property,
Type objType);






## Declaration

public static void ObjectField([Rect](Rect.html) position,
[SerializedProperty](SerializedProperty.html) property,
Type objType,
[GUIContent](GUIContent.html) label);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the field. |
| property | The object reference property the field shows. |
| objType | The type of the objects that can be assigned. |
| label | Optional label to display in front of the field. Pass GUIContent.none to hide the label. |





### Description



Makes an object field. You can assign objects either by drag and drop objects or by selecting an object using the Object Picker.


            
