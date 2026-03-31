This version of Unity is unsupported.



# [Undo](Undo.html).RegisterCompleteObjectUndo




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

public static void RegisterCompleteObjectUndo([Object](Object.html) objectToUndo,
string name);






### Parameters



| Parameter | Description |
| --- | --- |
| objectToUndo | The object whose state changes need to be undone. |
| name | The name of the undo operation. |





### Description



Stores a copy of the object states on the undo stack.





If the undo is performed, any changes made to the object after this function is called will be undone, and the object will be restored to the recorded state.

Transform parent change, AddComponent, and object destruction can not be restored with this function, for that you should use the dedicated functions. See [Undo.SetTransformParent](Undo.SetTransformParent.html), [Undo.AddComponent](Undo.AddComponent.html), [Undo.DestroyObjectImmediate](Undo.DestroyObjectImmediate.html).

If the object is part of the current Scene (e.g. a game object in the Hierarchy or a component attached to such game object), calling this function will immediately mark the Scene as modified, even if you don't actually change the states of the object afterwards.


              


```
using UnityEngine;
using UnityEditor;public class UndoExamples
{
    [MenuItem("Undo Examples/RegisterCompleteObjectUndo")]
    static void Example()
    {
        GameObject player = new GameObject("Player");        // Store the states of the player object.
        Undo.RegisterCompleteObjectUndo(player, "Player name change");        player.name = "New Player";        // If you choose "Edit->Undo Player name change" from the main menu now, the name of the object will be restored to "Player".
    }
}
```




---








## Declaration

public static void RegisterCompleteObjectUndo(Object[] objectsToUndo,
string name);






### Parameters



| Parameter | Description |
| --- | --- |
| objectsToUndo | An array of objects whose state changes need to be undone. |
| name | The name of the undo operation. |





### Description



This is equivalent to calling the first overload mutiple times, save for the fact that only one undo operation will be generated for this one.


            
