This version of Unity is unsupported.



# [EditorGUILayout](EditorGUILayout.html).CurveField




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

public static [AnimationCurve](AnimationCurve.html) CurveField([AnimationCurve](AnimationCurve.html) value,
params GUILayoutOption[] options);






## Declaration

public static [AnimationCurve](AnimationCurve.html) CurveField(string label,
[AnimationCurve](AnimationCurve.html) value,
params GUILayoutOption[] options);






## Declaration

public static [AnimationCurve](AnimationCurve.html) CurveField([GUIContent](GUIContent.html) label,
[AnimationCurve](AnimationCurve.html) value,
params GUILayoutOption[] options);






## Declaration

public static [AnimationCurve](AnimationCurve.html) CurveField([AnimationCurve](AnimationCurve.html) value,
[Color](Color.html) color,
[Rect](Rect.html) ranges,
params GUILayoutOption[] options);






## Declaration

public static [AnimationCurve](AnimationCurve.html) CurveField(string label,
[AnimationCurve](AnimationCurve.html) value,
[Color](Color.html) color,
[Rect](Rect.html) ranges,
params GUILayoutOption[] options);






## Declaration

public static [AnimationCurve](AnimationCurve.html) CurveField([GUIContent](GUIContent.html) label,
[AnimationCurve](AnimationCurve.html) value,
[Color](Color.html) color,
[Rect](Rect.html) ranges,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| label | Optional label to display in front of the field. |
| value | The curve to edit. |
| color | The color to show the curve with. |
| ranges | Optional rectangle that the curve is restrained within. |
| options | An optional list of layout options that specify extra layout properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Returns



**AnimationCurve**
        The curve edited by the user.





### Description



Make a field for editing an [AnimationCurve](AnimationCurve.html).





[Image: image]


*Create an animation on the different axis and assign it to a GameObject.*


              


```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;public class FollowCurve : EditorWindow
{
    AnimationCurve curveX = AnimationCurve.Linear(0, 0, 10, 10);
    AnimationCurve curveY = AnimationCurve.Linear(0, 0, 10, 10);
    AnimationCurve curveZ = AnimationCurve.Linear(0, 0, 10, 10);    [MenuItem("Examples/Create Curve For Object")]
    static void Init()
    {
        FollowCurve window = (FollowCurve)EditorWindow.GetWindow(typeof(FollowCurve));
        window.Show();
    }    void OnGUI()
    {
        curveX = EditorGUILayout.CurveField("Animation on X", curveX);
        curveY = EditorGUILayout.CurveField("Animation on Y", curveY);
        curveZ = EditorGUILayout.CurveField("Animation on Z", curveZ);        if (GUILayout.Button("Generate Curve"))
            AddCurveToSelectedGameObject();
    }    void  AddCurveToSelectedGameObject()
    {
        if (Selection.activeGameObject)
        {
            FollowAnimationCurve comp =
                Selection.activeGameObject.AddComponent<FollowAnimationCurve>();            comp.SetCurves(curveX, curveY, curveZ);
        }
        else
        {
            Debug.LogError("No Game Object selected for adding an animation curve");
        }
    }
}
```





And the script that works with the example:


              


```
using UnityEngine;
using System.Collections;public class FollowAnimationCurve : MonoBehaviour
{
    public AnimationCurve curveX;
    public AnimationCurve curveY;
    public AnimationCurve curveZ;    public void SetCurves(AnimationCurve xC, AnimationCurve yC, AnimationCurve zC)
    {
        curveX = xC;
        curveY = yC;
        curveZ = zC;
    }    void Update()
    {
        transform.position = new Vector3(curveX.Evaluate(Time.time), curveY.Evaluate(Time.time), curveZ.Evaluate(Time.time));
    }
}
```




---








## Declaration

public static void CurveField([SerializedProperty](SerializedProperty.html) property,
[Color](Color.html) color,
[Rect](Rect.html) ranges,
params GUILayoutOption[] options);






## Declaration

public static void CurveField([SerializedProperty](SerializedProperty.html) property,
[Color](Color.html) color,
[Rect](Rect.html) ranges,
[GUIContent](GUIContent.html) label,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| property | The curve to edit. |
| color | The color to show the curve with. |
| ranges | Optional rectangle that the curve is restrained within. |
| options | An optional list of layout options that specify extra layout properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |
| label | Optional label to display in front of the field. Pass [[GUIContent.none] to hide the label. |





### Description



Make a field for editing an [AnimationCurve](AnimationCurve.html).


            
