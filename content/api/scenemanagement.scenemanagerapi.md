This version of Unity is unsupported.



# SceneManagerAPI





class in
          UnityEngine.SceneManagement



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Provides a mechanism to override specific [SceneManager](SceneManagement.SceneManager.html) methods.





Derive from this base class to provide alternative implementations to the C# behavior of specific [SceneManager](SceneManagement.SceneManager.html) methods.

**Warning:** The SceneManagerAPI class is intended for advanced usage.
Only a single implementation can be active at a time (via [SceneManagerAPI.overrideAPI](SceneManagement.SceneManagerAPI-overrideAPI.html)), so its usage could conflict with any other code attempting to use the same mechanism.

The example detects when scene loading is done by index, and logs a warning to switch to loading by scene path.


              


```
using UnityEngine;
using Debug = UnityEngine.Debug;
using UnityEngine.SceneManagement;public class SceneIndexLogger : SceneManagerAPI
{
    [RuntimeInitializeOnLoadMethod]
    static void OnRuntimeMethodLoad()
    {
        SceneManagerAPI.overrideAPI = new SceneIndexLogger();
    }    protected override int GetNumScenesInBuildSettings()
    {
        Debug.LogWarning("SceneManager.GetNumScenesInBuildSettings() called, please load scenes by path to avoid issues when scenes are reordered.");
        return base.GetNumScenesInBuildSettings();
    }    protected override Scene GetSceneByBuildIndex(int buildIndex)
    {
        Debug.Log($"SceneManager.GetSceneByBuildIndex(buildIndex = {buildIndex}) called, please load scenes by path to avoid issues when scenes are reordered.");
        return base.GetSceneByBuildIndex(buildIndex);
    }
}
```





### Static Properties



| Property | Description |
| --- | --- |
| overrideAPI | The specific SceneManagerAPI instance to use to handle overridden SceneManager methods. |





### Protected Methods



| Method | Description |
| --- | --- |
| GetNumScenesInBuildSettings | Override for customizing the behavior of the SceneManager.sceneCountInBuildSettings function. |
| GetSceneByBuildIndex | Override for customizing the behavior of the SceneManager.GetSceneByBuildIndex function. |
| LoadFirstScene | Override for customizing the behavior of loading the first Scene in a stub player build. |
| LoadSceneAsyncByNameOrIndex | Override for customizing the behavior of the SceneManager.LoadScene and SceneManager.LoadSceneAsync functions. |
| UnloadSceneAsyncByNameOrIndex | Override for customizing the behavior of the SceneManager.UnloadSceneAsync function. |


            
