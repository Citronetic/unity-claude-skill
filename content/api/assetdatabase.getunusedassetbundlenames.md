This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).GetUnusedAssetBundleNames




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

public static string[] GetUnusedAssetBundleNames();






### Description



Return all the unused assetBundle names in the asset database.


              


```
using System.Linq;
using UnityEngine;
using UnityEditor;public class AssetDatabaseExamples : MonoBehaviour
{
    [MenuItem("AssetDatabase/Check For Unused Asset Bundles")]
    static void FindUnusedAssetBundles()
    {
        var unusedBundles = AssetDatabase.GetUnusedAssetBundleNames();
        var unusedAssetBundleString = "";        //Add all except the last Asset Bundle name into the Unused Asset Bundle String with a comma at the end
        for (var i = 0; i < unusedBundles.Length - 1; i++)
        {
            unusedAssetBundleString += unusedBundles[i] + ", ";
        }
        //Add the last string without a comma
        unusedAssetBundleString += unusedBundles.Last();
        Debug.Log($"Unused Asset Bundles: {unusedAssetBundleString}.");
    }
}
```


            
