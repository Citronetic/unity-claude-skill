This version of Unity is unsupported.



# [GUIStyle](GUIStyle.html).name




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




                [Switch to Manual](../Manual/class-GUIStyle.html)







                    public string name;






### Description



The name of this GUIStyle. Used for getting them based on name.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Prints the name of the style.    void OnGUI()
    {
        Debug.Log(GUI.skin.button.name);
    }
}
```


            
