This version of Unity is unsupported.



# [AndroidGame](Android.AndroidGame.html).SetGameState




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

public static void SetGameState(bool isLoading,
[Android.AndroidGameState](Android.AndroidGameState.html) gameState);






## Declaration

public static void SetGameState(bool isLoading,
[Android.AndroidGameState](Android.AndroidGameState.html) gameState,
int label,
int quality);






### Parameters



| Parameter | Description |
| --- | --- |
| isLoading | Whether the game is in the loading state. |
| gameState | AndroidGameState state. |
| label | Developer supplied custom value, e.g. for the current level. |
| quality | Developer supplied custom value, e.g. for the current quality level. |





### Description



Calls [setGameState()](https://developer.android.com/reference/android/app/GameManager#setGameState(android.app.GameState)) in the Android application to specify the loading status. Requires API level 33 (Android 13).





When target device does not support the required API level, no action is taken.


            
