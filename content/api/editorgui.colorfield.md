This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).ColorField




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

public static [Color](Color.html) ColorField([Rect](Rect.html) position,
[Color](Color.html) value);






## Declaration

public static [Color](Color.html) ColorField([Rect](Rect.html) position,
string label,
[Color](Color.html) value);






## Declaration

public static [Color](Color.html) ColorField([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
[Color](Color.html) value);






## Declaration

public static [Color](Color.html) ColorField([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
[Color](Color.html) value,
bool showEyedropper,
bool showAlpha,
bool hdr);




                        **Obsolete**
                        Use EditorGUI.ColorField(Rect position, GUIContent label, Color value, bool showEyedropper, bool showAlpha, bool hdr).




## Declaration

public static [Color](Color.html) ColorField([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
[Color](Color.html) value,
bool showEyedropper,
bool showAlpha,
bool hdr,
[ColorPickerHDRConfig](ColorPickerHDRConfig.html) hdrConfig);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the field. |
| label | Optional label to display in front of the field. |
| value | The color to edit. |
| showEyedropper | If true, the color picker should show the eyedropper control. If false, don't show it. |
| showAlpha | If true, allow the user to set an alpha value for the color. If false, hide the alpha component. |
| hdr | If true, treat the color as an HDR value. If false, treat it as a standard LDR value. |





### Returns



**Color**
        The color selected by the user.





### Description



Makes a field for selecting a [Color](Color.html).





[Image: image]


*Color field in an Editor Window.*


              


```
using UnityEngine;
using UnityEditor;// Change The color of the selected Game Objects
class EditorGUIColorField : EditorWindow
{
    Color matColor  = Color.white;    [MenuItem("Examples/Mass Color Change")]    static void Init()
    {
        var window = GetWindow<EditorGUIColorField>();
        window.position = new Rect(0, 0, 170, 60);
        window.Show();
    }    void OnGUI()
    {
        matColor = EditorGUI.ColorField(new Rect(3, 3, position.width - 6, 15),
            "New Color:",
            matColor);
        if (GUI.Button(new Rect(3, 25, position.width - 6, 30), "Change!"))
        {
            ChangeColors();
        }
    }    void ChangeColors()
    {
        if (Selection.activeGameObject)
        {
            foreach (GameObject obj in Selection.gameObjects)
            {
                Renderer rend = obj.GetComponent<Renderer>();                if (rend != null)
                {
                    rend.sharedMaterial.color = matColor;
                }
            }
        }
    }
}
```


            
