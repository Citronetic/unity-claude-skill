This version of Unity is unsupported.



# [Event](Event.html).keyCode




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












                    public [KeyCode](KeyCode.html) keyCode;






### Description



The raw key code for keyboard events.





Used in [EventType.KeyDown](EventType.KeyDown.html) and [EventType.KeyUp](EventType.KeyUp.html) events; this returns [KeyCode](KeyCode.html) value
that matches the physical keyboard key. Use this for handling cursor keys,
function keys etc.

Additional resources: [Event.character](Event-character.html).


              


```
// Detects keys pressed and prints their keycodeusing UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void OnGUI()
    {
        Event e = Event.current;
        if (e.isKey)
        {
            Debug.Log("Detected key code: " + e.keyCode);
        }
    }
}
```


            
