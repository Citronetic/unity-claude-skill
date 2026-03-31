This version of Unity is unsupported.



# [PlayerPrefs](PlayerPrefs.html).GetInt




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

public static int GetInt(string key);






### Parameters



| Parameter | Description |
| --- | --- |
| key | The key used to retrieve the corresponding int value in the player preferences. |





### Returns



**int**
        The int value that corresponds to the given `key`. Returns `0` if no int value is found for the given `key`.





### Description



Gets the int value that corresponds to `key` in the player preferences.





Returns `0` if no int value is found for the given `key`.


              


```
//Use this script to fetch the settings and show them as text on the screen.using UnityEngine;public class PlayerPrefsGetIntExample : MonoBehaviour
{
    int m_Score;    void Start()
    {
        //Fetch the PlayerPref settings
        SetText();
    }    void SetText()
    {
        //Fetch the score from the PlayerPrefs (set these PlayerPrefs in another script). If no Int of this name exists, the default is 0.
        m_Score = PlayerPrefs.GetInt("Score");
    }    void OnGUI()
    {
        //Fetch the PlayerPrefs settings and output them to the screen using Labels
        GUI.Label(new Rect(50, 130, 200, 30), "Score : " + m_Score);
    }
}
```




---








## Declaration

public static int GetInt(string key,
int defaultValue);






### Parameters



| Parameter | Description |
| --- | --- |
| key | The key used to retrieve the corresponding int value in the player preferences. |
| defaultValue | The value to return when no int value is found for the given key in the player preferences. |





### Returns



**int**
        The int value that corresponds to the given `key`. Returns `defaultValue` if no int value is found for the given `key`.





### Description



Gets the int value that corresponds to `key` in the player preferences.





Returns given `defaultValue` if no int value is found for the given `key`.


              


```
//Use this script to fetch the settings and show them as text on the screen.using UnityEngine;public class PlayerPrefsGetIntExample : MonoBehaviour
{
    int m_Score;    void Start()
    {
        //Fetch the PlayerPref settings
        SetText();
    }    void SetText()
    {
        //Fetch the score from the PlayerPrefs (set these PlayerPrefs in another script). If no Int of this name exists, the default is 100.
        m_Score = PlayerPrefs.GetInt("Score", 100);
    }    void OnGUI()
    {
        //Fetch the PlayerPrefs settings and output them to the screen using Labels.
        GUI.Label(new Rect(50, 130, 200, 30), "Score : " + m_Score);
    }
}
```


            
