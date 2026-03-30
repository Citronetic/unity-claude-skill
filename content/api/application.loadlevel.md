This version of Unity is unsupported.


                  **Method group is Obsolete**





# [Application](Application.html).LoadLevel




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













                        **Obsolete**
                        Use SceneManager.LoadScene.




## Declaration

public static void LoadLevel(int index);




                        **Obsolete**
                        Use SceneManager.LoadScene.




## Declaration

public static void LoadLevel(string name);






### Parameters



| Parameter | Description |
| --- | --- |
| index | The level to load. |
| name | The name of the level to load. |





### Description



**Note**: This is now obsolete. Use [SceneManager.LoadScene](SceneManagement.SceneManager.LoadScene.html) instead.





Before you can load a level you have to add it to the list of levels used in the game.
Use `File->Build Settings...` in Unity and add the levels you need to the level list there.
MonoBehaviour.OnLevelWasLoaded is called on all active game objects after the level has been loaded.
Refer to [Order of execution for event functions](../Manual/execution-order.html) for more information regarding the calling sequence once a level is loaded.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void LoadHighScoreLevel()
    {
        // Load the level named "HighScore".
        Application.LoadLevel("HighScore");
    }
}
```





When loading a new level all game objects that have been loaded before are destroyed.
If you want to let an object survive when loading a new level, use [Object.DontDestroyOnLoad](Object.DontDestroyOnLoad.html).
Calling LoadLevel will update  Application.loadedLevel and Application.loadedLevelName.

**Note:** Actual level change happens in the beginning of the next frame at the Inititialization stage prior to the first [MonoBehaviour.FixedUpdate](MonoBehaviour.FixedUpdate.html) call (refer to [Order of execution for event functions](../Manual/execution-order.html)):



          - All game objects are being destroyed starting from root objects. OnDisable (if enabled) and OnDestroy callbacks are called for scripts.

          - New objects are being initialized. `Awake`, `OnEnable`, `Start` callbacks are called for scripts.





Additional resources: Application.LoadLevelAsync, Application.LoadLevelAdditive, Application.LoadLevelAdditiveAsync.


            
