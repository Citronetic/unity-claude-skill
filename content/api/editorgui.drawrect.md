This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).DrawRect




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

public static void DrawRect([Rect](Rect.html) rect,
[Color](Color.html) color);






### Parameters



| Parameter | Description |
| --- | --- |
| rect | The position and size of the rectangle to draw. |
| color | The color of the rectange. |





### Description



Draws a filled rectangle of color at the specified position and size within the current editor window.





Use this to give blocks of Color to areas you want to highlight in the Inspector window of a GameObject in the Editor. You can also use them to simulate statistics in the Editor, for example, an in-Editor health bar.


              


```
using UnityEngine;
using UnityEditor;public class EditorGUIDrawRectExample : EditorWindow
{
    //This is the value of the Slider
    float m_Value = 50;    [MenuItem("Example/Draw Rect")]
    static void Init()
    {
        var window = (EditorGUIDrawRectExample)GetWindow(typeof(EditorGUIDrawRectExample));
        window.position = new Rect(0, 0, 350, 300);
    }    void OnGUI()
    {
        //This is the Label for the Slider
        GUI.Label(new Rect(0, 0, 100, 30), "Rectangle Width");
        //This is the Slider that changes the size of the Rectangle drawn
        m_Value = GUI.HorizontalSlider(new Rect(100, 0, 100, 30), m_Value, 1.0f, 250.0f);        //The rectangle is drawn in the Editor (when MyScript is attached) with the width depending on the value of the Slider
        EditorGUI.DrawRect(new Rect(50, 50, m_Value, 70), Color.green);
    }
}
```


            
