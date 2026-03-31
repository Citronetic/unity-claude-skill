This version of Unity is unsupported.



# [Selection](Selection.html).GetFiltered




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

public static Object[] GetFiltered(Type type,
[SelectionMode](SelectionMode.html) mode);






### Parameters



| Parameter | Description |
| --- | --- |
| type | Only objects of this type will be retrieved. |
| mode | Further options to refine the selection. |





### Description



Returns the current selection filtered by type and mode.





For a selected GameObject that has multiple Components of `type`, only the first one will be included in the results.

If `type` is a subclass of [Component](Component.html) or [GameObject](GameObject.html) the full SelectionMode is supported.

If `type` does not subclass from [Component](Component.html) or [GameObject](GameObject.html) (eg. [Mesh](Mesh.html) or [ScriptableObject](ScriptableObject.html)) only [SelectionMode.ExcludePrefab](SelectionMode.ExcludePrefab.html) and [SelectionMode.Editable](SelectionMode.Editable.html) are supported.


              


```
using UnityEngine;
using UnityEditor;class ToggleActive : ScriptableObject
{
    [MenuItem("Example/Toggle Active of Selected %i")]
    static void DoToggle()
    {
        Object[] activeGOs =
            Selection.GetFiltered(
                typeof(GameObject),
                SelectionMode.Editable | SelectionMode.TopLevel);        foreach (GameObject obj in activeGOs)
        {
            obj.SetActive(!obj.activeSelf);
        }
    }
}
```


            
