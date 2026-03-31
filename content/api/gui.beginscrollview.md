This version of Unity is unsupported.



# [GUI](GUI.html).BeginScrollView




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

public static [Vector2](Vector2.html) BeginScrollView([Rect](Rect.html) position,
[Vector2](Vector2.html) scrollPosition,
[Rect](Rect.html) viewRect);






## Declaration

public static [Vector2](Vector2.html) BeginScrollView([Rect](Rect.html) position,
[Vector2](Vector2.html) scrollPosition,
[Rect](Rect.html) viewRect,
bool alwaysShowHorizontal,
bool alwaysShowVertical);






## Declaration

public static [Vector2](Vector2.html) BeginScrollView([Rect](Rect.html) position,
[Vector2](Vector2.html) scrollPosition,
[Rect](Rect.html) viewRect,
[GUIStyle](GUIStyle.html) horizontalScrollbar,
[GUIStyle](GUIStyle.html) verticalScrollbar);






## Declaration

public static [Vector2](Vector2.html) BeginScrollView([Rect](Rect.html) position,
[Vector2](Vector2.html) scrollPosition,
[Rect](Rect.html) viewRect,
bool alwaysShowHorizontal,
bool alwaysShowVertical,
[GUIStyle](GUIStyle.html) horizontalScrollbar,
[GUIStyle](GUIStyle.html) verticalScrollbar);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the ScrollView. |
| scrollPosition | The pixel distance that the view is scrolled in the X and Y directions. |
| viewRect | The rectangle used inside the scrollview. |
| horizontalScrollbar | Optional GUIStyle to use for the horizontal scrollbar. If left out, the horizontalScrollbar style from the current GUISkin is used. |
| verticalScrollbar | Optional GUIStyle to use for the vertical scrollbar. If left out, the verticalScrollbar style from the current GUISkin is used. |
| alwaysShowHorizontal | Optional parameter to always show the horizontal scrollbar. If false or left out, it is only shown when viewRect is wider than position. |
| alwaysShowVertical | Optional parameter to always show the vertical scrollbar. If false or left out, it is only shown when viewRect is taller than position. |





### Returns



**Vector2**
        The modified scrollPosition. Feed this back into the variable you pass in, as shown in the example.





### Description



Begin a scrolling view inside your GUI.





ScrollViews let you make a smaller area on-screen look 'into' a much larger area, using scrollbars placed on the sides of the ScrollView.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    // The position on of the scrolling viewport
    public Vector2 scrollPosition = Vector2.zero;    void OnGUI()
    {
        // An absolute-positioned example: We make a scrollview that has a really large client
        // rect and put it in a small rect on the screen.
        scrollPosition = GUI.BeginScrollView(new Rect(10, 300, 100, 100), scrollPosition, new Rect(0, 0, 220, 200));        // Make four buttons - one in each corner. The coordinate system is defined
        // by the last parameter to BeginScrollView.
        GUI.Button(new Rect(0, 0, 100, 20), "Top-left");
        GUI.Button(new Rect(120, 0, 100, 20), "Top-right");
        GUI.Button(new Rect(0, 180, 100, 20), "Bottom-left");
        GUI.Button(new Rect(120, 180, 100, 20), "Bottom-right");        // End the scroll view that we began above.
        GUI.EndScrollView();
    }
}
```


            
