This version of Unity is unsupported.



# [Object](Object.html).DontDestroyOnLoad




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




                [Switch to Manual](../Manual/class-Object.html)










## Declaration

public static void DontDestroyOnLoad([Object](Object.html) target);






### Parameters



| Parameter | Description |
| --- | --- |
| target | An Object not destroyed on Scene change. |





### Description



Do not destroy the target Object when loading a new [Scene](SceneManagement.Scene.html).





The load of a new [Scene](SceneManagement.Scene.html) destroys all current [Scene](SceneManagement.Scene.html) objects. Call [Object.DontDestroyOnLoad](Object.DontDestroyOnLoad.html) to preserve an Object during scene loading. If the target Object is a component or [GameObject](GameObject.html), Unity also preserves all of the [Transform](Transform.html)’s children. [Object.DontDestroyOnLoad](Object.DontDestroyOnLoad.html) only works for root GameObjects or components on root GameObjects.
[Object.DontDestroyOnLoad](Object.DontDestroyOnLoad.html) does not return a value.

The following example script uses [Object.DontDestroyOnLoad](Object.DontDestroyOnLoad.html). The example has `scene1` which starts playing background music from an [AudioSource](AudioSource.html). The music continues when `scene2` loads. Switch between scenes using a button.

To implement this example, create two new [Scene](SceneManagement.Scene.html)s, named `scene1` and `scene2`.  Open `scene1` and add the `SceneSwap.cs` script to an empty [GameObject](GameObject.html) and name it `Menu`.  Next, add `DontDestroy.cs` to a new [GameObject](GameObject.html) and name it `BackgroundMusic`. Add an [AudioSource](AudioSource.html) to `BackgroundMusic` - `Add Component > Audio > Audio Source` - and import an [AudioClip](AudioClip.html) into your Project. Assign the [AudioClip](AudioClip.html) to the [AudioSource](AudioSource.html)’s [AudioClip](AudioClip.html) field.  Create a tag, call it `music`, and add it to `BackgroundMusic`. Switch to `scene2`. Again add `SceneSwap.cs` to a new [GameObject](GameObject.html) and name it `Menu`.  Save the Project. Return to `scene1` and run the Project from the `Editor`.

`SceneSwap.cs` script:


              


```
using UnityEngine;
using UnityEngine.SceneManagement;// Object.DontDestroyOnLoad example.
//
// Two scenes call each other. This happens when OnGUI button is clicked.
// scene1 will load scene2; scene2 will load scene1. Both scenes have
// the Menu GameObject with the SceneSwap.cs script attached.
//
// AudioSource plays an AudioClip as the game runs. This is on the
// BackgroundMusic GameObject which has a music tag.  The audio
// starts in AudioSource.playOnAwake. The DontDestroy.cs script
// is attached to BackgroundMusic.public class SceneSwap : MonoBehaviour
{
    private void OnGUI()
    {
        int xCenter = (Screen.width / 2);
        int yCenter = (Screen.height / 2);
        int width = 400;
        int height = 120;        GUIStyle fontSize = new GUIStyle(GUI.skin.GetStyle("button"));
        fontSize.fontSize = 32;        Scene scene = SceneManager.GetActiveScene();        if (scene.name == "scene1")
        {
            // Show a button to allow scene2 to be switched to.
            if (GUI.Button(new Rect(xCenter - width / 2, yCenter - height / 2, width, height), "Load second scene", fontSize))
            {
                SceneManager.LoadScene("scene2");
            }
        }
        else
        {
            // Show a button to allow scene1 to be returned to.
            if (GUI.Button(new Rect(xCenter - width / 2, yCenter - height / 2, width, height), "Return to first scene", fontSize))
            {
                SceneManager.LoadScene("scene1");
            }
        }
    }
}
```





`DontDestroy.cs` script:


              


```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;// Object.DontDestroyOnLoad example.
//
// This script example manages the playing audio. The GameObject with the
// "music" tag is the BackgroundMusic GameObject. The AudioSource has the
// audio attached to the AudioClip.public class DontDestroy : MonoBehaviour
{
    void Awake()
    {
        GameObject[] objs = GameObject.FindGameObjectsWithTag("music");        if (objs.Length > 1)
        {
            Destroy(this.gameObject);
        }        DontDestroyOnLoad(this.gameObject);
    }
}
```


            
