This version of Unity is unsupported.



# CollectImportedDependenciesAttribute Constructor




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

public CollectImportedDependenciesAttribute(Type importerType,
uint version);






### Parameters



| Parameter | Description |
| --- | --- |
| importerType | The type of the importer for which the getter is called by the AssetDatabase. |
| version | The version of the imported dependencies getter. |





### Description



Use the CollectImportedDependencies attribute to declare getters for imported dependencies.





It is recommended to always increment the version number of the callback whenever the script is changed. This forces assets imported with lower version numbers to be re-imported.

This example shows how you can declare a dependency between two prefabs imported by the [ModelImporter](ModelImporter.html) and use them in an AssetPostprocessor.


              


```
using UnityEditor;
using UnityEditor.AssetImporters;
using UnityEngine;public class ProceduralParentPostprocessor : AssetPostprocessor
{
    private const string s_DependentPath = "Assets/ProceduralPrefab.fbx";
    private const string s_DependencyPath = "Assets/DependencyPrefab.fbx";    [CollectImportedDependencies(typeof(ModelImporter), 1)]
    public static string[] CollectImportedDependenciesForModelImporter(string assetPath)
    {
        if (assetPath.Equals(s_DependentPath))
            return new[] { s_DependencyPath };        return null;
    }    void OnPostprocessMeshHierarchy(GameObject root)
    {
        if (root.name == "ProceduralPrefabRoot")
        {
            // Add a new child game object
            var go = AssetDatabase.LoadMainAssetAtPath(s_DependencyPath) as GameObject;
            Object.Instantiate(go, root.transform, true);
        }
    }
}
```





**Note:** The attribute supports only native importer types with [AssetPostprocessor](AssetPostprocessor.html) callbacks: [ModelImporter](ModelImporter.html), [TextureImporter](TextureImporter.html), [AudioImporter](AudioImporter.html), and [SpeedTreeImporter](SpeedTreeImporter.html).


            
