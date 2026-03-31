This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).GetAssetPathsFromAssetBundleAndAssetName




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

public static string[] GetAssetPathsFromAssetBundleAndAssetName(string assetBundleName,
string assetName);






### Description



Get the Asset paths for all Assets tagged with assetBundleName and
                named assetName.





Get the Asset paths for all Assets tagged with assetBundleName and named
                    assetName, regardless of extension or path e.g. "Assets/House.prefab",
                    "Assets/Textures/House.png" and "Assets/Data/House.xml" when assetName
                    is "House".


              


```
using UnityEditor;
using UnityEngine;public class ExampleScript
{
    [MenuItem("AssetDatabase/Display assets in an AssetBundle")]
    static void ExampleScriptCode1()
    {
        string[] assetPaths = AssetDatabase.GetAssetPathsFromAssetBundleAndAssetName("assetname", "House");
        foreach (var assetPath in assetPaths)
            Debug.Log(assetPath);
    }    [MenuItem("AssetDatabase/AssetBundle creation")]
    static void ExampleScriptCode2()
    {
        BuildPipeline.BuildAssetBundles("Assets/AssetBundles", BuildAssetBundleOptions.None, BuildTarget.StandaloneOSX);
    }
}
```


            
