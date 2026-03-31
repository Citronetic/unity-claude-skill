This version of Unity is unsupported.



# [Undo](Undo.html).RegisterImporterUndo




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

public static void RegisterImporterUndo(string path,
string name);






### Parameters



| Parameter | Description |
| --- | --- |
| path | Path of the asset importer to register for Undo. |
| name | The name of the undo operation. |





### Description



Copies the state of the importer for the given asset path.





This method is used to Undo a [AssetDatabase.SetImporterOverride](AssetDatabase.SetImporterOverride.html) operation.


              


```
using UnityEditor;
using UnityEngine;
using UnityEditor.AssetImporters;
using UnityEditor.Experimental;[ScriptedImporter(1, null, new[] {"fbx"})]
class MyFBXImporter : ScriptedImporter
{
    public override void OnImportAsset(AssetImportContext ctx)
    {
        var go = new GameObject("root");
        ctx.AddObjectToAsset("root", go);
        ctx.SetMainObject(go);
    }
}class ChangeImporterOverrideWithUndo
{
    [MenuItem("Assets/Change Importer To MyFBXImporter With Undo")]
    static void ChangeImporterWithUndo()
    {
        var assetPath = AssetDatabase.GetAssetPath(Selection.activeObject);
        Undo.RegisterImporterUndo(assetPath, "Changed Importer");
        AssetDatabase.SetImporterOverride<MyFBXImporter>(assetPath);
    }
}
```


            
