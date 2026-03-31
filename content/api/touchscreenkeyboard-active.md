This version of Unity is unsupported.



# [TouchScreenKeyboard](TouchScreenKeyboard.html).active




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












                    public bool active;






### Description



Is the keyboard visible or sliding into the position on the screen?





Use this property to bring previously hidden keyboard back on the screen.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Hides the keyboard if the device is facing down
    // and resumes input if the device is facing up.    TouchScreenKeyboard keyboard;    void Update()
    {
        if (keyboard != null)
        {
            if (Input.deviceOrientation == DeviceOrientation.FaceDown)
                keyboard.active = false;
            if (Input.deviceOrientation == DeviceOrientation.FaceUp)
                keyboard.active = true;
        }
    }    void OnGUI()
    {
        if (GUI.Button(new Rect(0, 10, 200, 32), "Open keyboard"))
            keyboard = TouchScreenKeyboard.Open("text");
    }
}
```


            
