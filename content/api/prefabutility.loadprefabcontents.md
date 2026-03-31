This version of Unity is unsupported.



# [PrefabUtility](PrefabUtility.html).LoadPrefabContents




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

public static [GameObject](GameObject.html) LoadPrefabContents(string assetPath);






### Parameters



| Parameter | Description |
| --- | --- |
| assetPath | The path of the Prefab Asset to load the contents of. |





### Returns



**GameObject**
        The root of the loaded contents.





### Description



Loads a Prefab Asset at a given path into an isolated Scene and returns the root GameObject of the Prefab.





You can use this to get the content of the Prefab and modify it directly instead of going through an instance of the Prefab. This is useful for batch operations.

To release the prefab and isolated scene from memory when you are finished with it, call [UnloadPrefabContents](PrefabUtility.UnloadPrefabContents.html). If you modified the Prefab contents, use [SaveAsPrefabAsset](PrefabUtility.SaveAsPrefabAsset.html) to save any changes, and then call [UnloadPrefabContents](PrefabUtility.UnloadPrefabContents.html).

Additional resources: [EditPrefabContentsScope](PrefabUtility.EditPrefabContentsScope.html).


              


```
using UnityEngine;
using UnityEditor;public class Example
{
    [MenuItem("Examples/Add BoxCollider to Prefab Asset")]
    static void AddBoxColliderToPrefab()
    {
        // Get the Prefab Asset root GameObject and its asset path.
        GameObject assetRoot = Selection.activeObject as GameObject;
        string assetPath = AssetDatabase.GetAssetPath(assetRoot);        // Load the contents of the Prefab Asset.
        GameObject contentsRoot = PrefabUtility.LoadPrefabContents(assetPath);        // Modify Prefab contents.
        contentsRoot.AddComponent<BoxCollider>();        // Save contents back to Prefab Asset and unload contents.
        PrefabUtility.SaveAsPrefabAsset(contentsRoot, assetPath);
        PrefabUtility.UnloadPrefabContents(contentsRoot);
    }    [MenuItem("Examples/Add BoxCollider to Prefab Asset", true)]
    static bool ValidateAddBoxColliderToPrefab()
    {
        GameObject go = Selection.activeObject as GameObject;
        if (go == null)
            return false;        return PrefabUtility.IsPartOfPrefabAsset(go);
    }
}
```


            
