This version of Unity is unsupported.



# [GUILayout](GUILayout.html).ExpandWidth




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

public static [GUILayoutOption](GUILayoutOption.html) ExpandWidth(bool expand);






### Description



Option passed to a control to allow or disallow horizontal expansion.





If this is true, the enclosed UI elements can expand to fill the available horizontal width.

[Image: image].


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void OnGUI()
    {
        GUILayout.BeginVertical();
        GUILayout.Button("Short Button", GUILayout.ExpandWidth(false));
        GUILayout.Button("Very very long Button");
        GUILayout.EndVertical();
    }
}
```


            
