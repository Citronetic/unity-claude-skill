This version of Unity is unsupported.



# [Event](Event.html).button




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












                    public int button;






### Description



Which mouse button was pressed.





0 means left mouse button, 1 means right mouse button, 2 means middle mouse button.
Used in [EventType.MouseDown](EventType.MouseDown.html) and [EventType.MouseUp](EventType.MouseUp.html) events.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Detect which mouse button is currently pressed
    // and print it.
    void OnGUI()
    {
        Event e = Event.current;
        if (e.button == 0 && e.isMouse)
        {
            Debug.Log("Left Click");
        }
        else if (e.button == 1)
        {
            Debug.Log("Right Click");
        }
        else if (e.button == 2)
        {
            Debug.Log("Middle Click");
        }
        else if (e.button > 2)
        {
            Debug.Log("Another button in the mouse clicked");
        }
    }
}
```


            
