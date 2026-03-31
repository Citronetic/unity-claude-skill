This version of Unity is unsupported.



# [Event](Event.html).commandName




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












                    public string commandName;






### Description



The name of an ExecuteCommand or ValidateCommand Event.





Available commands are:

"Copy", "Cut", "Paste",
"Delete", "SoftDelete", "Duplicate",
"FrameSelected", "FrameSelectedWithLock",
"SelectAll", "Find" and "FocusProjectWindow".

Sent only in the editor.

Additional resources: [EventType.ExecuteCommand](EventType.ExecuteCommand.html), [EventType.ValidateCommand](EventType.ValidateCommand.html).


              


```
using UnityEngine;public class EventCmdNameExample : MonoBehaviour
{
    // Detects commands executed and prints them.
    void OnGUI()
    {
        Event e = Event.current;        if (e.commandName != "")
            Debug.Log("Command recognized: " + e.commandName);
    }
}
```


            
