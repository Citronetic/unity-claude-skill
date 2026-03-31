This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).InspectorTitlebar




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

public static bool InspectorTitlebar(bool foldout,
[Object](Object.html) targetObj);






## Declaration

public static bool InspectorTitlebar(bool foldout,
Object[] targetObjs);






### Parameters



| Parameter | Description |
| --- | --- |
| foldout | The foldout state shown with the arrow. |
| targetObj | The object (for example a component) or objects that the titlebar is for. |





### Returns



**bool**
        The foldout state selected by the user.





### Description



Make an inspector-window-like titlebar.





[Image: image]


*Create a custom inspector that shows the X,Y,Z,W quaternion components on the rotation.*


              


```
// Create a custom transform inspector that shows the X,Y,Z,W
// quaternion components instead of the rotation angles.using UnityEditor;
using UnityEngine;public class InspectorTitlebarExample : EditorWindow
{
    bool      fold = true;
    Vector4   rotationComponents;
    Transform selectedTransform;    [MenuItem("Examples/Inspector Titlebar")]
    static void Init()
    {
        var window = GetWindow(typeof(InspectorTitlebarExample));
        window.Show();
    }    void OnGUI()
    {
        if (Selection.activeGameObject)
        {
            selectedTransform = Selection.activeGameObject.transform;            fold = EditorGUILayout.InspectorTitlebar(fold, selectedTransform);
            if (fold)
            {
                selectedTransform.position =
                    EditorGUILayout.Vector3Field("Position", selectedTransform.position);
                EditorGUILayout.Space();
                rotationComponents =
                    EditorGUILayout.Vector4Field("Detailed Rotation",
                        QuaternionToVector4(selectedTransform.localRotation));
                EditorGUILayout.Space();
                selectedTransform.localScale =
                    EditorGUILayout.Vector3Field("Scale", selectedTransform.localScale);
            }            selectedTransform.localRotation = ConvertToQuaternion(rotationComponents);
            EditorGUILayout.Space();
        }
    }    Quaternion ConvertToQuaternion(Vector4 v4)
    {
        return new Quaternion(v4.x, v4.y, v4.z, v4.w);
    }    Vector4 QuaternionToVector4(Quaternion q)
    {
        return new Vector4(q.x, q.y, q.z, q.w);
    }    void OnInspectorUpdate()
    {
        this.Repaint();
    }
}
```





The titlebar has an arrow for folding out, a help icon, and a settings menu that depends on the type of the object supplied.


            
