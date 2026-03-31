This version of Unity is unsupported.



# [PrefabUtility](PrefabUtility.html).RecordPrefabInstancePropertyModifications




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

public static void RecordPrefabInstancePropertyModifications([Object](Object.html) targetObject);






### Parameters



| Parameter | Description |
| --- | --- |
| targetObject | Object to process. |





### Description



Causes modifications made to the Prefab instance to be recorded.





The recommended way to enable instances of prefabs to record changes is to use [SerializedProperty](SerializedProperty.html) and [SerializedObject](SerializedObject.html), instead of using this method. Using `SerializedProperty` and `SerializedObject` enables instances to record changes and automatically includes changes in the undo system.

Call `RecordPrefabInstancePropertyModifications` after making modifications to an instance of a Prefab to record those changes in the instance. If this method isn't called, changes made to the instance are lost and changes to the object aren't recorded in the undo system.

Additional resources: [SerializedObject](SerializedObject.html) [SerializedProperty](SerializedProperty.html).


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.SceneManagement;// The following Editor script doubles the scale of the selected GameObject,
// records the property modification and marks the Scene as dirty so that
// the user can save the Scene afterwards and keep the changes.
public class Example
{
    [MenuItem("Examples/Double Scale")]
    static void DoubleScale()
    {
        GameObject gameObject = Selection.activeGameObject;
        Undo.RecordObject(gameObject.transform, "Double scale");
        gameObject.transform.localScale *= 2;        // Notice that if the call to RecordPrefabInstancePropertyModifications is not present,
        // all changes to scale will be lost when saving the Scene, and reopening the Scene
        // would revert the scale back to its previous value.
        PrefabUtility.RecordPrefabInstancePropertyModifications(gameObject.transform);        // Optional step in order to save the Scene changes permanently.
        //EditorSceneManager.SaveScene(SceneManager.GetActiveScene());
    }    // Disable the menu item if there is no Hierarchy GameObject selection.
    [MenuItem("Examples/Double Scale", true)]
    static bool ValidateDoubleScale()
    {
        return Selection.activeGameObject != null && !EditorUtility.IsPersistent(Selection.activeGameObject);
    }
}
```


            
