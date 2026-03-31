This version of Unity is unsupported.



# [GUI](GUI.html).contentColor




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












                    public static [Color](Color.html) contentColor;






### Description



Tinting color for all text rendered by the GUI.





This gets multiplied by [color](GUI-color.html).

Additional resources: [backgroundColor](GUI-backgroundColor.html), [color](GUI-color.html).

[Image: image]

*Yellow content color (font) in a button.*


              


```
// Tints with yellow the letters of the button.using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void OnGUI()
    {
        GUI.contentColor = Color.yellow;
        GUI.Button(new Rect(10, 10, 70, 30), "A button");
    }
}
```


            
