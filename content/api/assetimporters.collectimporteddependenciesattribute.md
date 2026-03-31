This version of Unity is unsupported.



# CollectImportedDependenciesAttribute





class in
          UnityEditor.AssetImporters


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



















### Description



Use this method attribute to specify which methods declare dependancies on imported assets. The methods are called by [AssetDatabase](AssetDatabase.html) during import.





The AssetDatabase imports the dependencies declared in methods with this attribute before importing the dependent assets. This also re-imports the dependent asset whenever the dependency asset changes. Use this declared dependency to safely load dependancies in [AssetPostprocessor](AssetPostprocessor.html) callbacks.

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





### Properties



| Property | Description |
| --- | --- |
| importerType | The type of the importer for which the imported dependency getter is declared. |
| version | The version of the imported dependency getter. |





### Constructors



| Constructor | Description |
| --- | --- |
| CollectImportedDependenciesAttribute | Use the CollectImportedDependencies attribute to declare getters for imported dependencies. |


            
