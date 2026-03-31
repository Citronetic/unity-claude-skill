This version of Unity is unsupported.



# [SceneManager](SceneManagement.SceneManager.html).LoadSceneAsync




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

public static [AsyncOperation](AsyncOperation.html) LoadSceneAsync(string sceneName,
[SceneManagement.LoadSceneMode](SceneManagement.LoadSceneMode.html) mode = LoadSceneMode.Single);






## Declaration

public static [AsyncOperation](AsyncOperation.html) LoadSceneAsync(int sceneBuildIndex,
[SceneManagement.LoadSceneMode](SceneManagement.LoadSceneMode.html) mode = LoadSceneMode.Single);






## Declaration

public static [AsyncOperation](AsyncOperation.html) LoadSceneAsync(string sceneName,
[SceneManagement.LoadSceneParameters](SceneManagement.LoadSceneParameters.html) parameters);






## Declaration

public static [AsyncOperation](AsyncOperation.html) LoadSceneAsync(int sceneBuildIndex,
[SceneManagement.LoadSceneParameters](SceneManagement.LoadSceneParameters.html) parameters);






### Parameters



| Parameter | Description |
| --- | --- |
| sceneName | Name or path of the Scene to load. |
| sceneBuildIndex | Index of the Scene in the Build Settings to load. |
| mode | If LoadSceneMode.Single then all current Scenes will be unloaded before loading. |
| parameters | Struct that collects the various parameters into a single place except for the name and index. |





### Returns



**AsyncOperation**
        Use the [AsyncOperation](AsyncOperation.html) to determine if the operation has completed.





### Description



Loads the Scene asynchronously in the background.





You can provide the full Scene path, the path shown in the Build Settings window, or just the Scene name. If you only provide the Scene name, Unity loads the first Scene in the list that matches. If you have multiple Scenes with the same name but different paths, you should use the full Scene path in the Build Settings.

Examples of supported formats:

`"Scene1"`

`"Scenes/Scene1"`

`"Scenes/Others/Scene1"`

`"Assets/scenes/others/scene1.unity"`

**Note:** Scene name input is not case-sensitive.
If you call this method with an invalid **sceneName** or **sceneBuildIndex**, Unity throws an exception.

**Note:** The name of the Scene to load can be case insensitive.

If a single mode scene is loaded, Unity calls Resources.UnloadUnusedAssets automatically.


              


```
using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;public class Example : MonoBehaviour
{
    void Update()
    {
        // Press the space key to start coroutine
        if (Input.GetKeyDown(KeyCode.Space))
        {
            // Use a coroutine to load the Scene in the background
            StartCoroutine(LoadYourAsyncScene());
        }
    }    IEnumerator LoadYourAsyncScene()
    {
        // The Application loads the Scene in the background as the current Scene runs.
        // This is particularly good for creating loading screens.
        // You could also load the Scene by using sceneBuildIndex. In this case Scene2 has
        // a sceneBuildIndex of 1 as shown in Build Settings.        AsyncOperation asyncLoad = SceneManager.LoadSceneAsync("Scene2");        // Wait until the asynchronous scene fully loads
        while (!asyncLoad.isDone)
        {
            yield return null;
        }
    }
}
```


            
