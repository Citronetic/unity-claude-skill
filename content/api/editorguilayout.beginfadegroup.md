This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).BeginFadeGroup




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

public static bool BeginFadeGroup(float value);






### Parameters



| Parameter | Description |
| --- | --- |
| value | A value between 0 and 1, 0 being hidden, and 1 being fully visible. |





### Returns



**bool**
        If the group is visible or not.





### Description



Begins a group that can be be hidden/shown and the transition will be animated.





[Image: image]


*Fade Group*


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.AnimatedValues;public class MyWindow : EditorWindow
{
    AnimBool m_ShowExtraFields;
    string m_String;
    Color m_Color = Color.white;
    int m_Number = 0;    [MenuItem("Window/My Window")]
    static void Init()
    {
        MyWindow window = (MyWindow)EditorWindow.GetWindow(typeof(MyWindow));
    }    void OnEnable()
    {
        m_ShowExtraFields = new AnimBool(true);
        m_ShowExtraFields.valueChanged.AddListener(Repaint);
    }    void OnGUI()
    {
        m_ShowExtraFields.target = EditorGUILayout.ToggleLeft("Show extra fields", m_ShowExtraFields.target);        //Extra block that can be toggled on and off.
        if (EditorGUILayout.BeginFadeGroup(m_ShowExtraFields.faded))
        {
            EditorGUI.indentLevel++;
            EditorGUILayout.PrefixLabel("Color");
            m_Color = EditorGUILayout.ColorField(m_Color);
            EditorGUILayout.PrefixLabel("Text");
            m_String = EditorGUILayout.TextField(m_String);
            EditorGUILayout.PrefixLabel("Number");
            m_Number = EditorGUILayout.IntSlider(m_Number, 0, 10);
            EditorGUI.indentLevel--;
        }        EditorGUILayout.EndFadeGroup();
    }
}
```


            
