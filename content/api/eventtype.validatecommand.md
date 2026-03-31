This version of Unity is unsupported.



# [EventType](EventType.html).ValidateCommand




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



Validates a special command (e.g. copy & paste).





"Copy", "Cut", "Paste", "Delete", "FrameSelected", "Duplicate", "SelectAll" and so on.
Sent only in the editor.

Example: Make pasting work in current window or control:


              


```
using UnityEngine;
using UnityEditor;public class Example : MonoBehaviour
{
    void OnGUI()
    {
        //implement frame selection
        Event e = Event.current;
        if (e.type == EventType.ValidateCommand && e.commandName == "Paste")
        {
            Debug.Log("validate paste");
            e.Use(); // without this line we won't get ExecuteCommand
        }        if (e.type == EventType.ExecuteCommand && e.commandName == "Paste")
        {
            Debug.Log("Pasting: " + EditorGUIUtility.systemCopyBuffer);
        }
    }
}
```





Additional resources: [EventType.ExecuteCommand](EventType.ExecuteCommand.html), [Event.commandName](Event-commandName.html).


            
