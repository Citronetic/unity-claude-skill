This version of Unity is unsupported.



# [EditorApplication](EditorApplication.html).contextualPropertyMenu




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












                    public static [EditorApplication.SerializedPropertyCallbackFunction](EditorApplication.SerializedPropertyCallbackFunction.html) contextualPropertyMenu;






### Description



Callback raised whenever the user context-clicks on a property in an Inspector.





This callback is useful to add custom contextual menu items which can perform operations on a particular property.


              


```
//This script creates a new menu item named "Example" in the Window dropdown menu. Press this to create the Example window.using UnityEngine;
using UnityEditor;
using System.Collections;public class Example : EditorWindow
{
    [MenuItem("Window/Example")]    public static void  ShowWindow()
    {
        EditorWindow.GetWindow(typeof(Example));
    }    void OnEnable()
    {
        EditorApplication.contextualPropertyMenu += OnPropertyContextMenu;
    }    void OnDestroy()
    {
        EditorApplication.contextualPropertyMenu -= OnPropertyContextMenu;
    }    void OnPropertyContextMenu(GenericMenu menu, SerializedProperty property)
    {
        // show a custom menu item only for Vector3 properties
        if (property.propertyType != SerializedPropertyType.Vector3)
            return;        // and only when called on a Transform component
        if (property.serializedObject.targetObject.GetType() != typeof(Transform))
            return;        var propertyCopy = property.Copy();
        menu.AddItem(new GUIContent("Randomize Vector"), false, () =>
        {
            propertyCopy.vector3Value = Random.insideUnitSphere * 5;
            propertyCopy.serializedObject.ApplyModifiedProperties();
        });
    }
}
```


            
