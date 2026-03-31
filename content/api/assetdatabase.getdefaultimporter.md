This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).GetDefaultImporter




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

public static Type GetDefaultImporter(string path);






### Parameters



| Parameter | Description |
| --- | --- |
| path | Project relative path for the asset. |





### Returns



**Type**
        Importer type.





### Description



Returns the Default Importer associated with the asset located at the supplied path. When no Importer override is set, then the default importer is used. Additional resources: [AssetDatabase.GetImporterOverride](AssetDatabase.GetImporterOverride.html), [AssetDatabase.ClearImporterOverride](AssetDatabase.ClearImporterOverride.html).


              


```
using System;
using UnityEngine;
using UnityEditor;
using UnityEditor.AssetImporters;public class AssetDatabaseExamples : MonoBehaviour
{
    [MenuItem("AssetDatabase/Available Importer Types for cube")]
    static void AvailableImporterTypeCube()
    {
        var path = "Assets/CompanionCube.fbx";
        AssetDatabase.GetDefaultImporter(path);
        // returns ModelImporter.
        AssetDatabase.GetImporterOverride(path);
        // returns null because no Override Importer is set.
        AssetDatabase.GetAvailableImporters(path);
        // returns [CubeImporter].
        AssetDatabase.SetImporterOverride<CubeImporter>(path);
        // sets CubeImporter as Override Importer.
        AssetDatabase.ClearImporterOverride(path);
        // removes the Override Importer.
        AssetDatabase.GetImporterOverride(path);
        // returns null because no Override Importer is set.
    }    //This is Example Importer for cube
    [ScriptedImporter(1, new []{"cube" }, new[] { "fbx" })]
    public class CubeImporter : ScriptedImporter
    {
        public override void OnImportAsset(AssetImportContext ctx)
        {
            var cube = GameObject.CreatePrimitive(PrimitiveType.Cube);
            cube.transform.position = new Vector3(0, 0, 0);
            // 'cube' is a GameObject and will be automatically converted into a prefab
            ctx.AddObjectToAsset("main obj", cube);
            ctx.SetMainObject(cube);
        }
    }
}
```


            
