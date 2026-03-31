This version of Unity is unsupported.



# [GUIStyleState](GUIStyleState.html).background




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












                    public [Texture2D](Texture2D.html) background;






### Description



The background image used by GUI elements in this given state.





See also: [scaledBackgrounds](GUIStyleState-scaledBackgrounds.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Assigns a texture to customStyles[0] for when the control
    // is pressed down    Texture2D aTexture;    void OnGUI()
    {
        if (!aTexture)
        {
            Debug.LogError("Assign a texture on the editor first");
            return;
        }
        if (GUI.skin.customStyles.Length > 0)
        {
            GUI.skin.customStyles[0].active.background = aTexture;
        }
    }
}
```


            
