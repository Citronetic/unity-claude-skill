This version of Unity is unsupported.



# [GUILayout](GUILayout.html).SelectionGrid




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

public static int SelectionGrid(int selected,
string[] texts,
int xCount,
params GUILayoutOption[] options);






## Declaration

public static int SelectionGrid(int selected,
Texture[] images,
int xCount,
params GUILayoutOption[] options);






## Declaration

public static int SelectionGrid(int selected,
GUIContent[] content,
int xCount,
params GUILayoutOption[] options);






## Declaration

public static int SelectionGrid(int selected,
string[] texts,
int xCount,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static int SelectionGrid(int selected,
Texture[] images,
int xCount,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






## Declaration

public static int SelectionGrid(int selected,
GUIContent[] contents,
int xCount,
[GUIStyle](GUIStyle.html) style,
params GUILayoutOption[] options);






### Parameters



| Parameter | Description |
| --- | --- |
| selected | The index of the selected button. |
| texts | An array of strings to show on the buttons. |
| images | An array of textures on the buttons. |
| contents | An array of text, image and tooltips for the button. |
| xCount | How many elements to fit in the horizontal direction. The elements will be scaled to fit unless the style defines a fixedWidth to use. The height of the control will be determined from the number of elements. |
| style | The style to use. If left out, the button style from the current GUISkin is used. |
| options | An optional list of layout options that specify extra layouting properties. Any values passed in here will override settings defined by the style.
Additional resources: GUILayout.Width, GUILayout.Height, GUILayout.MinWidth, GUILayout.MaxWidth, GUILayout.MinHeight,
GUILayout.MaxHeight, GUILayout.ExpandWidth, GUILayout.ExpandHeight. |





### Returns



**int**
        The index of the selected button.





### Description



Make a Selection Grid.





[Image: image]


*Selection grid in the Game View.*


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    int selGridInt = 0;
    string[] selStrings = {"radio1", "radio2", "radio3"};    void OnGUI()
    {
        GUILayout.BeginVertical("Box");
        selGridInt = GUILayout.SelectionGrid(selGridInt, selStrings, 1);
        if (GUILayout.Button("Start"))
        {
            Debug.Log("You chose " + selStrings[selGridInt]);
        }
        GUILayout.EndVertical();
    }
}
```


            
