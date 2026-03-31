This version of Unity is unsupported.



# [TouchScreenKeyboard](TouchScreenKeyboard.html).text




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












                    public string text;






### Description



Returns the text displayed by the input field of the keyboard.





This value can be accessed at any moment, even if user has not yet finished input process.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public string inputText = "text";
    private TouchScreenKeyboard keyboard;
    // Updates button's text while user is typing
    void OnGUI()
    {
        if (GUI.Button(new Rect(0, 10, 200, 32), inputText))
            keyboard = TouchScreenKeyboard.Open(inputText);        if (keyboard != null)
            inputText = keyboard.text;
    }
}
```


            
