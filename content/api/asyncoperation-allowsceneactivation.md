This version of Unity is unsupported.



# [AsyncOperation](AsyncOperation.html).allowSceneActivation




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












                    public bool allowSceneActivation;






### Description



Allow Scenes to be activated as soon as it is ready.





You can use this with [SceneManager.LoadSceneAsync](SceneManagement.SceneManager.LoadSceneAsync.html) to delay the actual activation of the Scene and unloading of the previous Scene.

When [allowSceneActivation](AsyncOperation-allowSceneActivation.html) is set to false, Unity stops progress at 0.9, and [AsyncOperation.isDone](AsyncOperation-isDone.html) remains false. When [AsyncOperation.allowSceneActivation](AsyncOperation-allowSceneActivation.html) is set to true, [isDone](AsyncOperation-isDone.html) can complete. While [isDone](AsyncOperation-isDone.html) is false, the [AsyncOperation](AsyncOperation.html) queue is stalled. For example, if a LoadSceneAsync.allowSceneActivation is set to false, and another [AsyncOperation](AsyncOperation.html) (e.g. [SceneManager.UnloadSceneAsync](SceneManagement.SceneManager.UnloadSceneAsync.html) ) initializes, Unity does not call the second operation until the first [AsyncOperation.allowSceneActivation](AsyncOperation-allowSceneActivation.html) is set to true.

You should set and use [AsyncOperation.allowSceneActivation](AsyncOperation-allowSceneActivation.html) in coroutine functions. You cannot set and use [AsyncOperation.allowSceneActivation](AsyncOperation-allowSceneActivation.html) within Awake, because this function is not a coroutine.


              


```
//This script lets you load a Scene asynchronously. It uses an asyncOperation to calculate the progress and outputs the current progress to Text (could also be used to make progress bars).//Attach this script to a GameObject
//Create a Button (Create>UI>Button) and a Text GameObject (Create>UI>Text) and attach them both to the Inspector of your GameObject
//In Play Mode, press your Button to load the Scene, and the Text changes depending on progress. Press the space key to activate the Scene.
//Note: The progress may look like it goes straight to 100% if your Scene doesn’t have a lot to load.using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;public class AsyncOperationProgressExample : MonoBehaviour
{
    public Text m_Text;
    public Button m_Button;    void Start()
    {
        //Call the LoadButton() function when the user clicks this Button
        m_Button.onClick.AddListener(LoadButton);
    }    void LoadButton()
    {
        //Start loading the Scene asynchronously and output the progress bar
        StartCoroutine(LoadScene());
    }    IEnumerator LoadScene()
    {
        yield return null;        //Begin to load the Scene you specify
        AsyncOperation asyncOperation = SceneManager.LoadSceneAsync("Scene3");
        //Don't let the Scene activate until you allow it to
        asyncOperation.allowSceneActivation = false;
        Debug.Log("Pro :" + asyncOperation.progress);
        //When the load is still in progress, output the Text and progress bar
        while (!asyncOperation.isDone)
        {
            //Output the current progress
            m_Text.text = "Loading progress: " + (asyncOperation.progress * 100) + "%";            // Check if the load has finished
            if (asyncOperation.progress >= 0.9f)
            {
                //Change the Text to show the Scene is ready
                m_Text.text = "Press the space bar to continue";
                //Wait to you press the space key to activate the Scene
                if (Input.GetKeyDown(KeyCode.Space))
                    //Activate the Scene
                    asyncOperation.allowSceneActivation = true;
            }            yield return null;
        }
    }
}
```


            
