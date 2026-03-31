This version of Unity is unsupported.



# [ModelImporter](ModelImporter.html).GetReferencedClipsForModelPath




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

public static string[] GetReferencedClipsForModelPath(string modelPath);






### Parameters



| Parameter | Description |
| --- | --- |
| modelPath | The model for which to find matching referenced clips. |





### Returns



**string[]**
        Array of referenced clip GUIDs matching the given model.





### Description



Returns all the referenced clips matching the given model name.





Note: referenced clips are matched against the given model by respecting the EditorSettings.referencedClipsExactNaming project setting.


              


```
using UnityEditor;
using UnityEngine;public class TestMenus
{
    // Create a menu named "Log Referenced Clips" in the "Tests" menu
    [MenuItem("Tests/Log Referenced Clips")]
    static void LogReferencedClips()
    {
        var modelPath = "Assets/Characters/Asset.fbx";
        Debug.Log($"Referenced Clips for {modelPath}:");        var referencedClips = ModelImporter.GetReferencedClipsForModelPath(modelPath);
        foreach (var referencedClip in referencedClips)
            Debug.Log($"--Clip: {AssetDatabase.GUIDToAssetPath(referencedClip)}");        // Output:
        // Referenced Clips for Assets/Characters/Asset.fbx:
        // --Clip: Assets/Characters/Asset@Jump.fbx
        // --Clip: Assets/Characters/Asset@Run.fbx
        // --Clip: Assets/Characters/Asset@Walk.fbx
    }
}
```


            
