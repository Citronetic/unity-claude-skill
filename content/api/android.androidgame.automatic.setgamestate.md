This version of Unity is unsupported.



# [AndroidGame.Automatic](Android.AndroidGame.Automatic.html).SetGameState




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















## Declaration

public static void SetGameState([Android.AndroidGameState](Android.AndroidGameState.html) mode);






### Parameters



| Parameter | Description |
| --- | --- |
| mode | AndroidGameState value. |





### Description



Sets the current [AndroidGameState](Android.AndroidGameState.html) to be used for [Automated game state hinting in Unity](../Manual/android-game-state-hinting.html). Requires API level 33 (Android 13).





You can set the mode parameter based on the current game state. For example, you can use [AndroidGameState.None](Android.AndroidGameState.None.html) for displaying the game menu and [AndroidGameState.GamePlayInterruptible](Android.AndroidGameState.GamePlayInterruptible.html) or [AndroidGameState.GamePlayUninterruptible](Android.AndroidGameState.GamePlayUninterruptible.html) during the gameplay.

Once set, the mode remains unchanged until you call this method again. However, if the game is interrupted by a full-screen video or a full-screen ad, the mode automatically changes to [AndroidGameState.Content](Android.AndroidGameState.Content.html).

When target device does not support the required API level, no action is taken.


              


```
using UnityEngine;
using UnityEngine.Android;public class MainMenu : MonoBehaviour
{
    void Start()
    {
        AndroidGame.Automatic.SetGameState(AndroidGameState.None);
    }
}
```


            
