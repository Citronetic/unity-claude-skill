This version of Unity is unsupported.



# [SceneManager](SceneManagement.SceneManager.html).sceneLoaded




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



















### Parameters



| Parameter | Description |
| --- | --- |
| value | A method with the signature MyMethod(Scene, LoadSceneMode). |





### Description



Assign a custom callback to this event to get notifications when a Scene has loaded.





Create a custom callback method to receive the notification and assign it to the `SceneManager.sceneLoaded` event. The callback must have the required signature, taking a [Scene](SceneManagement.Scene.html) and a [LoadSceneMode](SceneManagement.LoadSceneMode.html) as input parameters.

The code example below defines a custom calllback method called `OnSceneLoaded` with the required signature. It assigns `OnSceneLoaded` to `SceneManager.sceneLoaded` in the `OnEnable` callback and unassigns it in the `OnDisable` callback.

The code example and comment annotations demonstrate the execution order of the callbacks. Unity raises the `SceneManager.sceneLoaded` event and invokes the associated callback after `OnEnable` but before `Start`.

Additional resources: [Details of disabling domain and scene reload](../Manual/configurable-enter-play-mode-details.html)


              


```
using UnityEngine;
using UnityEngine.SceneManagement;public class ExampleCode : MonoBehaviour
{
    // called first
    void Awake()
    {
        Debug.Log("Awake");
    }    // called second
    void OnEnable()
    {
        Debug.Log("OnEnable called");
        SceneManager.sceneLoaded += OnSceneLoaded;
    }    // called third
    void OnSceneLoaded(Scene scene, LoadSceneMode mode)
    {
        Debug.Log("OnSceneLoaded: " + scene.name);
        Debug.Log(mode);
    }    // called fourth
    void Start()
    {
        Debug.Log("Start");
    }    // called when the game is terminated
    void OnDisable()
    {
        Debug.Log("OnDisable");
        SceneManager.sceneLoaded -= OnSceneLoaded;
    }
}
```


            
