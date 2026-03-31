This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).ObjectField




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

public static Object ObjectField([Object](Object.html) obj,
Type objType,
bool allowSceneObjects,
params GUILayoutOption[] options);






## Declaration

public static Object ObjectField(string label,
[Object](Object.html) obj,
Type objType,
bool allowSceneObjects,
params GUILayoutOption[] options);






## Declaration

public static Object ObjectField([GUIContent](GUIContent.html) label,
[Object](Object.html) obj,
Type objType,
bool allowSceneObjects,
params GUILayoutOption[] options);






## Declaration

public static Object ObjectField([Object](Object.html) obj,
Type objType,
[Object](Object.html) targetBeingEdited,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| label | Optional label in front of the field. |
| obj | The object the field shows. |
| objType | The type of the objects that can be assigned. |
| allowSceneObjects | Allow assigning Scene objects. See Description for more info. |
| options | An optional list of layout options that specify extra layout properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |
| targetBeingEdited | Optional object used to filter selection criteria. If the target object is persistent, scene objects are available for selection. If the target object is a GameObject or Component, the selection is limited to objects within the same scene as the target. |





### Returns



**Object**
        The object that has been set by the user.





### Description



Make a field to receive any object type.





You can assign objects either by drag and drop or by selecting an object using the Object Picker.

Ensure that the **allowSceneObjects** parameter is false if the object reference is stored as part of an asset, since assets can't store references to objects in a Scene.

If the ObjectField is part of a custom Editor for a script component, use EditorUtility.IsPersistent() to check if the component is on an asset or a Scene object.

See the example in the [Editor](Editor.html) class for further information.

[Image: image]

*Search for a help page by selecting the GameObject in the Object Field.*


              


```
// EditorScript that quickly searches for a help page
// about the selected Object.
//
// If no such page is found in the Manual it opens the Unity forum.using UnityEditor;
using UnityEngine;
using System.Collections;public class ExampleClass : EditorWindow
{
    public Object source;    [MenuItem("Example/ObjectField Example _h")]
    static void Init()
    {
        var window = GetWindowWithRect<ExampleClass>(new Rect(0, 0, 165, 100));
        window.Show();
    }    void OnGUI()
    {
        EditorGUILayout.BeginHorizontal();
        source = EditorGUILayout.ObjectField(source, typeof(Object), true);
        EditorGUILayout.EndHorizontal();        if (GUILayout.Button("Search!"))
        {
            if (source == null)
                ShowNotification(new GUIContent("No object selected for searching"));
            else if (Help.HasHelpForObject(source))
                Help.ShowHelpForObject(source);
            else
                Help.BrowseURL("https://forum.unity3d.com/search.php");
        }
    }
}
```





You can also use the `options` parameter to change the look of the control. The following example changes the look of a Sprite ObjectField that is displayed with a large field format.

[Image: image]

*Two different layout options for a sprite field.*


              


```
using UnityEditor;
using UnityEngine;public class SpriteExample : EditorWindow
{
    public Sprite sprite;    [MenuItem("Example/ObjectField Sprite Example")]
    static void Init()
    {
        var window = GetWindowWithRect<SpriteExample>(new Rect(0, 0, 165, 100));
        window.Show();
    }    void OnGUI()
    {
        sprite = EditorGUILayout.ObjectField(sprite, typeof(Sprite), false, GUILayout.Height(EditorGUIUtility.singleLineHeight)) as Sprite;
    }
}
```




---








## Declaration

public static void ObjectField([SerializedProperty](SerializedProperty.html) property,
params GUILayoutOption[] options);






## Declaration

public static void ObjectField([SerializedProperty](SerializedProperty.html) property,
[GUIContent](GUIContent.html) label,
params GUILayoutOption[] options);






## Declaration

public static void ObjectField([SerializedProperty](SerializedProperty.html) property,
Type objType,
params GUILayoutOption[] options);






## Declaration

public static void ObjectField([SerializedProperty](SerializedProperty.html) property,
Type objType,
[GUIContent](GUIContent.html) label,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| property | The object reference property the field shows. |
| objType | The type of the objects that can be assigned. |
| label | Optional label in front of the field. Pass GUIContent.none to hide the label. |
| options | An optional list of layout options that specify extra layout properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Description



Make a field to receive any object type.





Obsoleted. Use the overloads at the top of the page, with the **allowSceneObjects** parameter.


            
