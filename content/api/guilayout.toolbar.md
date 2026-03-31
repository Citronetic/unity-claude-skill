This version of Unity is unsupported.



# [GUILayout](GUILayout.html).Toolbar




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

public static int Toolbar(int selected,
string[] texts,
params GUILayoutOption[] options);






## Declaration

public static int Toolbar(int selected,
Texture[] images,
params GUILayoutOption[] options);






## Declaration

public static int Toolbar(int selected,
GUIContent[] contents,
params GUILayoutOption[] options);






## Declaration

public static int Toolbar(int selected,
string[] texts,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static int Toolbar(int selected,
Texture[] images,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static int Toolbar(int selected,
GUIContent[] contents,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static int Toolbar(int selected,
string[] texts,
[GUIStyle](GUIStyle.html) style,
[GUI.ToolbarButtonSize](GUI.ToolbarButtonSize.html) buttonSize,
params GUILayoutOption[] options);






## Declaration

public static int Toolbar(int selected,
Texture[] images,
[GUIStyle](GUIStyle.html) style,
[GUI.ToolbarButtonSize](GUI.ToolbarButtonSize.html) buttonSize,
params GUILayoutOption[] options);






## Declaration

public static int Toolbar(int selected,
GUIContent[] contents,
[GUIStyle](GUIStyle.html) style,
[GUI.ToolbarButtonSize](GUI.ToolbarButtonSize.html) buttonSize,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| selected | The index of the selected button. |
| texts | An array of strings to show on the buttons. |
| images | An array of textures on the buttons. |
| contents | An array of text, image and tooltips for the button. |
| style | The style to use. If left out, the button style from the current GUISkin is used. |
| options | An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |
| buttonSize | Determines how toolbar button size is calculated. |





### Returns



**int**
        The index of the selected button.





### Description



Make a toolbar.





[Image: image]


*Toolbar in the Game View.*


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    int toolbarInt = 0;
    string[] toolbarStrings = {"Toolbar1", "Toolbar2", "Toolbar3"};    void OnGUI()
    {
        toolbarInt = GUILayout.Toolbar(toolbarInt, toolbarStrings);
    }
}
```


            
