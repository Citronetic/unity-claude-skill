This version of Unity is unsupported.



# [EventType](EventType.html).ExecuteCommand




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



Execute a special command (eg. copy & paste).





"Copy", "Cut", "Paste", "Delete", "FrameSelected", "Duplicate", "SelectAll" and so on.
Sent only in the editor.
Example.  Checking that that a frame has the focus:


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void OnGUI()
    {
        //implement frame selection
        Event e = Event.current;
        if (e.type == EventType.ExecuteCommand ||
            e.type == EventType.ValidateCommand)
        {
            if (Event.current.commandName == "FrameSelected")
                Debug.Log("frame selected");
        }
    }
}
```





Additional resources: [Event.commandName](Event-commandName.html), [EventType.ValidateCommand](EventType.ValidateCommand.html).


            
