This version of Unity is unsupported.



# PenStatus





enumeration


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



















### Description



Options for specifying the state of the pen. For example, whether the pen is in contact with the screen or tablet, whether the pen is inverted, and whether buttons are pressed. You can combine states using bitwise OR operators.





Before you process an event as a pen event, you should check the [PointerType](PointerType.html) of a mouse event (e.g. [EventType.MouseDown](EventType.MouseDown.html)).

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
            {
                if (m_Event.penStatus == PenStatus.None)
                    Debug.Log("Pen is in a neutral state.");
                else if (m_Event.penStatus == PenStatus.Inverted)
                    Debug.Log("The pen is inverted.");
                else if (m_Event.penStatus == PenStatus.Barrel)
                    Debug.Log("Barrel button on pen is down.");
                else if (m_Event.penStatus == PenStatus.Contact)
                    Debug.Log("Pen is in contact with screen or tablet.");
                else if (m_Event.penStatus == PenStatus.Eraser)
                    Debug.Log("Pen is in erase mode.");
            }
        else
            Debug.Log("Mouse Down.");                   //If it's not a pen event, it's a mouse event.
        }
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| None | The pen is in a neutral state. |
| Contact | The pen is in contact with the screen or tablet. |
| Barrel | The barrel button on the pen is currently pressed. |
| Inverted | The pen is inverted. |
| Eraser | The pen is in erase mode. |


            
