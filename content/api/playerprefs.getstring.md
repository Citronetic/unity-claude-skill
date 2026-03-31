This version of Unity is unsupported.



# [PlayerPrefs](PlayerPrefs.html).GetString




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

public static string GetString(string key);






### Parameters



| Parameter | Description |
| --- | --- |
| key | The key used to retrieve the corresponding string in the player preferences. |





### Returns



**string**
        The string corresponding to the given `key`, `string.Empty` if no string is found for the given `key`.





### Description



Gets the string that corresponds to `key` in the player preferences.





Returns `string.Empty` if no string is found for the given `key`.




---








## Declaration

public static string GetString(string key,
string defaultValue);






### Parameters



| Parameter | Description |
| --- | --- |
| key | The key used to retrieve the corresponding string in the player preferences. |
| defaultValue | The value to return when no string is found for the given key in the player preferences. |





### Returns



**string**
        The string corresponding to the given `key`, `defaultValue` if no string is found for the given `key`.





### Description



Gets the string that corresponds to `key` in the player preferences.





Returns given `defaultValue` if no string is found for the given `key`.


              


```
//Use this script to fetch the settings and show them as text on the screen.using UnityEngine;public class PlayerPrefsGetStringExample : MonoBehaviour
{
    string m_PlayerName;    void Start()
    {
        //Fetch the PlayerPref settings
        SetText();
    }    void SetText()
    {
        //Fetch name (string) from the PlayerPrefs (set these PlayerPrefs in another script). If no string exists, the default is "No Name"
        m_PlayerName = PlayerPrefs.GetString("Name", "No Name");
    }    void OnGUI()
    {
        //Fetch the PlayerPrefs settings and output them to the screen using Labels
        GUI.Label(new Rect(50, 50, 200, 30), "Name : " + m_PlayerName);
    }
}
```


            
