This version of Unity is unsupported.



# [Event](Event.html).delta




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












                    public [Vector2](Vector2.html) delta;






### Description



The relative movement of the mouse compared to last event.





Used in [EventType.MouseMove](EventType.MouseMove.html), [EventType.MouseDrag](EventType.MouseDrag.html), [EventType.ScrollWheel](EventType.ScrollWheel.html) events.

Additional resources: [Event.mousePosition](Event-mousePosition.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Move the scroll wheel to determine
    // the X & Y scrolling amount.
    void OnGUI()
    {
        Event e = Event.current;
        if (e.isMouse)
        {
            Debug.Log(e.delta);
        }
    }
}
```


            
