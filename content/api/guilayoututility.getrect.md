This version of Unity is unsupported.



# [GUILayoutUtility](GUILayoutUtility.html).GetRect




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

public static [Rect](Rect.html) GetRect([GUIContent](GUIContent.html) content,
[GUIStyle](GUIStyle.html) style);






## Declaration

public static [Rect](Rect.html) GetRect([GUIContent](GUIContent.html) content,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| content | The content to make room for displaying. |
| style | The GUIStyle to layout for. |
| options | An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Returns



**Rect**
        A rectangle that is large enough to contain content when rendered in style.





### Description



Reserve layout space for a rectangle for displaying some contents with a specific style.


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    // Shows the button rect properties in a label when the mouse is over it
    GUIContent buttonText = new GUIContent("some button");
    GUIStyle buttonStyle = GUIStyle.none;    void OnGUI()
    {
        Rect rt = GUILayoutUtility.GetRect(buttonText, buttonStyle);
        if (rt.Contains(Event.current.mousePosition))
        {
            GUI.Label(new Rect(0, 20, 200, 70), "PosX: " + rt.x + "\nPosY: " + rt.y +
                "\nWidth: " + rt.width + "\nHeight: " + rt.height);
        }
        GUI.Button(rt, buttonText, buttonStyle);
    }
}
```




---








## Declaration

public static [Rect](Rect.html) GetRect(float width,
float height);






## Declaration

public static [Rect](Rect.html) GetRect(float width,
float height,
[GUIStyle](GUIStyle.html) style);






## Declaration

public static [Rect](Rect.html) GetRect(float width,
float height,
params GUILayoutOption[] options);






## Declaration

public static [Rect](Rect.html) GetRect(float width,
float height,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| width | The width of the area you want. |
| height | The height of the area you want. |
| style | An optional GUIStyle to layout for. If specified, the style's padding value will be added to your sizes & its margin value will be used for spacing. |
| options | An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Returns



**Rect**
        The rectangle to put your control in.





### Description



Reserve layout space for a rectangle with a fixed content area.




---








## Declaration

public static [Rect](Rect.html) GetRect(float minWidth,
float maxWidth,
float minHeight,
float maxHeight);






## Declaration

public static [Rect](Rect.html) GetRect(float minWidth,
float maxWidth,
float minHeight,
float maxHeight,
[GUIStyle](GUIStyle.html) style);






## Declaration

public static [Rect](Rect.html) GetRect(float minWidth,
float maxWidth,
float minHeight,
float maxHeight,
params GUILayoutOption[] options);






## Declaration

public static [Rect](Rect.html) GetRect(float minWidth,
float maxWidth,
float minHeight,
float maxHeight,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| minWidth | The minimum width of the area passed back. |
| maxWidth | The maximum width of the area passed back. |
| minHeight | The minimum width of the area passed back. |
| maxHeight | The maximum width of the area passed back. |
| style | An optional style. If specified, the style's padding value will be added to the sizes requested & the style's margin values will be used for spacing. |
| options | An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Returns



**Rect**
        A rectangle with size between minWidth & maxWidth on both axes.





### Description



Reserve layout space for a flexible rect.





The rectangle's size will be between the min & max values.


            
