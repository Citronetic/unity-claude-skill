This version of Unity is unsupported.



# [EditorUtility](EditorUtility.html).FocusProjectWindow




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

public static void FocusProjectWindow();






### Description



Brings the project window to the front and focuses it.





This is commonly called after a menu item that creates and selects an asset is invoked.

[Image: image]

*Changes the color of the selected GameObjects.*


              


```
using UnityEngine;
using UnityEditor;public class FocusProjectWindowExample : EditorWindow
{
    static Color    matColor = Color.white;
    [MenuItem("Example/Color Change")]
    static void Init()
    {
        // Get existing open window or if none, make a new one:
        FocusProjectWindowExample window = (FocusProjectWindowExample)EditorWindow.GetWindow(typeof(FocusProjectWindowExample));
        window.Show();
    }    void OnGUI()
    {
        matColor = EditorGUI.ColorField(new Rect(3, 3, position.width - 6, 15), "New Color:", matColor);
        if (GUI.Button(new Rect(3, 25, position.width - 6, 30), "Change"))
            ChangeColors();
    }    void ChangeColors()
    {
        if (Selection.activeGameObject)
        {
            foreach (GameObject t in Selection.gameObjects)
            {
                Renderer rend = t.GetComponent<Renderer>();                if (rend)
                    rend.sharedMaterial.color = matColor;
            }
        }        EditorUtility.FocusProjectWindow();
    }    void OnInspectorUpdate()
    {
        Repaint();
    }
}
```


            
