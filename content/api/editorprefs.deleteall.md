This version of Unity is unsupported.



# [EditorPrefs](EditorPrefs.html).DeleteAll




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

public static void DeleteAll();






### Description



Removes all keys and values from the preferences. Use with caution.





[Image: image]


*Clears all editor prefs keys.*


              


```
// Clear all the editor prefs keys.
//
// Warning: this will also remove editor preferences as the opened projects, etc.using UnityEngine;
using UnityEditor;public class DeleteAllExample : ScriptableObject
{
    [MenuItem("Examples/EditorPrefs/Clear all Editor Preferences")]
    static void deleteAllExample()
    {
        if (EditorUtility.DisplayDialog("Delete all editor preferences.",
            "Are you sure you want to delete all the editor preferences? " +
            "This action cannot be undone.", "Yes", "No"))
        {
            Debug.Log("yes");
            EditorPrefs.DeleteAll();
        }
    }
}
```


            
