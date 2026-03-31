This version of Unity is unsupported.



# [GUIContent](GUIContent.html).tooltip




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












                    public string tooltip;






### Description



The tooltip of this element.





The tooltip associated with this content. Read GUItooltip to get the tooltip of the gui element the user is currently over.


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    void OnGUI()
    {
        GUI.Button(new Rect(0, 0, 100, 20), new GUIContent("A Button", "This is the tooltip"));
        // If the user hovers the mouse over the button, the global tooltip gets set
        GUI.Label(new Rect(0, 40, 100, 40), GUI.tooltip);
    }
}
```


            
