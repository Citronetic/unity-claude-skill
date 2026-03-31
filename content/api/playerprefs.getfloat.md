This version of Unity is unsupported.



# [PlayerPrefs](PlayerPrefs.html).GetFloat




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

public static float GetFloat(string key);






### Parameters



| Parameter | Description |
| --- | --- |
| key | The key used to retrieve the corresponding float value in the player preferences. |





### Returns



**float**
        The float value corresponding to the given `key`. Returns `0,0f` if no float value is found for the given `key`.





### Description



Returns the float value that corresponds to `key` in the player preferences.





Returns `0.0f` if no float value is found for the given `key`.


              


```
//Use this script to get the PlayerPrefs settings and display them as text on the screen.using UnityEngine;public class PlayerPrefsGetFloatExample : MonoBehaviour
{
    float m_Health;    void Start()
    {
        //Fetch the PlayerPref settings
        SetText();
    }    void SetText()
    {
        //Fetch the health from the PlayerPrefs (set these PlayerPrefs elsewhere). If no float of this name exists, the default is 0
        m_Health = PlayerPrefs.GetFloat("Health");
    }    void OnGUI()
    {
        //Fetch the PlayerPrefs settings and output them to the screen using Labels.
        GUI.Label(new Rect(50, 90, 200, 30), "Health : " + m_Health);
    }
}
```




---








## Declaration

public static float GetFloat(string key,
float defaultValue);






### Parameters



| Parameter | Description |
| --- | --- |
| key | The key used to retrieve the corresponding float value in the player preferences. |
| defaultValue | The value to return when no float value is found for the given key in the player preferences. |





### Returns



**float**
        The float value corresponding to the given `key`. Returns `defaultValue` if no float value is found for the given `key`.





### Description



Gets the float value that corresponds to `key` in the player preferences.





Returns given `defaultValue` if no float value is found for the given `key`.


              


```
//Use this script to fetch the PlayerPrefs settings and show them as text on the screen.using UnityEngine;public class PlayerPrefsGetFloatWithDefaultValueExample : MonoBehaviour
{
    float m_Health;    void Start()
    {
        //Fetch the PlayerPref settings.
        SetText();
    }    void SetText()
    {
        //Fetch the health from the PlayerPrefs (set these PlayerPrefs elsewhere).
        // If no float of this name exists, the default is 100.
        m_Health = PlayerPrefs.GetFloat("Health", 100);
    }    void OnGUI()
    {
        //Fetch the PlayerPrefs settings and output them to the screen using Labels
        GUI.Label(new Rect(50, 90, 200, 30), "Health : " + m_Health);
    }
}
```


            
