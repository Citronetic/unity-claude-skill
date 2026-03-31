This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).ImportAsset




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

public static void ImportAsset(string path,
[ImportAssetOptions](ImportAssetOptions.html) options = ImportAssetOptions.Default);






### Description



Import asset at path.





This imports an Asset at the specified path, and triggers a number of callbacks including [AssetModificationProcessor.OnWillSaveAssets](AssetModificationProcessor.OnWillSaveAssets.html) and [AssetPostprocessor.OnPostprocessAllAssets](AssetPostprocessor.OnPostprocessAllAssets.html)

All paths are relative to the project folder, for example: "Assets/MyTextures/hello.png"

Additional resources: [ImportAssetOptions](ImportAssetOptions.html).


              


```
using System.IO;
using UnityEditor;
using UnityEngine;public class ImportAssetExample : MonoBehaviour
{
    [MenuItem("APIExamples/ImportAsset")]
    static void ImportAssetOnlyImportsSingleAsset()
    {
        string[] fileNames = new[] { "test_file01.txt", "test_file02.txt" };        for (int i = 0; i < fileNames.Length; ++i)
        {
            var unimportedFileName = fileNames[i];
            var assetsPath = Application.dataPath + "/Artifacts/" + unimportedFileName;
            File.WriteAllText(assetsPath, "Testing 123");
        }        var relativePath = "Assets/Artifacts/test_file01.txt";
        AssetDatabase.ImportAsset(relativePath);
    }
}public class PostProcessImportAsset : AssetPostprocessor
{
    //Based on this example, the output from this function should be:
    //  OnPostprocessAllAssets
    //  Imported: Assets/Artifacts/test_file01.txt
    //
    //test_file02.txt should not even show up on the Project Browser
    //until a refresh happens.
    static void OnPostprocessAllAssets(string[] importedAssets, string[] deletedAssets, string[] movedAssets, string[] movedFromAssetPaths)
    {
        Debug.Log("OnPostprocessAllAssets");        foreach (var imported in importedAssets)
            Debug.Log("Imported: " + imported);        foreach (var deleted in deletedAssets)
            Debug.Log("Deleted: " + deleted);        foreach (var moved in movedAssets)
            Debug.Log("Moved: " + moved);        foreach (var movedFromAsset in movedFromAssetPaths)
            Debug.Log("Moved from Asset: " + movedFromAsset);
    }
}
```


            
