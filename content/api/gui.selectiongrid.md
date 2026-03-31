This version of Unity is unsupported.



# [GUI](GUI.html).SelectionGrid




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

public static int SelectionGrid([Rect](Rect.html) position,
int selected,
string[] texts,
int xCount);






## Declaration

public static int SelectionGrid([Rect](Rect.html) position,
int selected,
Texture[] images,
int xCount);






## Declaration

public static int SelectionGrid([Rect](Rect.html) position,
int selected,
GUIContent[] content,
int xCount);






## Declaration

public static int SelectionGrid([Rect](Rect.html) position,
int selected,
string[] texts,
int xCount,
[GUIStyle](GUIStyle.html) style);






## Declaration

public static int SelectionGrid([Rect](Rect.html) position,
int selected,
Texture[] images,
int xCount,
[GUIStyle](GUIStyle.html) style);






## Declaration

public static int SelectionGrid([Rect](Rect.html) position,
int selected,
GUIContent[] contents,
int xCount,
[GUIStyle](GUIStyle.html) style);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the grid. |
| selected | The index of the selected grid button. |
| texts | An array of strings to show on the grid buttons. |
| images | An array of textures on the grid buttons. |
| contents | An array of text, image and tooltips for the grid button. |
| xCount | How many elements to fit in the horizontal direction. The controls will be scaled to fit unless the style defines a fixedWidth to use. |
| style | The style to use. If left out, the button style from the current GUISkin is used. |





### Returns



**int**
        The index of the selected button.





### Description



Make a grid of buttons.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public int selGridInt = 0;
    public string[] selStrings = new string[] {"Grid 1", "Grid 2", "Grid 3", "Grid 4"};    void OnGUI()
    {
        // use 2 elements in the horizontal direction
        selGridInt = GUI.SelectionGrid(new Rect(25, 25, 100, 30), selGridInt, selStrings, 2);
    }
}
```


            
