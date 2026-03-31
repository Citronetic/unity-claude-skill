This version of Unity is unsupported.



# [Undo](Undo.html).GetCurrentGroup




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

public static int GetCurrentGroup();






### Returns



**int**
        The index of the current undo group.





### Description



Unity automatically groups undo operations by the current group index.





The current group index is automatically increased on mouse down, clicking on menu items and other operations.

Additional resources: [Undo.RevertAllDownToGroup](Undo.RevertAllDownToGroup.html), [Undo.CollapseUndoOperations](Undo.CollapseUndoOperations.html).


              


```
using UnityEditor;
using UnityEngine;

public class ResetPositionForSelectedGameObjectsExample : MonoBehaviour
{
    [MenuItem("MyMenu/Reset Positions of Selected GameObjects")]
    static void ResetPositionForSelectedGameObjects()
    {
        Undo.SetCurrentGroupName("Zero out selected gameObjects");
        int group = Undo.GetCurrentGroup();

        Undo.RecordObjects(Selection.transforms, "transform selected objects");

        foreach (Transform t in Selection.transforms)
        {
            t.position = Vector3.zero;
        }

        Undo.CollapseUndoOperations(group);
    }
}
```


            
