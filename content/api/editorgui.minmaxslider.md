This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).MinMaxSlider




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
                        Switch the order of the first two parameters.




## Declaration

public static void MinMaxSlider([GUIContent](GUIContent.html) label,
[Rect](Rect.html) position,
ref float minValue,
ref float maxValue,
float minLimit,
float maxLimit);






## Declaration

public static void MinMaxSlider([Rect](Rect.html) position,
ref float minValue,
ref float maxValue,
float minLimit,
float maxLimit);






## Declaration

public static void MinMaxSlider([Rect](Rect.html) position,
string label,
ref float minValue,
ref float maxValue,
float minLimit,
float maxLimit);






## Declaration

public static void MinMaxSlider([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
ref float minValue,
ref float maxValue,
float minLimit,
float maxLimit);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the slider. |
| label | Optional label in front of the slider. |
| minValue | The lower value of the range the slider shows, passed by reference. |
| maxValue | The upper value at the range the slider shows, passed by reference. |
| minLimit | The limit at the left end of the slider. |
| maxLimit | The limit at the right end of the slider. |





### Description



Makes a special slider the user can use to specify a range between a min and a max.





[Image: image]


*MinMax Slider in an Editor Window.*


              


```
using UnityEngine;
using UnityEditor;
// Place the selected object randomly between the interval of the Min Max Slider
// in the X,Y,Z coordsclass EditorGUIMinMaxSlider : EditorWindow
{
    float minVal = -10;
    float minLimit = -20;
    float maxVal = 10;
    float maxLimit = 20;    [MenuItem("Examples/Editor GUI Move Object Randomly")]
    static void Init()
    {
        var window = GetWindow<EditorGUIMinMaxSlider>();
        window.Show();
    }    void OnGUI()
    {
        EditorGUI.MinMaxSlider(
            new Rect(0, 0, position.width, 20),
            new GUIContent("Random range:"),
            ref minVal, ref maxVal,
            minLimit, maxLimit);
        if (GUI.Button(new Rect(0, 25, position.width, position.height - 25), "Randomize!"))
        {
            PlaceRandomly();
        }
    }    void PlaceRandomly()
    {
        if (Selection.activeTransform)
        {
            Selection.activeTransform.position =
                new Vector3(
                    Random.Range(minVal, maxVal),
                    Random.Range(minVal, maxVal),
                    Random.Range(minVal, maxVal)
                );
        }
        else
        {
            Debug.LogError("Select a GameObject to randomize its position.");
        }
    }
}
```


            
