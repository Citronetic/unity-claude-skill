This version of Unity is unsupported.



# [Undo](Undo.html).CollapseUndoOperations




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

public static void CollapseUndoOperations(int groupIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| groupIndex | The group index to collapse undo operations to. |





### Description



Collapses all undo operations down to group index together into one step.





The current group index automatically increases on mouse down, by clicking on menu items, and other operations. This method collapses all undo operations with group indices above the provided group index to that group index. This is used by the color picker to combine all color modifications into a single step once the color picker is closed, while they are seperate operations when the color picker is still open.


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


            
