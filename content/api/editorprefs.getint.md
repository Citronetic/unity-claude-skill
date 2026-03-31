This version of Unity is unsupported.



# [EditorPrefs](EditorPrefs.html).GetInt




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






## Declaration

public static int GetInt(string key,
int defaultValue = 0);






### Parameters



| Parameter | Description |
| --- | --- |
| key | Name of key to read integer from. |
| defaultValue | Integer value to return if the key is not in the storage. |





### Returns



**int**
        The value stored in the preference file.





### Description



Returns the value corresponding to `key` in the preference file if it exists.





If the value doesn't already exist in the preference file the function will return `defaultValue`.

Additional resources: [SetInt](EditorPrefs.SetInt.html).


              


```
// A small editor window that allows an integer value to be
// read and written to the EditorPrefs online storage.
//
// SetIntExample is the name of the int to read/write.using UnityEngine;
using UnityEditor;public class ExampleClass : EditorWindow
{
    int intValue = 42;    [MenuItem("Examples/Prefs.GetInt Example")]
    static void Init()
    {
        ExampleClass window = (ExampleClass)EditorWindow.GetWindow(typeof(ExampleClass));
        window.Show();
    }    void OnGUI()
    {
        int temp;
        temp = EditorPrefs.GetInt("SetIntExample", -1);
        EditorGUILayout.LabelField("Current stored value: " + temp.ToString());
        intValue = EditorGUILayout.IntField("Value to write to Prefs: ", intValue);
        if (GUILayout.Button("Save value: " + intValue.ToString()))
        {
            EditorPrefs.SetInt("SetIntExample", intValue);
            Debug.Log("SetInt: " + intValue);
        }
    }
}
```


            
