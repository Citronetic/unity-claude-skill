This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).OnGUI()




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




                [Switch to Manual](../Manual/class-MonoBehaviour.html)














### Description



OnGUI is called for rendering and handling GUI events.





OnGUI is the only function that can implement the ["Immediate Mode" GUI (IMGUI)](../Manual/GUIScriptingGuide.html) system for rendering and handling GUI events. Your OnGUI implementation might be called several times per frame (one call per event). For more information on GUI events see the [Event](Event.html) reference.
If the MonoBehaviour's enabled property is set to false, OnGUI() will not be called.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void OnGUI()
    {
        if (GUI.Button(new Rect(10, 10, 150, 100), "I am a button"))
        {
            print("You clicked the button!");
        }
    }
}
```





For more information, see the [GUI Scripting Guide](../Manual/GUIScriptingGuide.html).


            
