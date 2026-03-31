This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).ReleaseCachedFileHandles




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

public static void ReleaseCachedFileHandles();






### Description



Calling this function will release file handles internally cached by Unity. This allows modifying asset or meta files safely thus avoiding potential file sharing IO errors.


              


```
using System.IO;
using UnityEditor;
using UnityEngine;public class AssetDatabaseExamples : MonoBehaviour
{
    //Replace meta file information
    [MenuItem("AssetDatabase/Release Cached File Handles Example")]
    public static void ReleaseCachedFileHandlesExample()
    {
        //Read and store meta information that will be replacing the meta file
        var metaContent = File.ReadAllText("NewMetaFile.txt");        //Get Material's meta file path
        var metaFilePath = AssetDatabase.GetTextMetaFilePathFromAssetPath("Assets/Material.mat");        //Release CachedFileHandles to avoid any I/O errors
        AssetDatabase.ReleaseCachedFileHandles();        //Replace the meta file with the contents of NewMetaFile.txt
        File.WriteAllText(metaFilePath, metaContent);
        AssetDatabase.Refresh();
    }
}
```


            
