This version of Unity is unsupported.



# [SerializedProperty](SerializedProperty.html).gradientValue




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












                    public [Gradient](Gradient.html) gradientValue;






### Description



Value of a gradient property.





Additional resources: [propertyType](SerializedProperty-propertyType.html), [SerializedPropertyType.Gradient](SerializedPropertyType.Gradient.html), [Gradient](Gradient.html).


              


```
using System;
using UnityEditor;
using UnityEngine;[CreateAssetMenu]
public class SerializedPropertyGradientExample : ScriptableObject
{
    public Gradient m_Gradient;    [Range(0, 1)]
    public float m_EvaluationTime;    public SerializedPropertyGradientExample()
    {
        // Establish a default gradient
        var colorKeys = new GradientColorKey[]
        {
            new GradientColorKey() { color = Color.red, time = 0.0f },
            new GradientColorKey() { color = Color.green, time = 0.5f },
            new GradientColorKey() { color = Color.blue, time = 1.0f }
        };
        var alphaKeys = new GradientAlphaKey[]
        {
            new GradientAlphaKey() { alpha = 0.5f, time = 0.0f },
            new GradientAlphaKey() { alpha = 1.0f, time = 1.0f }
        };
        m_Gradient = new Gradient();
        m_Gradient.SetKeys(colorKeys, alphaKeys);
    }
}// Override the default inspector behavior to add extra text line after the two properties
[CustomEditor(typeof(SerializedPropertyGradientExample))]
public class SerializedPropertyGradientExampleEditor : Editor
{
    public override void OnInspectorGUI()
    {
        DrawDefaultInspector();        var gradient = serializedObject.FindProperty("m_Gradient").gradientValue;
        var evalPoint = serializedObject.FindProperty("m_EvaluationTime").floatValue;
        GUILayout.Label($"Gradiant at time {evalPoint}: {gradient.Evaluate(evalPoint)}");
    }
}
```


            
