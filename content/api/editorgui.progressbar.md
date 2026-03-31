This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).ProgressBar




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

public static void ProgressBar([Rect](Rect.html) position,
float value,
string text);






### Parameters



| Parameter | Description |
| --- | --- |
| totalPosition | Rectangle on the screen to use in total for both the control. |
| value | Value that is shown. |





### Description



Makes a progress bar.





Value goes from 0 to 1, where 0 means 0% of the bar filled and 1
means the bar is at 100%  fully filled

[Image: image]

*Progress bar in an Editor Window.*


              


```
using UnityEngine;
using System.Collections;
using UnityEditor;// Draw the armor and damage with bars in an Editor Windowpublic class EditorGUIProgressBar : EditorWindow
{
    float armor = 20;
    float damage  = 80;    [MenuItem("Examples/Display Info")]    static void Init()
    {
        EditorWindow window = GetWindow(typeof(EditorGUIProgressBar), false, "DisplayInfo");
        window.Show();
    }    void OnGUI()
    {
        armor = EditorGUI.IntSlider(new Rect(3, 3, position.width - 6, 15), "Armor", Mathf.RoundToInt(armor), 0, 100);
        damage = EditorGUI.IntSlider(new Rect(3, 25, position.width - 6, 15), "Damage", Mathf.RoundToInt(damage), 0, 100);        EditorGUI.ProgressBar(new Rect(3, 45, position.width - 6, 20), armor / 100, "Armor");
        EditorGUI.ProgressBar(new Rect(3, 70, position.width - 6, 20), damage / 100, "Damage");
    }
}
```


            
