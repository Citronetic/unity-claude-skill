This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).GetAvailableImporters




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

public static Type[] GetAvailableImporters(string path);






### Parameters



| Parameter | Description |
| --- | --- |
| path | Project relative path for the asset. |





### Returns



**Type[]**
        Returns an array of importer types that can handle the specified Asset.





### Description



Gets the importer types associated with a given Asset path.


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
        Type[] CubeTypes = AssetDatabase.GetAvailableImporters("Assets/CompanionCube.cube");
        for (int i = 0; i < CubeTypes.Length; i++)
        {
            Debug.Log("Available Importer Type for cube: " + CubeTypes[i]);
        }
    }    //This is Example Importer for cube
    [ScriptedImporter(1, "cube")]
    public class CubeImporter : ScriptedImporter
    {
        public override void OnImportAsset(AssetImportContext ctx)
        {
            var cube = GameObject.CreatePrimitive(PrimitiveType.Cube);
            var position = new Vector3(0, 0, 0);
            cube.transform.position = position;
            ctx.AddObjectToAsset("main obj", cube);
            ctx.SetMainObject(cube);
        }
    }
}
```


            
