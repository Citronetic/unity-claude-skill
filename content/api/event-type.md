This version of Unity is unsupported.



# [Event](Event.html).type




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












                    public [EventType](EventType.html) type;






### Description



The type of event.





Additional resources: [EventType](EventType.html), [GUI Scripting Guide](../Manual/GUIScriptingGuide.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Prints the current event detected.
    void OnGUI()
    {
        Debug.Log("Current event detected: " + Event.current.type);
    }
}
```


            
