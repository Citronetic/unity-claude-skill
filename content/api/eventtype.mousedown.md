This version of Unity is unsupported.



# [EventType](EventType.html).MouseDown




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



Mouse button was pressed.





This event gets sent when any mouse button is pressed. Use [Event.button](Event-button.html) to determine which button was pressed down.

Additional resources: [EventType](EventType.html), [Event.Use](Event.Use.html).


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


            
