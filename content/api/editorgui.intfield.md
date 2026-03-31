This version of Unity is unsupported.



# [EditorGUI](EditorGUI.html).IntField




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

public static int IntField([Rect](Rect.html) position,
int value,
[GUIStyle](GUIStyle.html) style = EditorStyles.numberField);






## Declaration

public static int IntField([Rect](Rect.html) position,
string label,
int value,
[GUIStyle](GUIStyle.html) style = EditorStyles.numberField);






## Declaration

public static int IntField([Rect](Rect.html) position,
[GUIContent](GUIContent.html) label,
int value,
[GUIStyle](GUIStyle.html) style = EditorStyles.numberField);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Rectangle on the screen to use for the int field. |
| label | Optional label to display in front of the int field. |
| value | The value to edit. |
| style | Optional GUIStyle. |





### Returns



**int**
        The value entered by the user.





### Description



Makes a text field for entering integers.





[Image: image]


*Int Field in an Editor Window.*


              


```
//Create a folder and name it "Editor" (Right click in your Project Asset folder and go to Create>Folder) if you don't already have one
//Place this script in the Editor folder
//This script creates a new menu at the top of the Editor named "Examples" with one item "Clone Object".using UnityEngine;
using UnityEditor;class Example : EditorWindow
{
    int clones = 1;    [MenuItem("Examples/Clone Object")]
    static void Init()
    {
        //Create the new Editor window and show it
        EditorWindow window = GetWindow(typeof(Example));
        window.Show();
    }    void OnGUI()
    {
        //The field which allows you to input the amount of clones of a GameObject you want
        clones = EditorGUI.IntField(new Rect(0, 35, position.width, 15), "Number of clones:", clones);        //If there isn't a currently selected GameObject, this message appears
        if (Selection.activeGameObject == null)
            EditorGUI.LabelField(new Rect(3, 3, position.width, 20), "Please click on a GameObject in your Scene!");        //Press the clone Button
        if (GUI.Button(new Rect(0, 55, position.width, 20), "Clone!"))
        {
            //Check that you have a GameObject selected
            if (Selection.activeGameObject != null)
            {
                //Loop until the number of clones is reached
                for (int i = 0; i < clones; i++)
                {
                    //Spawn each of the clones
                    Instantiate(Selection.activeGameObject, Vector3.zero, Quaternion.identity);
                }
            }
        }
    }
}
```


            
