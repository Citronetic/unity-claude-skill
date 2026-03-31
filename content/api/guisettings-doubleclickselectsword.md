This version of Unity is unsupported.



# [GUISettings](GUISettings.html).doubleClickSelectsWord




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












                    public bool doubleClickSelectsWord;






### Description



Should double-clicking select words in text fields.





By default is set to true.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    string str = "This is a string with \n two lines of text";    void OnGUI()
    {
        GUI.skin.settings.doubleClickSelectsWord = false;
        str = GUILayout.TextArea(str);
    }
}
```


            
