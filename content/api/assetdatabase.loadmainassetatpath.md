This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).LoadMainAssetAtPath




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

public static Object LoadMainAssetAtPath(string assetPath);






### Parameters



| Parameter | Description |
| --- | --- |
| assetPath | Filesystem path of the asset to load. |





### Description



Returns the main asset object at `assetPath`.

The "main" Asset is the Asset at the root of a hierarchy (such as a Maya file which may contain multiples meshes and GameObjects).





All paths are relative to the project folder, for example: "Assets/MyTextures/hello.png".

Additional resources: [AssetDatabase.LoadAssetAtPath](AssetDatabase.LoadAssetAtPath.html), [AssetDatabase.LoadAllAssetsAtPath](AssetDatabase.LoadAllAssetsAtPath.html), [AssetDatabase.LoadAllAssetRepresentationsAtPath](AssetDatabase.LoadAllAssetRepresentationsAtPath.html).


              


```
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;public class MyPlayer : MonoBehaviour
{
    [MenuItem("AssetDatabase/Assign Materials To Models")]
    static void AssignGunMaterialsToModels()
    {
        var materials = new List<Material>();
        //Get all the materials that have the name gun in them using LoadMainAssetAtPath
        foreach (var asset in AssetDatabase.FindAssets("t:Material gun"))
        {
            var path = AssetDatabase.GUIDToAssetPath(asset);
            materials.Add((Material)AssetDatabase.LoadMainAssetAtPath(path));
        }        var materialID = 0;
        //Assign gun materials to their corresponding models MeshRenderer
        foreach (var asset in AssetDatabase.FindAssets("t:Model Gun"))
        {
            if (materialID >= materials.Count) materialID = 0;
            var path = AssetDatabase.GUIDToAssetPath(asset);
            var material = materials[materialID++];
            material.shader = Shader.Find("Standard");
            var modelMesh = (MeshRenderer) AssetDatabase.LoadAssetAtPath(path, typeof(MeshRenderer));
            modelMesh.sharedMaterial = material;
        }
    }
}
```


            
