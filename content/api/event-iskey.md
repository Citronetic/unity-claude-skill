This version of Unity is unsupported.



# [Event](Event.html).isKey




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












                    public bool isKey;






### Description



Is this event a keyboard event? (Read Only)


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Detects any keyboard event
    void OnGUI()
    {
        Event e = Event.current;
        if (e.isKey)
        {
            Debug.Log("Detected a keyboard event!");
        }
    }
}
```


            
