This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).OnApplicationFocus(bool)




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














### Parameters



| Parameter | Description |
| --- | --- |
| hasFocus | True if the GameObjects have focus, else False. |





### Description



Sent to all GameObjects when the player gets or loses focus.





[OnApplicationFocus](MonoBehaviour.OnApplicationFocus.html) is called when the application loses or
        gains focus.  Alt-tabbing or Cmd-tabbing can take focus away from the Unity
        application to another desktop application. This causes the GameObjects to receive
        an [OnApplicationFocus](MonoBehaviour.OnApplicationFocus.html) call with the argument set to false.  When the user
        switches back to the Unity application, the GameObjects receive an [OnApplicationFocus](MonoBehaviour.OnApplicationFocus.html)
        call with the argument set to true.

        [OnApplicationFocus](MonoBehaviour.OnApplicationFocus.html) can be a co-routine; to do this, use the yield statement
        in the function. Implemented this way, it is evaluated twice during the initial
        frame: first as an early notification, and secondly during the normal co-routine update step.

On Android, when the on-screen keyboard is enabled, it causes an [OnApplicationFocus](MonoBehaviour.OnApplicationFocus.html)( false ) event.
If you press **Home** when the keyboard is enabled, the [OnApplicationPause](MonoBehaviour.OnApplicationPause.html)() event is called instead of the [OnApplicationFocus](MonoBehaviour.OnApplicationFocus.html)() event.

**Note**: If the Editor is in Play mode, [OnApplicationFocus](MonoBehaviour.OnApplicationFocus.html) is called when the Game view loses or gains focus.
If an external application (meaning an application other than Unity) has focus, and you click a different Editor tab, ::OnApplicationFocus is called twice in one frame.
The first time, [OnApplicationFocus](MonoBehaviour.OnApplicationFocus.html) is called with hasFocus set to true because the Game view regains focus when Unity regains focus.
The second time, [OnApplicationFocus](MonoBehaviour.OnApplicationFocus.html) is called with hasFocus set to false because the Game view loses focus to the Editor tab that was clicked.

To minimize the number of times [OnApplicationFocus](MonoBehaviour.OnApplicationFocus.html) is called when the Editor is in Play mode, and you are using the rest of the Editor, drag the Game view into a floating window.


              


```
using UnityEngine;public class AppPaused : MonoBehaviour
{
    bool isPaused = false;    void OnGUI()
    {
        if (isPaused)
            GUI.Label(new Rect(100, 100, 50, 30), "Game paused");
    }    void OnApplicationFocus(bool hasFocus)
    {
        isPaused = !hasFocus;
    }    void OnApplicationPause(bool pauseStatus)
    {
        isPaused = pauseStatus;
    }
}
```


            
