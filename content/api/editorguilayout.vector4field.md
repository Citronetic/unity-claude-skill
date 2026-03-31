This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).Vector4Field




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

public static [Vector4](Vector4.html) Vector4Field(string label,
[Vector4](Vector4.html) value,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| label | Label to display above the field. |
| value | The value to edit. |
| options | An optional list of layout options that specify extra layout properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Returns



**Vector4**
        The value entered by the user.





### Description



Make an X, Y, Z & W field for entering a [Vector4](Vector4.html).





[Image: image]


*Modify X,Y,Z and W values directly of a GameObject.*


              


```
using UnityEngine;
using UnityEditor;public class ModifyQuaternionDirectly : UnityEditor.EditorWindow
{
    Quaternion quat;
    public Vector4 value;    [MenuItem("Examples/Modify internal Quaternion")]
    static void Init()
    {
        ModifyQuaternionDirectly window = (ModifyQuaternionDirectly)EditorWindow.GetWindow(typeof(ModifyQuaternionDirectly), true, "My Empty Window");
        window.Show();
    }    void OnGUI()
    {
        value = EditorGUILayout.Vector4Field("Components:", value);
        if (GUILayout.Button("Capture Rotation"))
            value = QuaternionToVector4(Selection.activeTransform.rotation);        if (GUILayout.Button("Close"))
            this.Close();
    }    static Vector4 QuaternionToVector4(Quaternion rot)
    {
        return new Vector4(rot.x, rot.y, rot.z, rot.w);
    }
}
```


            
