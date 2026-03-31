This version of Unity is unsupported.



# [GUISettings](GUISettings.html).cursorFlashSpeed




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












                    public float cursorFlashSpeed;






### Description



The speed of text field cursor flashes.





This is how many flashes / second. If you set it to 0, flashing will be disabled. If you set it to -1, the flashing speed will match the system default of the end user.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    string str = "This is a string with \n two lines of text";    void OnGUI()
    {
        GUI.skin.settings.cursorFlashSpeed = 3;
        str = GUILayout.TextArea(str);
    }
}
```


            
