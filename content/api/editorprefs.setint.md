This version of Unity is unsupported.



# [EditorPrefs](EditorPrefs.html).SetInt




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

public static void SetInt(string key,
int value);






### Parameters



| Parameter | Description |
| --- | --- |
| key | Name of key to write integer to. |
| value | Value of the integer to write into the storage. |





### Description



Sets the value of the preference identified by key as an integer.





Sets the value of the preference identified by `key` as an integer.

Additional resources: [GetInt](EditorPrefs.GetInt.html).


              


```
// A small editor window that allows an integer value to be
// read and written to the EditorPrefs online storage.
//
// SetIntExample is the name of the int to read/write.using UnityEngine;
using UnityEditor;public class ExampleClass : EditorWindow
{
    int intValue = 42;    [MenuItem("Examples/Prefs.SetInt Example")]
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


            
