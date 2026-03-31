This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).CurveField




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

public static [AnimationCurve](AnimationCurve.html) CurveField([Rect](Rect.html) position,
[AnimationCurve](AnimationCurve.html) value);






## Declaration

public static [AnimationCurve](AnimationCurve.html) CurveField([Rect](Rect.html) position,
string label,
[AnimationCurve](AnimationCurve.html) value);






## Declaration

public static [AnimationCurve](AnimationCurve.html) CurveField([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
[AnimationCurve](AnimationCurve.html) value);






## Declaration

public static [AnimationCurve](AnimationCurve.html) CurveField([Rect](Rect.html) position,
[AnimationCurve](AnimationCurve.html) value,
[Color](Color.html) color,
[Rect](Rect.html) ranges);






## Declaration

public static [AnimationCurve](AnimationCurve.html) CurveField([Rect](Rect.html) position,
string label,
[AnimationCurve](AnimationCurve.html) value,
[Color](Color.html) color,
[Rect](Rect.html) ranges);






## Declaration

public static [AnimationCurve](AnimationCurve.html) CurveField([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
[AnimationCurve](AnimationCurve.html) value,
[Color](Color.html) color,
[Rect](Rect.html) ranges);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the field. |
| label | Optional label to display in front of the field. |
| value | The curve to edit. |
| color | The color to show the curve with. |
| ranges | Optional rectangle that the curve is restrained within. |





### Returns



**AnimationCurve**
        The curve edited by the user.





### Description



Makes a field for editing an [AnimationCurve](AnimationCurve.html).





[Image: image]


*Curve field in an Editor Window.*


              


```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;public class EditorGUICurveField : EditorWindow
{
    AnimationCurve curveX = AnimationCurve.Linear(0, 0, 1, 0);
    AnimationCurve curveY = AnimationCurve.Linear(0, 0, 1, 1);
    AnimationCurve curveZ = AnimationCurve.Linear(0, 0, 1, 0);    [MenuItem("Examples/Curve Field demo")]
    static void Init()
    {
        EditorWindow window = GetWindow(typeof(EditorGUICurveField));
        window.position = new Rect(0, 0, 400, 199);
        window.Show();
    }    void OnGUI()
    {
        curveX = EditorGUI.CurveField(
            new Rect(3, 3, position.width - 6, 50),
            "Animation on X", curveX);
        curveY = EditorGUI.CurveField(
            new Rect(3, 56, position.width - 6, 50),
            "Animation on Y", curveY);
        curveZ = EditorGUI.CurveField(
            new Rect(3, 109, position.width - 6, 50),
            "Animation on Z", curveZ);        if (GUI.Button(new Rect(3, 163, position.width - 6, 30), "Generate Curve"))
            AddCurveToSelectedGameObject();
    }    // A GameObject with the FollowAnimationCurve script must be selected
    void AddCurveToSelectedGameObject()
    {
        if (Selection.activeGameObject)
        {
            FollowAnimationCurve comp  =
                Selection.activeGameObject.GetComponent<FollowAnimationCurve>();
            comp.SetCurves(curveX, curveY, curveZ);
        }
        else
        {
            Debug.LogError("No Game Object selected for adding an animation curve");
        }
    }
}
```





This is the run-time script which animates the
        attached GameObject:


              


```
// Note that this must be FollowAnimationCurve.csusing UnityEngine;
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
        transform.position = new Vector3(
            curveX.Evaluate(Time.time),
            curveY.Evaluate(Time.time),
            curveZ.Evaluate(Time.time));
    }
}
```




---








## Declaration

public static void CurveField([Rect](Rect.html) position,
[SerializedProperty](SerializedProperty.html) property,
[Color](Color.html) color,
[Rect](Rect.html) ranges);






## Declaration

public static void CurveField([Rect](Rect.html) position,
[SerializedProperty](SerializedProperty.html) property,
[Color](Color.html) color,
[Rect](Rect.html) ranges,
[GUIContent](GUIContent.html) label);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the field. |
| property | The curve to edit. |
| color | The color to show the curve with. |
| ranges | Optional rectangle that the curve is restrained within. |
| label | Optional label to display in front of the field. Pass [[GUIContent.none] to hide the label. |





### Description



Makes a field for editing an [AnimationCurve](AnimationCurve.html).


            
