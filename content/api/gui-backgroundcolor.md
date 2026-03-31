This version of Unity is unsupported.



# [GUI](GUI.html).backgroundColor




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












                    public static [Color](Color.html) backgroundColor;






### Description



Global tinting color for all background elements rendered by the GUI.





This gets multiplied by [color](GUI-color.html).

Additional resources: [contentColor](GUI-contentColor.html), [color](GUI-color.html).

[Image: image]

*Yellow Background color applied to a button.*


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void OnGUI()
    {
        GUI.backgroundColor = Color.yellow;
        GUI.Button(new Rect(10, 10, 70, 30), "A button");
    }
}
```


            
