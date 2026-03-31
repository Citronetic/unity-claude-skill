This version of Unity is unsupported.



# [Event](Event.html).pointerType




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












                    public [PointerType](PointerType.html) pointerType;






### Description



The type of pointer that created this event (for example, mouse, touch screen, pen).





When a user uses a pen, some mouse events are often mixed with pen events in the event stream, and you can't distinguish them by type because mouse and pen events share the same [EventType](EventType.html). Instead, use [PointerType](PointerType.html) to distinguish them. Otherwise, Unity processes all incoming mouse events as pen events, which can lead to unexpected behavior because the mouse events (pointerType = Mouse) do not have pen event fields, like [PenStatus](PenStatus.html), set.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void OnGUI()
    {
        Event m_Event = Event.current;        if (m_Event.type == EventType.MouseDown)
        {
            if (m_Event.pointerType == PointerType.Pen)     //Check if it's a pen event.
                Debug.Log("Pen Down.");
            else
                Debug.Log("Mouse Down.");                   //If it's not a pen event, it's a mouse event.
        }
    }
}
```


            
