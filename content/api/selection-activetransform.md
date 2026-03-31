This version of Unity is unsupported.



# [Selection](Selection.html).activeTransform




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












                    public static [Transform](Transform.html) activeTransform;






### Description



Returns the active transform. (The one shown in the inspector).





This never returns Prefabs or non-modifiable objects.


              


```
using UnityEngine;
using UnityEditor;class Example : EditorWindow
{
    class SelectionActiveTransform : ScriptableObject
    {
        [MenuItem("Example/Duplicate at Origin _d")]
        static void DuplicateSelected()
        {
            Instantiate(Selection.activeTransform, Vector3.zero, Quaternion.identity);
        }
    }    //The menu item will be disabled if nothing is selected.
    [MenuItem("Example/Duplicate at Origin _d", true)]
    static bool ValidateSelection()
    {
        return Selection.activeTransform != null;
    }
}
```


            
