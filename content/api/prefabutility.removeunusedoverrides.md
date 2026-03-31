This version of Unity is unsupported.



# [PrefabUtility](PrefabUtility.html).RemoveUnusedOverrides




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

public static void RemoveUnusedOverrides(GameObject[] prefabInstances,
[InteractionMode](InteractionMode.html) action);






### Parameters



| Parameter | Description |
| --- | --- |
| prefabInstances | List of Prefab instances to remove unused overrides from. |
| action | UserAction will record undo and write result to Editor log file. |





### Description



This method identifies and removes all unused overrides from a list of Prefab Instance roots. See the manual [Unused Overides](https://docs.unity3d.com/2023.1/Documentation/Manual/UnusedOverrides.html) for more detail.


              


```
using System.IO;
using UnityEngine;
using UnityEditor;public class RemoveUnusedOverridesExample
{
    // Creates a new menu item 'Examples > Remove Unused Overrides Example' in the main menu.
    [MenuItem("Examples/Remove Unused Overrides Example")]
    static void RemoveUnusedOverrides()
    {
        var exampleGameObject = new GameObject("Example", typeof(BoxCollider));        // Create folder Prefabs and set the path as within the Prefabs folder,
        // and name it as the GameObject's name with the .Prefab format
        if (!Directory.Exists("Assets/Prefabs"))
            AssetDatabase.CreateFolder("Assets", "Prefabs");
        string localPath = "Assets/Prefabs/" + exampleGameObject.name + ".prefab";        // Make sure the file name is unique, in case an existing Prefab has the same name.
        localPath = AssetDatabase.GenerateUniqueAssetPath(localPath);        // Create the new Prefab and log whether Prefab was saved successfully.
        var prefabAsset = PrefabUtility.SaveAsPrefabAssetAndConnect(exampleGameObject, localPath, InteractionMode.UserAction, out bool prefabSuccess);        //Set a value on the example script and record it
        exampleGameObject.GetComponent<BoxCollider>().center = new Vector3(2.0f, 2.0f, 2.0f);
        PrefabUtility.RecordPrefabInstancePropertyModifications(exampleGameObject.GetComponent<BoxCollider>());        //Remove the component from the prefab asset. We now have an unused override.
        PrefabUtility.ApplyRemovedComponent(exampleGameObject, prefabAsset.GetComponent(typeof(BoxCollider)), InteractionMode.UserAction);        //Remove the unused override that was created earlier
        PrefabUtility.RemoveUnusedOverrides(new [] { exampleGameObject }, InteractionMode.UserAction);
    }
}
```


            
