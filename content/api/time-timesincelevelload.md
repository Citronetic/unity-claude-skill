This version of Unity is unsupported.



# [Time](Time.html).timeSinceLevelLoad




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












                    public static float timeSinceLevelLoad;






### Description



The time in seconds since the last non-additive scene finished loading (Read Only).





This behaves in the same way as [Time.time](Time-time.html) with a negative offset.


              


```
//Attach this script to a GameObject
//Create a Button (Create>UI>Button) and a Text GameObject (Create>UI>Text)
//Click on the GameObject and attach the Button and Text in the fields in the Inspector//This script outputs the time since the last level load. It also allows you to load a new Scene by pressing the Button. When this new Scene loads, the time resets and updates.using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;public class TimeSinceLevelLoad : MonoBehaviour
{
    public Button m_MyButton;
    public Text m_MyText;    void Awake()
    {
        // Don't destroy the GameObject when loading a new Scene
        DontDestroyOnLoad(gameObject);
        // Make sure the Canvas isn't deleted so the UI stays on the Scene load
        DontDestroyOnLoad(GameObject.Find("Canvas"));        if (m_MyButton != null)
            // Add a listener to call the LoadSceneButton function when the Button is clicked
            m_MyButton.onClick.AddListener(LoadSceneButton);
    }    void Update()
    {
        // Output the time since the Scene loaded to the screen using this label
        m_MyText.text = "Time Since Loaded : " + Time.timeSinceLevelLoad;
    }    void LoadSceneButton()
    {
        // Press this Button to load another Scene
        // Load the Scene named "Scene2"
        SceneManager.LoadScene("Scene2");
    }
}
```


            
