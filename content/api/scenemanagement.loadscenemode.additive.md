This version of Unity is unsupported.



# [LoadSceneMode](SceneManagement.LoadSceneMode.html).Additive




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



Adds the Scene to the current loaded Scenes.





[LoadSceneMode.Additive](SceneManagement.LoadSceneMode.Additive.html) loads a Scene without unloading currently loaded Scenes. The additively loaded Scene appears in the Hierarchy window while another is active. To unload one of the currently loaded Scenes, see [SceneManager.UnloadSceneAsync](SceneManagement.SceneManager.UnloadSceneAsync.html) for more information.
Additional resources: [SceneManager.LoadScene](SceneManagement.SceneManager.LoadScene.html).
**Note**: If you are using light probes, you must run LightProbes.Tetrahedralize() afterwards.


              


```
using UnityEngine;
using UnityEngine.SceneManagement;public class Example : MonoBehaviour
{
    void OnGUI()
    {
        //This displays a Button on the screen at position (20,30), width 150 and height 50. The button’s text reads the last parameter. Press this for the SceneManager to load the Scene.
        if (GUI.Button(new Rect(20, 30, 150, 30), "Other Scene Single"))
        {
            //The SceneManager loads your new Scene as a single Scene (not overlapping). This is Single mode.
            SceneManager.LoadScene("YourScene", LoadSceneMode.Single);
        }        //Whereas pressing this Button loads the Additive Scene.
        if (GUI.Button(new Rect(20, 60, 150, 30), "Other Scene Additive"))
        {
            //SceneManager loads your new Scene as an extra Scene (overlapping the other). This is Additive mode.
            SceneManager.LoadScene("YourScene", LoadSceneMode.Additive);
        }
    }
}
```


            
