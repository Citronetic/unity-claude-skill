This version of Unity is unsupported.



# [Event](Event.html).capsLock




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












                    public bool capsLock;






### Description



Is Caps Lock on? (Read Only)





Returns true if Caps Lock is switched on.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Creates a Label and prints CapsLock on/off
    // depending on the state of the capslock key.
    void OnGUI()
    {
        Event e = Event.current;
        if (e.capsLock)
        {
            GUI.Label(new Rect(10, 10, 100, 20), "CapsLock on.");
        }
        else
        {
            GUI.Label(new Rect(10, 10, 100, 20), "CapsLock off.");
        }
    }
}
```


            
