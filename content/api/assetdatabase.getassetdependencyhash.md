This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).GetAssetDependencyHash




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

public static [Hash128](Hash128.html) GetAssetDependencyHash(string path);






## Declaration

public static [Hash128](Hash128.html) GetAssetDependencyHash(GUID guid);






### Parameters



| Parameter | Description |
| --- | --- |
| path | Project relative path to the asset. |
| guid | GUID of the asset. |





### Returns



**Hash128**
        Aggregate hash.





### Description



Returns the hash of all the dependencies of an asset.





The hash aggregates the following: source asset path, source asset, meta file, target platform and importer version.
The change of this hash indicates that the imported asset may have changed so the relevant asset bundles should be rebuilt.


              


```
using UnityEditor;
using UnityEngine;public class AssetDatabaseExamples : MonoBehaviour
{
    [MenuItem("AssetDatabase/Dependency Hash Example")]
    public static void DependencyHashExample()
    {
        //Load a Material, change its shader and save it
        var matPath = "Assets/Material.mat";
        var asset = (Material)AssetDatabase.LoadMainAssetAtPath(matPath);
        asset.shader = Shader.Find("Unlit/Texture");
        AssetDatabase.SaveAssets();        //Print out the hash into the console
        var hash = AssetDatabase.GetAssetDependencyHash(matPath);
        Debug.Log(hash);        //Change the Shader on the Material and save it
        asset.shader = Shader.Find("Standard");
        AssetDatabase.SaveAssets();        //Hash will be different
        hash = AssetDatabase.GetAssetDependencyHash(matPath);
        Debug.Log(hash);
    }
}
```


            
