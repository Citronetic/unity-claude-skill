This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).GetAssetPathsFromAssetBundle




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

public static string[] GetAssetPathsFromAssetBundle(string assetBundleName);






### Description



Returns an array containing the paths of all assets marked with the specified Asset Bundle name.





All paths returned are relative to the project folder, for example: "Assets/MyTextures/hello.png" will be returned if "hello.png" has been added to an Asset Bundle.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;public class GetAssetPathsFromAssetBundleExample : MonoBehaviour
{
    [MenuItem("APIExamples/GetAssetPathsFromAssetBundle")]
    static void GatherAllAssetsInAssetBundles()
    {
        string[] allAssetBundles = AssetDatabase.GetAllAssetBundleNames();        List<string> allAssetsInAnAssetBundle = new List<string>();
        for (int i = 0; i < allAssetBundles.Length; ++i)
        {
            var curBundleName = allAssetBundles[i];
            var assetsInCurBundle = AssetDatabase.GetAssetPathsFromAssetBundle(curBundleName);            allAssetsInAnAssetBundle.AddRange(assetsInCurBundle);
        }        //allAssetsInAnAssetBundle now contains all assets that belong to an asset bundle
    }
}
```


            
