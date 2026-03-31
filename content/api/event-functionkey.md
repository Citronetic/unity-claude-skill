This version of Unity is unsupported.



# [Event](Event.html).functionKey




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












                    public bool functionKey;






### Description



Is the current keypress a function key? (Read Only)





Returns true if the current keypress is an arrow key, page up, page down, backspace, etc. key.
If this key needs special processing in order to work in text editing, `functionKey` is on.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Detects if a function Key was pressed. If a
    // function key was pressed, prints its key code.
    void OnGUI()
    {
        Event e = Event.current;
        if (e.functionKey)
        {
            Debug.Log("Pressed: " + e.keyCode);
        }
    }
}
```


            
