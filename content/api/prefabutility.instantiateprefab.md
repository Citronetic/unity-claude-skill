This version of Unity is unsupported.



# [PrefabUtility](PrefabUtility.html).InstantiatePrefab




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

public static Object InstantiatePrefab([Object](Object.html) assetComponentOrGameObject);






## Declaration

public static Object InstantiatePrefab([Object](Object.html) assetComponentOrGameObject,
[SceneManagement.Scene](SceneManagement.Scene.html) destinationScene);










### Parameters



| Parameter | Description |
| --- | --- |
| assetComponentOrGameObject | Prefab Asset to instantiate. |
| destinationScene | Scene to instantiate the Prefab in. |





### Returns



**Object**
        The GameObject at the root of the Prefab.





### Description



Instantiates the given Prefab in a given Scene.





This is similar to Instantiate but creates a Prefab connection to the Prefab.
If you do not specify a Scene handle, the Prefab is instantiated in the active Scene.

**Note:** You should not instantiate Prefabs from the [OnValidate()](MonoBehaviour.OnValidate.html) or [Awake()](MonoBehaviour.Awake.html) method. This is because the order in which GameObjects become awake is not deterministic, and therefore can result in unexpected behaviour. If you try this, Unity will generate a warning reading "SendMessage cannot be called during Awake, CheckConsistency, or OnValidate".


              


```
using UnityEngine;
using UnityEditor;public class Example
{
    [MenuItem("Examples/Instantiate Selected")]
    static void InstantiatePrefab()
    {
        Selection.activeObject = PrefabUtility.InstantiatePrefab(Selection.activeObject as GameObject);
    }    [MenuItem("Examples/Instantiate Selected", true)]
    static bool ValidateInstantiatePrefab()
    {
        GameObject go = Selection.activeObject as GameObject;
        if (go == null)
            return false;        return PrefabUtility.IsPartOfPrefabAsset(go);
    }
}
```


            
