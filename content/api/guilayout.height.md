This version of Unity is unsupported.



# [GUILayout](GUILayout.html).Height




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

public static [GUILayoutOption](GUILayoutOption.html) Height(float height);






### Description



Option passed to a control to give it an absolute height.





**Note:** This option will override the Automatic height Layout parameter

[Image: image]

*Fixed Height for a GUI Control.*


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    // Draws a  button with a  fixed height
    void OnGUI()
    {
        GUILayout.Button("A Button with fixed height", GUILayout.Height(300));
    }
}
```


            
