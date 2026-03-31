This version of Unity is unsupported.



# [SettingsService](SettingsService.html).OpenUserPreferences




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

public static [EditorWindow](EditorWindow.html) OpenUserPreferences(string settingsPath);






### Parameters



| Parameter | Description |
| --- | --- |
| settingsPath | Settings path of the item to select (for example, 'Preferences/Keys' or 'Preferences/2D'). |





### Returns



**EditorWindow**
        Returns an instance to the Settings window.





### Description



Open the Preferences window with the specified settings item already selected.


              


```
using UnityEditor;
using UnityEngine;class MyCustomWindow : EditorWindow
{
    void OnGUI()
    {
        if (GUILayout.Button("Open my custom preference"))
        {
            SettingsService.OpenUserPreferences("Preferences/MyCustomPref");
        }        if (GUILayout.Button("Open my custom project settings"))
        {
            SettingsService.OpenProjectSettings("Project/MyCustomSettings");
        }
    }
}
```


            
