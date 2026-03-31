This version of Unity is unsupported.



# [Selection](Selection.html).GetTransforms




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

public static Transform[] GetTransforms([SelectionMode](SelectionMode.html) mode);






### Parameters



| Parameter | Description |
| --- | --- |
| mode | Options for refining the selection. |





### Description



Allows for fine grained control of the selection type using the [SelectionMode](SelectionMode.html) bitmask.


              


```
using UnityEngine;
using UnityEditor;
class CreateParentForTransforms : ScriptableObject
{
    [MenuItem("Example/Create Parent For Selection _p")]
    static void MenuInsertParent()
    {
        Transform[] selection = Selection.GetTransforms(
            SelectionMode.TopLevel | SelectionMode.Editable);
        GameObject newParent = new GameObject("Parent");        foreach (Transform t in selection)
        {
            t.parent = newParent.transform;
        }
    }    // Disable the menu if there is nothing selected
    [MenuItem("Example/Create Parent For Selection _p", true)]
    static bool ValidateSelection()
    {
        return Selection.activeGameObject != null;
    }
}
```


            
