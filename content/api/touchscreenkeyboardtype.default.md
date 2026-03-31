This version of Unity is unsupported.



# [TouchScreenKeyboardType](TouchScreenKeyboardType.html).Default




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



















### Description



The default keyboard layout of the target platform.





An iOS example is shown below:


              


```
using UnityEngine;
using UnityEngine.iOS;public class ExampleClass : MonoBehaviour
{
    private TouchScreenKeyboard keyboard;    protected void OnGUI()
    {
        GUI.skin.button.fontSize = 36;
        if (GUILayout.Button("Keyboard"))
        {
            keyboard = TouchScreenKeyboard.Open("Hello", TouchScreenKeyboardType.Default);
        }
    }
}
```


            
