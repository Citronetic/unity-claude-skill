This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).IsMainAssetAtPathLoaded




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

public static bool IsMainAssetAtPathLoaded(string assetPath);






### Parameters



| Parameter | Description |
| --- | --- |
| assetPath | Filesystem path of the asset to load. |





### Description



Returns true if the main asset object at `assetPath` is loaded in memory.





All paths are relative to the Project folder, for example: "Assets/MyTextures/hello.png".

Additional resources: [AssetDatabase.LoadMainAssetAtPath](AssetDatabase.LoadMainAssetAtPath.html), [Resources.UnloadAsset](Resources.UnloadAsset.html), [EditorUtility.UnloadUnusedAssetsImmediate](EditorUtility.UnloadUnusedAssetsImmediate.html).


              


```
using UnityEditor;
using UnityEngine;public class AssetDatabaseExamples : MonoBehaviour
{
    [MenuItem("AssetDatabase/Is Main Asset At Path Loaded")]
    static void IsMainAssetAtPathLoadedExample()
    {
        //Create a material and unload it
        var materialPath = "Assets/Materials/NewMat0.mat";
        var material = new Material(Shader.Find("Standard"));
        AssetDatabase.CreateAsset(material, materialPath);
        Resources.UnloadAsset(material);        //This will be false
        Debug.Log(AssetDatabase.IsMainAssetAtPathLoaded(materialPath));
        //Load material into memory
        AssetDatabase.LoadAssetAtPath(materialPath, typeof(Object));
        //This will be true
        Debug.Log(AssetDatabase.IsMainAssetAtPathLoaded(materialPath));
    }
}
```


            
