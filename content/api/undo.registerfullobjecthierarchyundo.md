This version of Unity is unsupported.



# [Undo](Undo.html).RegisterFullObjectHierarchyUndo




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

public static void RegisterFullObjectHierarchyUndo([Object](Object.html) objectToUndo,
string name);






### Parameters



| Parameter | Description |
| --- | --- |
| objectToUndo | The object used to determine a hierarchy of objects whose state changes need to be undone. |
| name | The name of the undo operation. |





### Description



Copy the states of a hierarchy of objects onto the undo stack.





This function works similarly to [Undo.RegisterCompleteObjectUndo](Undo.RegisterCompleteObjectUndo.html). The key difference is that instead of copying the states of a single object, this function stores the states of a hierarchy of objects. Depending on the type of `objectToUndo`, the hierarchy is determined differently:

* If `objectToUndo` is a game object, the hierarchy will contain (a) `objectToUndo` itself and its child game objects; (b) the components attached to these game objects.

* If `objectToUndo` is a component attached to an existing game object, the hierarchy will contain the game object and all of its components, including `objectToUndo`. Child game objects are NOT involved in this case.

* In all other cases, the hierarchy will only contain `objectToUndo` itself. It's then equivalent to calling [Undo.RegisterCompleteObjectUndo](Undo.RegisterCompleteObjectUndo.html) with the same parameters.

If the undo is performed, any changes made to the objects in the above described hierarchy after this function is called will be undone, and the objects will be restored to the recorded state.

Transform parent change, AddComponent, and object destruction can not be restored with this function, for that you should use the dedicated functions. See [Undo.SetTransformParent](Undo.SetTransformParent.html), [Undo.AddComponent](Undo.AddComponent.html), [Undo.DestroyObjectImmediate](Undo.DestroyObjectImmediate.html).

If any object involved is part of the current Scene (e.g. a game object in the Hierarchy window or a component attached to such game object), calling this function will immediately mark the Scene as modified, even if you don't actually change the states of the objects afterwards.


              


```
using UnityEngine;
using UnityEditor;public class UndoExamples
{
    [MenuItem("Undo Examples/RegisterFullObjectHierarchyUndo 1")]
    static void Example1()
    {
        GameObject root = new GameObject("Root");
        MeshRenderer rootComponent1 = root.AddComponent<MeshRenderer>();
        MeshCollider rootComponent2 = root.AddComponent<MeshCollider>();        GameObject child = new GameObject("Child");
        child.transform.parent = root.transform;
        MeshRenderer childComponent1 = child.AddComponent<MeshRenderer>();
        MeshCollider childComponent2 = child.AddComponent<MeshCollider>();        // Store the states of 'root' and its children.
        Undo.RegisterFullObjectHierarchyUndo(root, "full object hierarchy change");        root.name = "New Root";
        child.name = "New Child";        rootComponent1.enabled = false;
        rootComponent2.enabled = false;        childComponent1.enabled = false;
        childComponent2.enabled = false;        // If you choose "Edit->Undo full object hierarchy change" from the main menu now,
        // the states of both game objects and their components will be restored to what they were right before calling Undo.RegisterFullObjectHierarchyUndo.
    }
}
```


              


```
using UnityEngine;
using UnityEditor;public class UndoExamples
{
    [MenuItem("Undo Examples/RegisterFullObjectHierarchyUndo 2")]
    static void Example2()
    {
        GameObject root = new GameObject("Root");
        MeshRenderer rootComponent1 = root.AddComponent<MeshRenderer>();
        MeshCollider rootComponent2 = root.AddComponent<MeshCollider>();        GameObject child = new GameObject("Child");
        child.transform.parent = root.transform;
        MeshRenderer childComponent1 = child.AddComponent<MeshRenderer>();
        MeshCollider childComponent2 = child.AddComponent<MeshCollider>();        // Store the states of 'root' and all of its components.
        Undo.RegisterFullObjectHierarchyUndo(rootComponent1, "full object hierarchy change");        root.name = "New Root";
        child.name = "New Child";        rootComponent1.enabled = false;
        rootComponent2.enabled = false;        childComponent1.enabled = false;
        childComponent2.enabled = false;        // If you choose "Edit->Undo full object hierarchy change" from the main menu now,
        // the states of 'root' and all of its components will be restored to what they were right before calling Undo.RegisterFullObjectHierarchyUndo,
        // but changes made to 'child' and its components won't be restored.
    }
}
```




---






                        **Obsolete**
                        Use Undo.RegisterFullObjectHierarchyUndo(Object, string) instead.




## Declaration

public static void RegisterFullObjectHierarchyUndo([Object](Object.html) objectToUndo);






### Description



This overload is deprecated. Use Undo.RegisterFullObjectHierarchyUndo(Object, string) instead.


            
