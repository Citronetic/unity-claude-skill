This version of Unity is unsupported.



# [GUISkin](GUISkin.html).font




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




                [Switch to Manual](../Manual/class-GUISkin.html)







                    public [Font](Font.html) font;






### Description



The default font to use for all styles.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Modifies the font only of the current GUISkin.    public Font font;    void OnGUI()
    {
        if (!font)
        {
            Debug.LogError("No font found, assign one in the inspector.");
            return;
        }
        GUI.skin.font = font;        GUILayout.Label("This is a label with the font");
        GUILayout.Button("And this is a button");
    }
}
```


            
