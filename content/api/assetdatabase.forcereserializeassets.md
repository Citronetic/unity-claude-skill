This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).ForceReserializeAssets




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

public static void ForceReserializeAssets();






## Declaration

public static void ForceReserializeAssets(IEnumerable<string> assetPaths,
[ForceReserializeAssetsOptions](ForceReserializeAssetsOptions.html) options);






### Parameters



| Parameter | Description |
| --- | --- |
| assetPaths | The paths to the assets that should be reserialized. |
| options | Specify whether you want to reserialize the assets themselves, their .meta files, or both. If omitted, defaults to both. |





### Description



Forcibly load and re-serialize the given assets, flushing any outstanding data changes to disk.





When Unity loads old data from an asset or Scene file, the data is dynamically upgraded in memory, but not written back to disk unless the user does something that explicitly dirties the object (like changing a value on it). This method allows you to proactively load, upgrade, and write back to disk any asset or Scene files in the project, without having to manually make them dirty.

Unity's usual behaviour has a number of benefits, particularly for projects with version control systems, where upgrading all the assets proactively after moving to a new Unity version would result in massive lists of changed files to be committed. However, it also has the drawback of upgrades being 'mixed in' with deliberate changes as users continue to work on a project. This method allows you to be proactive in a controlled way, deciding exactly which assets you want to upgrade and when.

Note: You should only call this method from direct user actions, such as a menu item. You should not call ForceReserializeAssets from a Unity callback (such as OnEnable), because it might be called while a scene is being modified. If you do this, Unity throws an exception.


              


```
using UnityEditor;
using UnityEngine;public class AssetDatabaseExamples : MonoBehaviour
{
    [MenuItem("AssetDatabase/Force Reserialize Assets Example")]
    static void UpdateGroundMaterials()
    {
        for (var i = 0; i < 10; i++)
        {
            var matPath = $"Assets/Materials/GroundMaterial{i}.mat";
            var mat = (Material)AssetDatabase.LoadMainAssetAtPath(matPath);
            AssetImporter.GetAtPath(matPath).SetAssetBundleNameAndVariant("GroundBundle", "");
            mat.shader = Shader.Find("Standard");
            mat.color = Color.white;
            mat.mainTexture = (Texture)AssetDatabase.LoadMainAssetAtPath($"Assets/Textures/GroundTexture{i}.jpg");
        }
        AssetDatabase.ForceReserializeAssets();    }
}
```


            
