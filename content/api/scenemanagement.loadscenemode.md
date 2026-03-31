This version of Unity is unsupported.



# LoadSceneMode





enumeration


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



Used when loading a Scene in a player.





Use LoadSceneMode to choose what type of Scene loads when using [SceneManager.LoadScene](SceneManagement.SceneManager.LoadScene.html). The available modes are Single and Additive.

Single mode loads a standard Unity Scene which then appears on its own in the Hierarchy window. Additive loads a Scene which appears in the Hierarchy window while another is active.


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





### Properties



| Property | Description |
| --- | --- |
| Single | Closes all current loaded Scenes
                and loads a Scene. |
| Additive | Adds the Scene to the current loaded Scenes. |


            
