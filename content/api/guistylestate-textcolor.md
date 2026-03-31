This version of Unity is unsupported.



# [GUIStyleState](GUIStyleState.html).textColor




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












                    public [Color](Color.html) textColor;






### Description



The text color used by GUI elements in this state.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Sets the text color to yellow of customStyles[0] when an
    // element is turned on and pressed down
    void OnGUI()
    {
        if (GUI.skin.customStyles.Length > 0)
        {
            GUI.skin.customStyles[0].onActive.textColor = Color.yellow;
        }
    }
}
```


            
