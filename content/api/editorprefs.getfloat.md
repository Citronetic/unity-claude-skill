This version of Unity is unsupported.



# [EditorPrefs](EditorPrefs.html).GetFloat




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






## Declaration

public static float GetFloat(string key,
float defaultValue = 0.0F);






### Parameters



| Parameter | Description |
| --- | --- |
| key | Name of key to read float from. |
| defaultValue | Float value to return if the key is not in the storage. |





### Returns



**float**
        The float value stored in the preference file or the defaultValue id the
        requested float does not exist.





### Description



Returns the float value corresponding to `key` if it exists in the preference file.





If `GetFloat` does not exist in the Preference file the `defaultValue` will
          be returned.


              


```
// Simple script that allows a float value to be editted
// in a slider. The start value is selected from the Editor Preferences.using UnityEngine;
using UnityEditor;
using System;public class SetFloatExample : EditorWindow
{
    static float floatValue = 0.0f;    [MenuItem("Examples/Preferences SetFloat Example")]
    static void Init()
    {
        Rect r = new Rect(10, 10, 200, 100);
        SetFloatExample window = (SetFloatExample)EditorWindow.GetWindowWithRect(typeof(SetFloatExample), r);
        window.Show();
    }    void Awake()
    {
        floatValue = EditorPrefs.GetFloat("FloatExample", floatValue);
    }    void OnGUI()
    {
        floatValue = EditorGUILayout.Slider(floatValue, -1.0f, 1.0f);
        if (GUILayout.Button("Save float " + Convert.ToString(floatValue) + "?"))
        {
            EditorPrefs.SetFloat("FloatExample", floatValue);
        }
        if (GUILayout.Button("Close"))
            this.Close();
    }
}
```


            
