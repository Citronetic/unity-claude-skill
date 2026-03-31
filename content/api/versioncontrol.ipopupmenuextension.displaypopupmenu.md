This version of Unity is unsupported.



# [IPopupMenuExtension](VersionControl.IPopupMenuExtension.html).DisplayPopupMenu




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

public void DisplayPopupMenu([Rect](Rect.html) position);






### Parameters



| Parameter | Description |
| --- | --- |
| position | The position of the context menu. |





### Description



Displays a version control system context menu.





The menu is shown when a user right clicks the top left corner of an asset icon.


              


```
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;[VersionControl("Custom")]
public class CustomVersionControlObject : VersionControlObject, IPopupMenuExtension
{
    public void DisplayPopupMenu(Rect position)
    {
        EditorUtility.DisplayPopupMenu(position, "CONTEXT/Custom", null);
    }    [MenuItem("CONTEXT/Custom/Print Selected Assets")]
    static void PrintSelectedAssets()
    {
        var guids = Selection.assetGUIDs;
        if (guids == null || guids.Length == 0)
        {
            Debug.LogWarning("Empty selection.");
            return;
        }        var message = "Selected asset(s):";
        foreach (var guid in guids)
        {
            var path = AssetDatabase.GUIDToAssetPath(guid);
            message += ' ' + path;
        }
        Debug.Log(message);
    }
}
```





Additional resources: [IPopupMenuExtension](VersionControl.IPopupMenuExtension.html), [VersionControlObject](VersionControl.VersionControlObject.html).


            
