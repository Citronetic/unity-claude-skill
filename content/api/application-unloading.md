This version of Unity is unsupported.



# [Application](Application.html).unloading




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



Unity raises this event when the Player is unloading.





Add an event handler to this event if you want to trigger events to [Application.Unload](Application.Unload.html) calls. The event is raised after a call to [Application.Unload](Application.Unload.html) is made, right before the unloading starts.

**Note:**  The `Application.unloading` event is only supported on iOS, Android, and Universal Windows Platform.


              


```
using UnityEngine;
using System.Collections;// Unload Unity when the user clicks the button. Exit is not applied to the application.public class ExampleClass : MonoBehaviour
{
    void OnGUI()
    {
        if (GUI.Button(new Rect(10, 10, 200, 75), "Unload"))
            Application.Unload();
    }    static void OnUnload()
    {
        Debug.Log("Unloading the Player");
    }    [RuntimeInitializeOnLoadMethod]
    static void RunOnStart()
    {
        Application.unloading += OnUnload;
    }
}
```





Additional resources: [Application.Unload](Application.Unload.html).


            
