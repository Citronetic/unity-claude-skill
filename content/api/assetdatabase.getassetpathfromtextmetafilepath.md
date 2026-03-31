This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).GetAssetPathFromTextMetaFilePath




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

public static string GetAssetPathFromTextMetaFilePath(string path);






### Description



Gets the path to the asset file associated with a text .meta file.


              


```
using System.IO;
using UnityEditor;
using UnityEngine; public class AssetDatabaseExamples : MonoBehaviour
 {
     [MenuItem("AssetDatabase/Get All Assets With Meta File")]
     static void GetAllAssetsWithMetaFiles()
     {
         var files = Directory.GetFiles("Assets/", "*.meta", SearchOption.AllDirectories);         foreach (var file in files)
         {
             var path = AssetDatabase.GetAssetPathFromTextMetaFilePath(file);
             Debug.Log(path);
         }
     }
 }
```


            
