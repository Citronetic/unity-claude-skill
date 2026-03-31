This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).ExportPackage




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

public static void ExportPackage(string assetPathName,
string fileName);






## Declaration

public static void ExportPackage(string assetPathName,
string fileName,
[ExportPackageOptions](ExportPackageOptions.html) flags);






## Declaration

public static void ExportPackage(string[] assetPathNames,
string fileName,
[ExportPackageOptions](ExportPackageOptions.html) flags = ExportPackageOptions.Default);






### Description



Exports the assets identified by **assetPathNames** to a unitypackage file in **fileName**.





Additional resources: ExportPackageOptions for information on how you can affect what gets exported.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;public class AssetDatabaseExamples : MonoBehaviour
{
    [MenuItem("AssetDatabase/Export")]
    static void Export()
    {
        var exportedPackageAssetList = new List<string>();
        //Find all shaders that have "Surface" in their names and add them to the list
        foreach (var guid in AssetDatabase.FindAssets("t:Shader Surface", new []{"Assets/Shaders"}))
        {
            var path = AssetDatabase.GUIDToAssetPath(guid);
            exportedPackageAssetList.Add(path);
        }        //Add Prefabs folder into the asset list
        exportedPackageAssetList.Add("Assets/Prefabs");
        //Export Shaders and Prefabs with their dependencies into a .unitypackage
        AssetDatabase.ExportPackage(exportedPackageAssetList.ToArray(), "ShadersAndPrefabsWithDependencies.unitypackage",
            ExportPackageOptions.Recurse | ExportPackageOptions.IncludeDependencies);
    }
}
```


            
