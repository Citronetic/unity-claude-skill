This version of Unity is unsupported.



# [Event](Event.html).clickCount




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












                    public int clickCount;






### Description



How many consecutive mouse clicks have we received.





Used in [EventType.MouseDown](EventType.MouseDown.html) event; use this to differentiate between a single and double clicks.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void OnGUI()
    {
        Event e = Event.current;
        if (e.isMouse)
        {
            Debug.Log("Mouse clicks: " + e.clickCount);
        }
    }
}
```


            
