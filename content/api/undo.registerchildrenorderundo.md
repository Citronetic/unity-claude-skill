This version of Unity is unsupported.



# [Undo](Undo.html).RegisterChildrenOrderUndo




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

public static void RegisterChildrenOrderUndo([Object](Object.html) objectToUndo,
string name);






### Parameters



| Parameter | Description |
| --- | --- |
| objectToUndo | The object whose child order should be recorded on the undo stack. |
| name | The name of the undo operation. |





### Description



Stores a copy of the order of the object's children on the undo stack.





If the undo is performed, the order of the object's children will be restored to the recorded state.


              


```
using UnityEngine;
using UnityEditor;public class UndoExamples
{
    [MenuItem("Undo Examples/RegisterChildrenOrderUndo")]
    static void Example()
    {
        var parent = new GameObject("Parent");
        for (int childIndex = 0; childIndex < 5; childIndex += 1)
        {
            var child = new GameObject($"Child{childIndex}");
            child.transform.parent = parent.transform;
        }        // Store the states of the parent object.
        Undo.RegisterChildrenOrderUndo(parent.transform, "Set as last sibling");
        parent.transform.GetChild(0).SetAsLastSibling();        // If you choose "Edit->Undo Set as last sibling" from the main menu now, the order of the children will be restored.
    }
}
```


            
