This version of Unity is unsupported.



# [Event](Event.html).command




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












                    public bool command;






### Description



Is Command/Windows key held down? (Read Only)





On Windows, this returns true if any Windows key is held down.

On Mac, this returns true if any Command key is held down.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Prints Command/Windows key was pressed depending on the
    // platform where this script is running.
    void OnGUI()
    {
        Event e = Event.current;
        if (e.command)
        {
            if (Application.platform == RuntimePlatform.OSXEditor)
            {
                Debug.Log("Command key was pressed");
            }
            else if (Application.platform == RuntimePlatform.WindowsEditor)
            {
                Debug.Log("Windows Key was pressed!");
            }
        }
    }
}
```


            
