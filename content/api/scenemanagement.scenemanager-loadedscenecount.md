This version of Unity is unsupported.



# [SceneManager](SceneManagement.SceneManager.html).loadedSceneCount




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












                    public static int loadedSceneCount;






### Description



The number of loaded Scenes.





Returns the current number of loaded Scenes. This doesn't include the Scenes that are currently loading or unloading. For the total number of Scenes see [SceneManager.sceneCount](SceneManagement.SceneManager-sceneCount.html).


              


```
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEditor;public class Example
{
    // adds a custom menu item which displays the number of open Scenes in a Dialogue Box
    [MenuItem("SceneExample/Number Of Scenes")]
    public static void NumberOfScenes()
    {
        EditorUtility.DisplayDialog("Number of loaded Scenes:", SceneManager.loadedSceneCount.ToString(), "OK");
    }
}
```


            
