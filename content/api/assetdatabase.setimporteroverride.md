This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).SetImporterOverride




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

public static void SetImporterOverride(string path);






### Parameters



| Parameter | Description |
| --- | --- |
| path | Project relative path for the asset. |





### Description



Sets a specific importer to use for the asset.





Multiple Importers may be registered to a single asset by using either the override extension list, or composite extensions.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.AssetImporters;
using UnityEngine.Assertions;public class AssetDatabaseExamples : MonoBehaviour
{
    [MenuItem("AssetDatabase/Example Importer Actions")]
    static void AllImporterActions()
    {
        //This sets CubeImporter to be used for the asset
        AssetDatabase.SetImporterOverride<CubeImporterOverride>("Assets/CompanionCube.cube");
        Debug.Log("New importer: " + AssetDatabase.GetImporterOverride("Assets/CompanionCube.cube"));        //This clears importer override and sets it to null
        AssetDatabase.ClearImporterOverride("Assets/CompanionCube.cube");
        // This asset does not have an Importer Override anymore. The Default Importer is used ( CubeImporter ).
        Assert.IsNull(AssetDatabase.GetImporterOverride("Assets/CompanionCube.cube"));
    }
}//This importer is the Default Importer for the .cube extension.
[ScriptedImporter(1, "cube")]
public class CubeImporter : ScriptedImporter
{
    public override void OnImportAsset(AssetImportContext ctx)
    {
        var cube = GameObject.CreatePrimitive(PrimitiveType.Cube);
        var position = new Vector3(0, 0, 0);
        cube.transform.position = position;
    }
}//This importer is the Default Importer for the .composite.cube extension.
[ScriptedImporter(1, "composite.cube")]
public class CompositeCubeImporter : ScriptedImporter
{
    public override void OnImportAsset(AssetImportContext ctx)
    {
        var cube = GameObject.CreatePrimitive(PrimitiveType.Cube);
        var position = new Vector3(1, 1, 1);
        cube.transform.position = position;
    }
}//This importer is an Override Importer for the .cube extension.
[ScriptedImporter(1, null,new []{ "cube" })]
public class CubeImporterOverride : ScriptedImporter
{
    public override void OnImportAsset(AssetImportContext ctx)
    {
        var cube = GameObject.CreatePrimitive(PrimitiveType.Cube);
        // 'cube' is a GameObject and will be automatically converted into a prefab
        ctx.AddObjectToAsset("main obj", cube);
        ctx.SetMainObject(cube);
    }
}
```


            
