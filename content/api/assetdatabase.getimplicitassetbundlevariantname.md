This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).GetImplicitAssetBundleVariantName




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

public static string GetImplicitAssetBundleVariantName(string assetPath);






### Parameters



| Parameter | Description |
| --- | --- |
| assetPath | The asset's path. |





### Returns



**string**
        Returns the name of the AssetBundle Variant that a given asset belongs to. See the method description for more details.





### Description



Returns the name of the AssetBundle Variant that a given asset belongs to.





If the asset has been explicitly assigned to an AssetBundle Variant, then that value is returned.
If the asset doesn't belong to an AssetBundle Variant, its parent folders are traversed until one that belongs to an AssetBundle Variant is found. If a folder that matches this condition is found, its AssetBundle Variant name is returned. If none is found, an empty string is returned.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEngine; public class AssetDatabaseExamples : MonoBehaviour
 {
     [MenuItem("AssetDatabase/Export Ground Textures")]
     static void ExportGroundTextures()
     {
         var groundTextures4k = new List<string>();
         var groundTextures2k = new List<string>();
         foreach (var guid in AssetDatabase.FindAssets("l:Ground", new []{"Assets/Textures"}))
         {
             var path = AssetDatabase.GUIDToAssetPath(guid);
             if(AssetDatabase.GetImplicitAssetBundleVariantName(path) == "4k")
                 groundTextures4k.Add(path);
             else
                 groundTextures2k.Add(path);
         }
         AssetDatabase.ExportPackage(groundTextures4k.ToArray(), "groundTextures4k.unitypackage");
         AssetDatabase.ExportPackage(groundTextures2k.ToArray(), "groundTextures2k.unitypackage");
     }
 }
```


            
