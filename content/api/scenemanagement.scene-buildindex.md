This version of Unity is unsupported.



# [Scene](SceneManagement.Scene.html).buildIndex




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












                    public int buildIndex;






### Description



Return the index of the Scene in the Build Settings.





[Scene.buildIndex](SceneManagement.Scene-buildIndex.html) varies from zero to the number of [Scene](SceneManagement.Scene.html)s in the `Build Settings` minus one. This is because indexes start at zero, so the first [Scene](SceneManagement.Scene.html) is at position zero in the [buildIndex](SceneManagement.Scene-buildIndex.html).  For example, five [Scene](SceneManagement.Scene.html)s in the `Build Settings` have an index from zero to four.

Unity ignores any numbers in a `Scene` name. For example, if you add a `Scene` called `scene15` to a list of five [Scene](SceneManagement.Scene.html)s in the `Build Settings`, Unity gives it a [buildIndex](SceneManagement.Scene-buildIndex.html) of 5.

A `Scene` that is not added to the `Scenes in Build` window returns a [buildIndex](SceneManagement.Scene-buildIndex.html) one more than the highest in the list.  For example, if you don’t add a  `Scene` to a `Scenes in Build` window that already has 6 Scenes in it, then [Scene.buildIndex](SceneManagement.Scene-buildIndex.html) returns 6 as its index .

If the `Scene` is loaded through an `AssetBundle`, [Scene.buildIndex](SceneManagement.Scene-buildIndex.html) returns -1.


              


```
using UnityEngine;
using UnityEngine.SceneManagement;// Show the buildIndex for the current script.
//
// The Build Settings window shows 5 added Scenes.  These have buildIndex values from
// 0 to 4. Each Scene has a version of this script applied.
//
// In the Project, create 5 Scenes called scene1, scene2, scene3, scene4 and scene5.
// In each Scene add an empty GameObject and attach this script to it.
//
// Each Scene randomly switches to a different Scene when the button is clicked.public class ExampleScript : MonoBehaviour
{
    Scene scene;    void Start()
    {
        scene = SceneManager.GetActiveScene();
        Debug.Log("Active Scene name is: " + scene.name + "\nActive Scene index: " + scene.buildIndex);
    }    void OnGUI()
    {
        GUI.skin.button.fontSize = 20;        if (GUI.Button(new Rect(10, 80, 180, 60), "Change from scene " + scene.buildIndex))
        {
            int nextSceneIndex = Random.Range(0, 4);
            SceneManager.LoadScene(nextSceneIndex, LoadSceneMode.Single);
        }
    }
}
```


            
