This version of Unity is unsupported.



# [SceneManager](SceneManagement.SceneManager.html).sceneUnloaded




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
| value | Use a subscription of either a UnityAction<Scene> or a method that takes a Scene type argument. |





### Description



Add a delegate to this to get notifications when a Scene has unloaded.





Rather than being called directly this script code shows use of a delegate. This means the [sceneUnloaded](SceneManagement.SceneManager-sceneUnloaded.html) value is added into a list of delegates.

In the script example below a method call is shown.  Specifically a function called OnSceneUnloaded is added to sceneUnloaded.  SceneUnloaded is called when the Scene it is associated with is closed.  At this point SceneUnloaded should be removed from the [sceneUnloaded](SceneManagement.SceneManager-sceneUnloaded.html) list.


              


```
using UnityEngine;
using UnityEngine.SceneManagement;public class SceneLoaded1 : MonoBehaviour
{
    public void Start()
    {
        SceneManager.sceneUnloaded += OnSceneUnloaded;
        Debug.Log("Start: SceneLoaded1");
    }    private void OnSceneUnloaded(Scene current)
    {
        Debug.Log("OnSceneUnloaded: " + current);
    }    void Update()
    {
        if (Input.GetKey("space"))
        {
            Debug.Log("Quitting Scene1");
            ChangeScene();
        }
    }    void ChangeScene()
    {
        Debug.Log("Changing to Scene2");        SceneManager.LoadScene("Scene2");
    }    void OnDestroy()
    {
        Debug.Log("OnDestroy");
    }
}
```





`SceneLoaded2` simply announces that this is the active Scene.


              


```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;public class SceneLoaded2 : MonoBehaviour
{
    public void Start()
    {
        Debug.Log("SceneLoaded2");
    }
}
```


            
